use cosmwasm_std::StdError;
use thiserror::Error;

#[derive(Error, Debug, PartialEq)]
pub enum FeeSplitterError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("fee Splitter has already been instantiated")]
    AlreadyInstantiated {},

    #[error("fee percentage must be between 0 and 100")]
    InvalidFeePercentage {},

    #[error("shares must add up to 100, unless fee percentage is 0, in which case they must add up to 0")]
    InvalidShares {},
}