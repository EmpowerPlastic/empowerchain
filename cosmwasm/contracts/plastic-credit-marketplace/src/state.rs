use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Coin, Uint64, Addr};
use cw_storage_plus::{Item, Map};

#[cw_serde]
pub struct Listing {
    pub id: u64, 
    pub owner: Addr,
    pub denom: String,
    pub number_of_credits: Uint64,
    pub price_per_credit: Coin,
}

pub const NEXT_LISTING_ID: Item<u64> = Item::new("next_listing_id");
pub const LISTINGS: Map<u64, Listing> = Map::new("listings");