use cosmos_sdk_proto::cosmos::authz::v1beta1::MsgExec;
use cosmos_sdk_proto::traits::{Message, TypeUrl};
use cosmos_sdk_proto::traits::MessageExt;
use cosmwasm_std::{entry_point, Binary, DepsMut, Env, MessageInfo, Response, Uint64, Coin, CosmosMsg};
use crate::{msg::ExecuteMsg, error::ContractError, state::{LISTINGS, Listing, NEXT_LISTING_ID}};

#[entry_point]
pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::CreateListing { denom, number_of_credits, price_per_credit } => execute_create_listing(deps, env, info, denom, number_of_credits, price_per_credit),
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

    let exec_credit_transfer_msg = create_exec_credit_transfer_message(
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

fn create_exec_credit_transfer_message(from: String, to: String, denom: String, amount: u64) -> CosmosMsg {
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
    use super::*;
    use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info, MOCK_CONTRACT_ADDR};
    use cosmwasm_std::{coins, CosmosMsg, Empty, Order, Uint128};
    use crate::instantiate;

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
        assert_eq!(5, res.attributes.len());

        assert_eq!(1, res.messages.len());
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