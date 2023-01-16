use cosmwasm_std::{entry_point, DepsMut, Env, MessageInfo, Response, Uint128, Coin};
use crate::{msg::ExecuteMsg, error::ContractError, state::{LISTINGS, Listing, NEXT_LISTING_ID}};

#[entry_point]
pub fn execute(deps: DepsMut, _env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::CreateListing { denom, number_of_credits, price_per_credit } => execute_create_listing(deps, info, denom, number_of_credits, price_per_credit),
    }
}


pub fn execute_create_listing(
    deps: DepsMut,
    info: MessageInfo,
    denom: String, 
    number_of_credits: Uint128, 
    price_per_credit: Coin
) -> Result<Response, ContractError> {
    if number_of_credits.is_zero() {
        return Err(ContractError::ZeroCredits {});
    }

    if price_per_credit.amount.is_zero() {
        return Err(ContractError::ZeroPrice {});
    }

    let next_listing_id = NEXT_LISTING_ID.load(deps.storage)?;

    LISTINGS.save(deps.storage, next_listing_id, &Listing{
        id: next_listing_id,
        owner: info.sender.clone(),               
        denom,
        number_of_credits,
        price_per_credit,
    })?;

    NEXT_LISTING_ID.save(deps.storage, &(next_listing_id + 1))?;

    Ok(Response::new())
}