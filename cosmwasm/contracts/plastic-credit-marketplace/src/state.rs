use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Coin, Uint64, Addr, Timestamp};
use cw_storage_macro::index_list;
use cw_storage_plus::{IndexedMap, Item, Map, MultiIndex};

pub type ListingKey = (Addr, String);
pub type FreezeKey = (Addr, String, Addr);

#[cw_serde]
pub struct Listing<> {
    pub owner: Addr,
    pub denom: String,
    pub number_of_credits: Uint64,
    pub price_per_credit: Coin,
    pub operator: Option<Addr>,
}

#[cw_serde]
pub struct Freeze {
    pub buyer: Addr,
    pub number_of_credits: Uint64,
    pub timeout: Timestamp,
    pub listing_key: ListingKey,
}

#[index_list(Freeze)]
pub struct FreezeIndexes<'a> {
    pub listing: MultiIndex<'a, ListingKey, Freeze, FreezeKey>,
}

pub fn freezes<'a>() -> IndexedMap<'a, FreezeKey, Freeze, FreezeIndexes<'a>> {
    let indexes = FreezeIndexes {
        listing: MultiIndex::new(|_pk: &[u8], f: &Freeze| f.listing_key.clone(), "freezes", "freezes__buyer"),
    };

    IndexedMap::new("freezes", indexes)
}

pub const LISTINGS: Map<(Addr, String), Listing> = Map::new("listings");

pub const ADMIN: Item<Addr> = Item::new("admin");