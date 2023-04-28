use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Coin, Uint64, Addr};
use cw_storage_plus::{Item, Map};

#[cw_serde]
pub struct Listing<> {
    pub owner: Addr,
    pub denom: String,
    pub number_of_credits: Uint64,
    pub price_per_credit: Coin,
}

pub const LISTINGS: Map<(Addr, String), Listing> = Map::new("listings");

pub const ADMIN: Item<Addr> = Item::new("admin");