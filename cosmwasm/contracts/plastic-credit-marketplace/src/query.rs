use cosmwasm_std::{entry_point, Deps, Env, StdResult, Binary, to_binary, Addr};

use crate::{msg::{QueryMsg, ListingsResponse}, state::{LISTINGS, Listing}};

pub const DEFAULT_LIMIT: u64 = 30;

#[entry_point]
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::Listings {limit} => to_binary(&listings(deps, limit)?),
        QueryMsg::Listing {owner, denom} => to_binary(&listing(deps, owner, denom)?),
    }
}

pub fn listings(
    deps: Deps, 
    limit: Option<u64>
) -> StdResult<ListingsResponse> {
    let limit = limit.unwrap_or(DEFAULT_LIMIT);

    let listings: Vec<Listing> = LISTINGS
        .range(deps.storage, None, None, cosmwasm_std::Order::Ascending)
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
) -> StdResult<Listing> {
    let listing = LISTINGS.load(deps.storage, (owner, denom))?;

    Ok(listing)
}