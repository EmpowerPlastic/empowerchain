use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::{Uint64, Coin, Addr};

use crate::state::Listing;

#[cw_serde]
pub enum ExecuteMsg {
    CreateListing {
        denom: String,
        number_of_credits: Uint64,
        price_per_credit: Coin,
    },
    UpdateListing {
        denom: String,
        number_of_credits: Uint64,
        price_per_credit: Coin,
    },
    BuyCredits {
        owner: Addr,
        denom: String,
        number_of_credits_to_buy: u64,
    }
}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    #[returns(ListingsResponse)]
    Listings {
        /// The maximum number of listings to return as part of this
        /// query. If no limit is set a max of 30 listings will be
        /// returned.
        limit: Option<u64>,
    },
    #[returns(ListingResponse)]
    Listing {
        owner: Addr,
        denom: String,
    },
}

#[cw_serde]
pub struct ListingsResponse {
    pub listings: Vec<Listing>,
}

#[cw_serde]
pub struct ListingResponse {
    pub listing: Listing,
}