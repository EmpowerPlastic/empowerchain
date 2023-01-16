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
}