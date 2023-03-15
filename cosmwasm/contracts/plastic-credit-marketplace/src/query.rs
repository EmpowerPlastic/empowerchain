use cosmwasm_std::{entry_point, Deps, Env, StdResult, Binary, to_binary};
use cw_storage_plus::Bound;

use crate::{msg::{QueryMsg, ListingsResponse}, state::{LISTINGS, Listing}};

pub const DEFAULT_LIMIT: u64 = 30;

#[entry_point]
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::Listings { limit, start_after } => to_binary(&listings(deps, start_after, limit)?),
    }
}

pub fn listings(
    deps: Deps,
    start_after: Option<u64>,
    limit: Option<u64>,
) -> StdResult<ListingsResponse> {
    let min = start_after.map(Bound::exclusive);
    let limit = limit.unwrap_or(DEFAULT_LIMIT);

    let listings: Vec<Listing> = LISTINGS
        .range(deps.storage, min, None, cosmwasm_std::Order::Ascending)
        .take(limit as usize)
        .collect::<Result<Vec<(u64, Listing)>, _>>()?
        .into_iter()
        .map(|(_, listing)| listing)
        .collect();

    Ok(ListingsResponse { listings })
}

#[cfg(test)]
mod tests {
    mod query_listings_tests {
        use cosmwasm_std::{Coin, coins, Empty, from_binary, Uint128, Uint64};
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info};
        use crate::execute::execute;
        use crate::{instantiate, query};
        use crate::msg::{ExecuteMsg, ListingsResponse};
        use crate::query::query;

        #[test]
        fn test_query_listings() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), Empty {}).unwrap();

            // No listings should return an empty list
            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listings {
                limit: None,
                start_after: None,
            }).unwrap();
            let res: ListingsResponse = from_binary(&res).unwrap();
            assert_eq!(res.listings.len(), 0);

            for i in 0..101 {
                let denom = format!("ptest{}", i);
                let msg = ExecuteMsg::CreateListing {
                    denom: denom.to_string(),
                    number_of_credits: Uint64::from(42u64),
                    price_per_credit: Coin {
                        denom: "token".to_string(),
                        amount: Uint128::from(1337u128),
                    },
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
                let denom = format!("ptest{}", i);
                assert_eq!(res.listings[i].denom, denom);
                assert_eq!(res.listings[i].number_of_credits, Uint64::from(42u64));
                assert_eq!(res.listings[i].price_per_credit, Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                });
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
                start_after: Some(50),
            }).unwrap();
            let res: ListingsResponse = from_binary(&res).unwrap();
            assert_eq!(res.listings.len(), 50);
            // Check that they all have the expected values
            for i in 0..50 {
                let denom = format!("ptest{}", i + 50);
                assert_eq!(res.listings[i].denom, denom);
                assert_eq!(res.listings[i].number_of_credits, Uint64::from(42u64));
                assert_eq!(res.listings[i].price_per_credit, Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                });
            }

            // Query the next 50 listings, should return the last 1 listing
            let res = query(deps.as_ref(), mock_env(), query::QueryMsg::Listings {
                limit: Some(50),
                start_after: Some(100),
            }).unwrap();
            let res: ListingsResponse = from_binary(&res).unwrap();
            assert_eq!(res.listings.len(), 1);
            // Check that it has the expected values
            let denom = format!("ptest{}", 100);
            assert_eq!(res.listings[0].denom, denom);
            assert_eq!(res.listings[0].number_of_credits, Uint64::from(42u64));
            assert_eq!(res.listings[0].price_per_credit, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(1337u128),
            });
        }
    }
}