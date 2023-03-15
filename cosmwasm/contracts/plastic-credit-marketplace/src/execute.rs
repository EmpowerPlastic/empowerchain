use cosmos_sdk_proto::cosmos::authz::v1beta1::MsgExec;
use cosmos_sdk_proto::traits::{Message, TypeUrl};
use cosmos_sdk_proto::traits::MessageExt;
use cosmwasm_std::{entry_point, Binary, DepsMut, Env, MessageInfo, Response, Uint64, Coin, CosmosMsg, BankMsg};
use crate::{msg::ExecuteMsg, error::ContractError, state::{LISTINGS, Listing, NEXT_LISTING_ID}};

#[entry_point]
pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::CreateListing { denom, number_of_credits, price_per_credit } => execute_create_listing(deps, env, info, denom, number_of_credits, price_per_credit),
        ExecuteMsg::BuyCredits { listing_id, number_of_credits_to_buy } => execute_buy_credits(deps, env, info, listing_id, number_of_credits_to_buy),
    }
}

pub fn execute_create_listing(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    denom: String,
    number_of_credits: Uint64,
    price_per_credit: Coin,
) -> Result<Response, ContractError> {
    if number_of_credits.is_zero() {
        return Err(ContractError::ZeroCredits {});
    }

    if price_per_credit.amount.is_zero() {
        return Err(ContractError::ZeroPrice {});
    }

    let next_listing_id = NEXT_LISTING_ID.load(deps.storage)?;
    let listing = &Listing {
        id: next_listing_id,
        owner: info.sender.clone(),
        denom: denom.clone(),
        number_of_credits,
        price_per_credit: price_per_credit.clone(),
    };

    LISTINGS.save(deps.storage, next_listing_id, listing)?;
    NEXT_LISTING_ID.save(deps.storage, &(next_listing_id + 1))?;

    let exec_credit_transfer_msg = create_transfer_credits_to_contract_msg(
        info.sender.to_string(),
        env.contract.address.to_string(),
        denom,
        number_of_credits.into(),
    );

    Ok(Response::new()
        .add_attribute("action", "create_listing")
        .add_attribute("listing_id", listing.id.to_string())
        .add_attribute("listing_owner", info.sender)
        .add_attribute("number_of_credits", number_of_credits)
        .add_attribute("price_per_credit", price_per_credit.to_string())
        .add_message(exec_credit_transfer_msg)
    )
}

pub fn execute_buy_credits(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    listing_id: u64,
    number_of_credits_to_buy: u64,
) -> Result<Response, ContractError> {
    if number_of_credits_to_buy == 0 {
        return Err(ContractError::ZeroCredits {});
    }

    let mut listing = LISTINGS.load(deps.storage, listing_id).map_err(|_| ContractError::ListingNotFound {})?;

    if listing.number_of_credits < number_of_credits_to_buy.into() {
        return Err(ContractError::NotEnoughCredits {});
    }

    let total_price = listing.price_per_credit.amount.checked_mul(number_of_credits_to_buy.into()).unwrap();
    if info.funds.len() != 1 || info.funds[0].denom != listing.price_per_credit.denom || info.funds[0].amount < total_price {
        return Err(ContractError::NotEnoughFunds {});
    }
    if info.funds[0].amount > total_price {
        return Err(ContractError::TooMuchFunds {})
    }

    listing.number_of_credits = listing.number_of_credits.checked_sub(number_of_credits_to_buy.into()).unwrap();
    LISTINGS.save(deps.storage, listing_id, &listing)?;

    let transfer_credits_msg = create_transfer_credits_from_contract_msg(
        env,
        info.sender.to_string(),
        listing.denom,
        number_of_credits_to_buy,
    );
    let transfer_funds_msg = CosmosMsg::Bank(BankMsg::Send {
        to_address: listing.owner.to_string(),
        amount: vec![Coin {
            denom: listing.price_per_credit.denom,
            amount: total_price,
        }],
    });
    Ok(Response::new()
        .add_attribute("action", "buy_credits")
        .add_attribute("listing_id", listing.id.to_string())
        .add_attribute("buyer", info.sender)
        .add_attribute("number_of_credits_bought", number_of_credits_to_buy.to_string())
        .add_attribute("total_price", total_price.to_string())
        .add_messages(vec![transfer_credits_msg, transfer_funds_msg])
    )
}

fn create_transfer_credits_to_contract_msg(from: String, to: String, denom: String, amount: u64) -> CosmosMsg {
    let transfer_msg = MsgTransferCredits {
        from,
        to: to.clone(),
        denom,
        amount,
        retire: false,
    };
    let exec_msg = MsgExec {
        msgs: vec![transfer_msg.to_any().unwrap()],
        grantee: to,
    };
    CosmosMsg::Stargate {
        type_url: "/cosmos.authz.v1beta1.MsgExec".to_string(),
        value: Binary::from(exec_msg.encode_to_vec()),
    }
}

fn create_transfer_credits_from_contract_msg(env: Env, to: String, denom: String, number_of_credits: u64) -> CosmosMsg {
    let transfer_to_buyer_msg = MsgTransferCredits {
        from: env.contract.address.to_string(),
        to,
        denom,
        amount: number_of_credits,
        retire: false,
    };
    CosmosMsg::Stargate {
        type_url: MsgTransferCredits::TYPE_URL.to_string(),
        value: Binary::from(transfer_to_buyer_msg.encode_to_vec()),
    }
}

// Ref: https://github.com/arnabmitra/authz-sc-proto/blob/main/src/contract.rs
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgTransferCredits {
    #[prost(string, tag = "1")]
    pub from: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub to: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
    #[prost(uint64, tag = "4")]
    pub amount: u64,
    #[prost(bool, tag = "5")]
    pub retire: bool,
}

impl TypeUrl for MsgTransferCredits {
    const TYPE_URL: &'static str = "/empowerchain.plasticcredit.MsgTransferCredits";
}

#[cfg(test)]
mod tests {
    mod create_listing_tests {
        use cosmos_sdk_proto::{
            cosmos::authz::v1beta1::MsgExec,
            traits::MessageExt,
            traits::Message,
        };
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info, MOCK_CONTRACT_ADDR};
        use cosmwasm_std::{Coin, coins, CosmosMsg, Empty, Order, Uint128, Uint64};
        use crate::{
            execute::{execute, MsgTransferCredits},
            instantiate,
            msg::ExecuteMsg,
            state::{Listing, LISTINGS, NEXT_LISTING_ID},
        };
        use crate::error::ContractError;

        #[test]
        fn test_create_listing() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), Empty {}).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
            };

            let res = execute(deps.as_mut(), mock_env(), info.clone(), msg).unwrap();
            assert_eq!(res.attributes.len(), 5);

            assert_eq!(res.messages.len(), 1);
            let sg_msg = &res.messages[0].msg;
            if let CosmosMsg::Stargate { type_url, value } = sg_msg {
                assert_eq!(type_url, "/cosmos.authz.v1beta1.MsgExec");

                let exec_msg = MsgExec::decode(value.as_slice()).unwrap();
                assert_eq!(exec_msg.msgs.len(), 1);

                let transfer_msg = MsgTransferCredits::from_any(&exec_msg.msgs[0]).unwrap();
                assert_eq!(transfer_msg.from, info.sender.to_string());
                assert_eq!(transfer_msg.to, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 42);
                assert_eq!(transfer_msg.retire, false);
            } else {
                panic!("Expected Stargate message");
            }

            let listing = LISTINGS.load(deps.as_ref().storage, 1).unwrap();
            assert_eq!(listing.id, 1);
            assert_eq!(listing.owner, info.sender);
            assert_eq!(listing.denom, "pcrd");
            assert_eq!(listing.number_of_credits, Uint64::from(42u64));
            assert_eq!(listing.price_per_credit, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(1337u128),
            });

            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(u64, Listing)>>();
            assert_eq!(all_listings.len(), 1);

            let next_listing = NEXT_LISTING_ID.load(deps.as_ref().storage).unwrap();
            assert_eq!(next_listing, 2)
        }

        #[test]
        fn test_create_multiple_listings() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), Empty {}).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
            };

            execute(deps.as_mut(), mock_env(), info.clone(), msg.clone()).unwrap();
            execute(deps.as_mut(), mock_env(), info.clone(), msg.clone()).unwrap();
            execute(deps.as_mut(), mock_env(), info.clone(), msg.clone()).unwrap();

            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(u64, Listing)>>();
            assert_eq!(all_listings.len(), 3);

            let next_listing = NEXT_LISTING_ID.load(deps.as_ref().storage).unwrap();
            assert_eq!(next_listing, 4)
        }

        #[test]
        fn test_create_listing_zero_credits() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), Empty {}).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(0u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
            };

            let err = execute(deps.as_mut(), mock_env(), info.clone(), msg).unwrap_err();
            assert_eq!(err, ContractError::ZeroCredits {});

            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(u64, Listing)>>();
            assert_eq!(all_listings.len(), 0);
        }

        #[test]
        fn test_create_listing_zero_price() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), Empty {}).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(0u128),
                },
            };

            let err = execute(deps.as_mut(), mock_env(), info.clone(), msg).unwrap_err();
            assert_eq!(err, ContractError::ZeroPrice {});

            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(u64, Listing)>>();
            assert_eq!(all_listings.len(), 0);
        }
    }

    mod buy_credits_tests {
        use cosmos_sdk_proto::traits::{Message, TypeUrl};
        use cosmwasm_std::{BankMsg, Coin, coins, CosmosMsg, Empty, Uint128, Uint64};
        use cosmwasm_std::testing::{MOCK_CONTRACT_ADDR, mock_dependencies, mock_env, mock_info};
        use crate::error::ContractError;
        use crate::execute::{execute, MsgTransferCredits};
        use crate::instantiate;
        use crate::msg::ExecuteMsg;
        use crate::state::LISTINGS;

        #[test]
        fn test_buy_credits_happy_path() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), Empty {}).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "umpwr".to_string(),
                    amount: Uint128::from(2u128),
                },
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(20, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                listing_id: 1,
                number_of_credits_to_buy: 10u64,
            };
            let res = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap();
            assert_eq!(res.attributes.len(), 5);

            let listing = LISTINGS.load(deps.as_ref().storage, 1).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(32u64)); // Because 10 were bought

            assert_eq!(res.messages.len(), 2);
            if let CosmosMsg::Stargate { type_url, value } = &res.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, buyer_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 10);
                assert_eq!(transfer_msg.retire, false);
            } else {
                panic!("Expected Stargate message");
            }

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = &res.messages[1].msg {
                assert_eq!(to_address, &creator_info.sender);
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::from(20u128));
            } else {
                panic!("Expected Bank message");
            }
        }

        #[test]
        fn test_buy_multiple_times_from_same_listing() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), Empty {}).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(30u64),
                price_per_credit: Coin {
                    denom: "umpwr".to_string(),
                    amount: Uint128::from(3u128),
                },
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(30, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                listing_id: 1,
                number_of_credits_to_buy: 10u64,
            };
            execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg.clone()).unwrap();
            execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg.clone()).unwrap();
            execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg.clone()).unwrap();

            let listing = LISTINGS.load(deps.as_ref().storage, 1).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(0u64)); // Because 30 were bought
        }

        #[test]
        fn test_listing_does_not_exist() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), Empty {}).unwrap();

            let buyer_info = mock_info("buyer", &coins(1337, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                listing_id: 1,
                number_of_credits_to_buy: 10u64,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_buying_zero_credits() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), Empty {}).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(1337, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                listing_id: 1,
                number_of_credits_to_buy: 0u64,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::ZeroCredits {});
        }

        #[test]
        fn test_buying_without_enough_funds() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), Empty {}).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(2u128),
                },
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info_with_not_enough_umpwr = mock_info("buyer", &coins(1, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                listing_id: 1,
                number_of_credits_to_buy: 1u64,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info_with_not_enough_umpwr.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughFunds {});
        }

        #[test]
        fn test_buying_with_too_much_funds() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), Empty {}).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "umpwr".to_string(),
                    amount: Uint128::from(2u128),
                },
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info_with_too_much_umpwr = mock_info("buyer", &coins(3, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                listing_id: 1,
                number_of_credits_to_buy: 1u64,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info_with_too_much_umpwr.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::TooMuchFunds {});
        }

        #[test]
        fn test_buying_more_credits_than_available() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), Empty {}).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(1337, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                listing_id: 1,
                number_of_credits_to_buy: 43u64,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughCredits {});
        }
    }
}