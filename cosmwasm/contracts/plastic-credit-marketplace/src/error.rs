use cosmwasm_std::StdError;
use thiserror::Error;
use fee_splitter::error::FeeSplitterError;

#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("unauthorized")]
    Unauthorized {},

    #[error("listing needs to have more than zero credits listed")]
    ZeroCredits {},

    #[error("listing needs to have a price per credit")]
    ZeroPrice {},

    #[error("not enough credits available on listing")]
    NotEnoughCredits {},

    #[error("not enough funds sent to buy credits")]
    NotEnoughFunds {},

    #[error("too much funds sent to buy credits")]
    TooMuchFunds {},

    #[error("listing not found")]
    ListingNotFound {},

    #[error("listing already exists")]
    ListingAlreadyExists {},

    #[error("timeout not in future")]
    TimeoutNotInFuture {},

    #[error("timeout over maximum, which is set to {max_timeout} seconds")]
    TimeoutTooLong {max_timeout: u64},
    
    #[error("freeze timed out")]
    TimedOut {},

    #[error("freeze not found")]
    FreezeNotFound {},

    #[error("fee split error {0}")]
    FeeSplitError(#[from] FeeSplitterError),
}