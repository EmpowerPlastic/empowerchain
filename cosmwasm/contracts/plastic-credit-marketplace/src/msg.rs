use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::{Uint64, Coin, Addr, Decimal};
use fee_splitter::Share;

use crate::state::Listing;

#[cw_serde]
pub struct InstantiateMsg {
    pub admin: String,
    pub fee_percentage: Decimal,
    pub shares: Vec<Share>,
}

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
    },
    CancelListing {
        denom: String,
    },
    EditFeeSplitConfig {
        fee_percentage: Decimal,
        shares: Vec<Share>
    },
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
        /// The address of the listing to start the query after. If
        /// this is set, the listing with this address will not be
        /// included in the results.
        start_after: Option<(Addr, String)>,
    },
    #[returns(ListingResponse)]
    Listing {
        owner: Addr,
        denom: String,
    },
    #[returns(fee_splitter::Config)]
    FeeSplitConfig {},
}

#[cw_serde]
pub struct ListingsResponse {
    pub listings: Vec<Listing>,
}

#[cw_serde]
pub struct ListingResponse {
    pub listing: Listing,
}