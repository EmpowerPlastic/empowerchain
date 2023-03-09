use cosmwasm_std::StdError;
use thiserror::Error;

#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("listing needs to have more than zero credits listed")]
    ZeroCredits {},

    #[error("listing needs to have a price per credit")]
    ZeroPrice {},

    #[error("not enough credits available on listing to buy")]
    NotEnoughCredits {},

    #[error("not enough funds sent to buy credits")]
    NotEnoughFunds {},

    #[error("too much funds sent to buy credits")]
    TooMuchFunds {},

    #[error("listing not found")]
    ListingNotFound {},
}