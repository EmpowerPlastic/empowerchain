use cosmwasm_std::{entry_point, Deps, Env, StdResult, Binary, to_binary, Addr, Coin, CosmosMsg};
use cw_storage_plus::Bound;
use fee_splitter::get_fee_split;

use crate::{msg::{QueryMsg, ListingResponse, ListingsResponse}, state::{LISTINGS, Listing}};
use crate::msg::PriceResponse;

pub const DEFAULT_LIMIT: u64 = 30;

#[entry_point]
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::Listing {owner, denom} => to_binary(&listing(deps, owner, denom)?),
        QueryMsg::Listings { limit, start_after } => to_binary(&listings(deps, start_after, limit)?),
        QueryMsg::FeeSplitConfig {} => to_binary(&fee_splitter::get_config(deps.storage)?),
        QueryMsg::Price { owner, denom, number_of_credits_to_buy } => to_binary(&price(deps, owner, denom, number_of_credits_to_buy)?),
    }
}

pub fn listings(
    deps: Deps,
    start_after: Option<(Addr, String)>,
    limit: Option<u64>,
) -> StdResult<ListingsResponse> {
    let limit = limit.unwrap_or(DEFAULT_LIMIT);
    let start = start_after.map(Bound::exclusive);

    let listings: Vec<Listing> = LISTINGS
        .range(deps.storage, start, None, cosmwasm_std::Order::Ascending)
        .take(limit as usize)
        .collect::<Result<Vec<((Addr, String), Listing)>, _>>()?
        .into_iter()
        .map(|(_, listing)| listing)
        .collect();

    Ok(ListingsResponse { listings })
}

pub fn listing(
    deps: Deps, 
    owner: Addr,
    denom: String,
) -> StdResult<ListingResponse> {
    let listing = LISTINGS.load(deps.storage, (owner, denom))?;
    Ok(ListingResponse { listing })
}

pub fn price(
    deps: Deps,
    owner: Addr,
    denom: String,
    number_of_credits_to_buy: u64,
) -> StdResult<PriceResponse> {
    let listing = LISTINGS.load(deps.storage, (owner, denom.clone()))?;

    let (total_price, fee, _) = get_price_and_fee(deps, listing, number_of_credits_to_buy);

    Ok(PriceResponse { total_price, fee })
}

pub fn get_price_and_fee(deps: Deps, listing: Listing, number_of_credits_to_buy: u64) -> (Coin, Coin, Vec<CosmosMsg>) {
    let total_price_amount = listing.price_per_credit.amount.checked_mul(number_of_credits_to_buy.into()).unwrap();
    let total_price = Coin {
        denom: listing.price_per_credit.denom.clone(),
        amount: total_price_amount,
    };
    let (fee_split_msgs, fee) = get_fee_split(deps.storage, total_price.clone()).unwrap();

    (total_price, fee, fee_split_msgs)
}

#[cfg(test)]
mod tests {
    mod query_listings_tests {
        use cosmwasm_std::{Coin, coins, from_binary, Uint128, Uint64, StdError, Decimal, Addr};
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info};
        use crate::execute::execute;
        use crate::{instantiate, query};
        use crate::msg::{ExecuteMsg, ListingsResponse, InstantiateMsg, ListingResponse};
        use crate::query::query;

        #[test]
        fn test_query_listing_found() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg{ admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "ptest".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), info.clone(), msg.clone()).unwrap();

            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listing {
                owner: info.sender.clone(),
                denom: "ptest".to_string(),
            }).unwrap();
            let res: ListingResponse = from_binary(&res).unwrap();
            assert_eq!(res.listing.denom, "ptest");
            assert_eq!(res.listing.number_of_credits, Uint64::from(42u64));
            assert_eq!(res.listing.price_per_credit, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(1337u128),
            });
            assert_eq!(res.listing.operator, None);
        }
        #[test]
        fn test_query_listing_not_found() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg{ admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listing {
                owner: info.sender.clone(),
                denom: "ptest".to_string(),
            });
            match res {
                Ok(_) => panic!("Expected error"),
                Err(e) => assert_eq!(e, StdError::NotFound { kind: "plastic_credit_marketplace::state::Listing".to_string() }),
            }
        }

        #[test]
        fn test_query_listings() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg{ admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            // No listings should return an empty list
            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listings {
                limit: None,
                start_after: None,
            }).unwrap();
            let res: ListingsResponse = from_binary(&res).unwrap();
            assert_eq!(res.listings.len(), 0);

            // Create vector of strings
            let mut denoms: Vec<String> = Vec::new();
            for i in b'a'..=b'd' {
                for j in b'a'..=b'z' {
                    let denom = format!("ptest{}{}", i as char, j as char);
                    denoms.push(denom.to_string());
                }
            }

            // Let every other listing have an operator
            for (i, denom) in denoms.clone().iter().enumerate() {
                let msg = ExecuteMsg::CreateListing {
                    denom: denom.to_string(),
                    number_of_credits: Uint64::from(42u64),
                    price_per_credit: Coin {
                        denom: "token".to_string(),
                        amount: Uint128::from(1337u128),
                    },
                    operator: if i % 2 == 0 { Some(Addr::unchecked("operator".to_string())) } else { None },
                };
                execute(deps.as_mut(), mock_env(), info.clone(), msg.clone()).unwrap();
            }

            // Query with no limit should return 30 listings
            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listings {
                limit: None,
                start_after: None,
            }).unwrap();
            let res: ListingsResponse = from_binary(&res).unwrap();
            assert_eq!(res.listings.len(), 30);
            // Check that they all have the expected values
            for i in 0..30 {
                assert_eq!(res.listings[i].denom, denoms[i]);
                assert_eq!(res.listings[i].number_of_credits, Uint64::from(42u64));
                assert_eq!(res.listings[i].price_per_credit, Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                });
                // Every other listing has an operator
                assert_eq!(res.listings[i].operator, if i % 2 == 0 { Some(Addr::unchecked("operator".to_string())) } else { None });
            }

            // Query with limit 50 should return 50 listings
            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listings {
                limit: Some(50),
                start_after: None,
            }).unwrap();
            let res: ListingsResponse = from_binary(&res).unwrap();
            assert_eq!(res.listings.len(), 50);

            // Query the next 50 listings, should return the next 50 listings
            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listings {
                limit: Some(50),
                start_after: Some((res.listings[49].owner.clone(), res.listings[49].denom.clone())),
            }).unwrap();
            let res: ListingsResponse = from_binary(&res).unwrap();
            assert_eq!(res.listings.len(), 50);
            // Check that they all have the expected values
            for i in 0..50 {
                assert_eq!(res.listings[i].denom, denoms[i + 50]);
                assert_eq!(res.listings[i].number_of_credits, Uint64::from(42u64));
                assert_eq!(res.listings[i].price_per_credit, Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                });
                // Every other listing has an operator
                assert_eq!(res.listings[i].operator, if (i + 50) % 2 == 0 { Some(Addr::unchecked("operator".to_string())) } else { None });
            }

            // Query the next 50 listings, should return the last 4 listings
            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listings {
                limit: Some(50),
                start_after: Some((res.listings[49].owner.clone(), res.listings[49].denom.clone())),
            }).unwrap();
            let res: ListingsResponse = from_binary(&res).unwrap();
            assert_eq!(res.listings.len(), 4);
            // Check that they all have the expected values
            for i in 0..4 {
                assert_eq!(res.listings[i].denom, denoms[i + 100]);
                assert_eq!(res.listings[i].number_of_credits, Uint64::from(42u64));
                assert_eq!(res.listings[i].price_per_credit, Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                });
                // Every other listing has an operator
                assert_eq!(res.listings[i].operator, if (i + 100) % 2 == 0 { Some(Addr::unchecked("operator".to_string())) } else { None });
            }
        }
    }

    mod query_fee_split_config_tests {
        use cosmwasm_std::{testing::{mock_dependencies, mock_info, mock_env}, coins, Decimal, from_binary};
        use fee_splitter::Share;

        use crate::{instantiate, msg::InstantiateMsg, query::{query, self}};

        #[test]
        fn test_query_fee_split_config() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            let share = Share {
                address: "devs".to_string(),
                percentage: Decimal::percent(100)
            };
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg{ admin: info.sender.to_string(), fee_percentage: Decimal::percent(1), shares: vec![share] }).unwrap();

            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::FeeSplitConfig {}).unwrap();
            let res: fee_splitter::Config = from_binary(&res).unwrap();
            assert_eq!(res.fee_percentage, Decimal::percent(1));
            assert_eq!(res.shares.len(), 1);
            assert_eq!(res.shares[0].address, "devs");
            assert_eq!(res.shares[0].percentage, Decimal::percent(100));
        }
    }

    mod query_price {
        use cosmwasm_std::{Coin, coins, Decimal, from_binary, StdError, Uint128, Uint64};
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info};
        use fee_splitter::Share;
        use crate::execute::execute;
        use crate::{instantiate, query};
        use crate::msg::{ExecuteMsg, InstantiateMsg, PriceResponse};
        use crate::query::query;

        #[test]
        fn test_query_price() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg{ admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "ptest".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), info.clone(), msg.clone()).unwrap();

            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Price {
                owner: info.sender.clone(),
                denom: "ptest".to_string(),
                number_of_credits_to_buy: 11,
            }).unwrap();
            let res: PriceResponse = from_binary(&res).unwrap();
            assert_eq!(res.total_price, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(14707u128),
            });
            assert_eq!(res.fee, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(0u128)
            });
        }

        #[test]
        fn test_query_price_with_fee() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &coins(2, "token"));
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(90),
            };
            let user_share = Share {
                address: "user".to_string(),
                percentage: Decimal::percent(10),
            };
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(5), shares: vec![dev_share, user_share] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "ptest".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), msg.clone()).unwrap();

            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Price {
                owner: creator_info.sender.clone(),
                denom: "ptest".to_string(),
                number_of_credits_to_buy: 11,
            }).unwrap();
            let res: PriceResponse = from_binary(&res).unwrap();
            assert_eq!(res.total_price, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(14707u128),
            });
            assert_eq!(res.fee, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(73u128)
            });
        }

        #[test]
        fn test_query_price_listing_not_found() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg{ admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Price {
                owner: creator_info.sender.clone(),
                denom: "ptest".to_string(),
                number_of_credits_to_buy: 11,
            });
            match res {
                Ok(_) => panic!("Expected error"),
                Err(e) => assert_eq!(e, StdError::NotFound { kind: "plastic_credit_marketplace::state::Listing".to_string() }),
            }
        }
    }
}