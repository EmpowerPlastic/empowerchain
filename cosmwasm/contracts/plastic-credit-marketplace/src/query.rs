use cosmwasm_std::{entry_point, Deps, Env, StdResult, Binary, to_binary};
use cw_storage_plus::Bound;

use crate::{msg::{QueryMsg, ListingsResponse}, state::{LISTINGS, Listing}};

pub const DEFAULT_LIMIT: u64 = 30;

#[entry_point]
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::Listings {limit, start_after} => to_binary(&listings(deps, start_after, limit)?),
    }
}

pub fn listings(
    deps: Deps, 
    start_after: Option<u64>,
    limit: Option<u64>
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