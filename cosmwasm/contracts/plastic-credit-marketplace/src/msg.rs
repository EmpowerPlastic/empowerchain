use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::{Uint128, Coin};

use crate::state::Listing;

#[cw_serde]
pub enum ExecuteMsg {
    CreateListing {
        denom: String,
        number_of_credits: Uint128,
        price_per_credit: Coin,
    }
}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    #[returns(ListingsResponse)]
    Listings {
        /// The listing ID to start listing listings after. For
        /// example, if this is set to 2 listings with IDs 3 and
        /// higher will be returned.
        start_after: Option<u64>,
        /// The maximum number of listings to return as part of this
        /// query. If no limit is set a max of 30 listings will be
        /// returned.
        limit: Option<u64>,
    },
}

#[cw_serde]
pub struct ListingsResponse {
    pub listings: Vec<Listing>,
}