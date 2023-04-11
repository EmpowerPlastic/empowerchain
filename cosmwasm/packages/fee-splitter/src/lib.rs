use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Decimal, CosmosMsg, BankMsg, Coin, Fraction, StdError, Storage};
use error::FeeSplitterError;
use state::CONFIG;

mod state;
pub mod error;

#[cw_serde]
pub struct Config {
    pub fee_percentage: Decimal,
    pub shares: Vec<Share>,
}

#[cw_serde]
pub struct Share {
    pub address: String,
    pub percentage: Decimal,
}

pub fn instantiate_fee_splitter(storage: &mut dyn Storage, fee_percentage: Decimal, shares: Vec<Share>) -> Result<(), FeeSplitterError> {
    // Check that config has not already been instantiated
    let config = CONFIG.may_load(storage).unwrap();
    if config.is_some() {
        return Err(FeeSplitterError::AlreadyInstantiated {})
    }

    edit_fee_split_config(storage, fee_percentage, shares)
}

pub fn edit_fee_split_config(storage: &mut dyn Storage, fee_percentage: Decimal, shares: Vec<Share>) -> Result<(), FeeSplitterError> {
    if fee_percentage > Decimal::percent(100) {
        return Err(FeeSplitterError::InvalidFeePercentage { fee_percentage })
    }

    // Check that shares add up to the correct amount
    let expected_total_percentage = if Decimal::is_zero(&fee_percentage) {
        Decimal::zero()
    } else {
        Decimal::percent(100)
    };
    let mut total_percentage = Decimal::zero();
    for share in shares.iter() {
        total_percentage = total_percentage.checked_add(share.percentage).unwrap();
    }
    if total_percentage != expected_total_percentage {
        return Err(FeeSplitterError::InvalidShares {
            expected: expected_total_percentage,
            total: total_percentage,
        })
    }

    // Save new config
    let config = Config {
        fee_percentage,
        shares,
    };
    CONFIG.save(storage, &config).unwrap();

    Ok(())
}

pub fn get_fee_split(storage: &dyn Storage, full_fee: Coin) -> Result<(Vec<CosmosMsg>, Coin), FeeSplitterError> {
    let config = CONFIG.load(storage).unwrap();
    if Decimal::is_zero(&config.fee_percentage) || config.shares.is_empty() {
        return Ok((vec![], full_fee));
    }

    let mut msgs = vec![];
    let full_fee_as_decimal = Decimal::from_atomics(full_fee.amount, 0).unwrap();
    let fee = full_fee_as_decimal.checked_mul(config.fee_percentage).unwrap();
    for share in config.shares.iter() {
        let share_amount = fee.checked_mul(share.percentage).unwrap();
        let coin_amount = share_amount.numerator().checked_div(share_amount.denominator()).unwrap();
        let share_amount_as_coin = Coin {
            denom: full_fee.denom.clone(),
            amount: coin_amount, 
        };
        let msg = CosmosMsg::Bank(BankMsg::Send {
            to_address: share.address.clone(),
            amount: vec![share_amount_as_coin],
        });
        msgs.push(msg);
    }

    let fee_as_u128 = fee.numerator().checked_div(fee.denominator()).unwrap();
    let remaining_amount = full_fee.amount.checked_sub(fee_as_u128).unwrap();
    let remaining_as_coin = Coin {
        denom: full_fee.denom.clone(),
        amount: remaining_amount,
    };
    Ok((msgs, remaining_as_coin))
}

pub fn get_config(storage: &dyn Storage) -> Result<Config, StdError> {
    CONFIG.load(storage)
}

#[cfg(test)]
mod tests {
    mod instantiate_tests {
        use cosmwasm_std::{testing::mock_dependencies, Decimal};

        use crate::{state::CONFIG, instantiate_fee_splitter, Share, error::FeeSplitterError};

        #[test]
        fn test_instatiate_fee_splitter() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share, stakers_share]).unwrap();
            
            let config = CONFIG.load(&deps.storage).unwrap();
            assert_eq!(config.fee_percentage, Decimal::permille(5));
            assert_eq!(config.shares.len(), 2);
            assert_eq!(config.shares[0].address, "dev");
            assert_eq!(config.shares[0].percentage, Decimal::percent(80));
            assert_eq!(config.shares[1].address, "stakers");
            assert_eq!(config.shares[1].percentage, Decimal::percent(20));
        }

        #[test]
        fn test_instantiate_with_invalid_fee_percentage() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            let err = instantiate_fee_splitter(deps.as_mut().storage, Decimal::percent(101), vec![dev_share, stakers_share]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidFeePercentage {
                fee_percentage: Decimal::percent(101),
            });
        }

        #[test]
        fn test_instantiate_with_invalid_shares() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            let someone_else_share = Share {
                address: "someone_else".to_string(),
                percentage: Decimal::permille(1),
            };

            // No shares
            let err = instantiate_fee_splitter(deps.as_mut().storage, Decimal::percent(100), vec![]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidShares {
                expected: Decimal::percent(100),
                total: Decimal::zero(),
            });

            // Shares add up to less than 100
            let err = instantiate_fee_splitter(deps.as_mut().storage, Decimal::percent(100), vec![dev_share.clone()]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidShares {
                expected: Decimal::percent(100),
                total: Decimal::percent(80),
            });

            // shares add up to more than 100
            let err = instantiate_fee_splitter(deps.as_mut().storage, Decimal::percent(100), vec![dev_share, stakers_share, someone_else_share]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidShares {
                expected: Decimal::percent(100),
                total: Decimal::permille(1001),
            });
        }

        #[test]
        fn test_instantiate_with_already_instantiated_config() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share.clone(), stakers_share.clone()]).unwrap();
            let err = instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share, stakers_share]).unwrap_err();
            assert_eq!(err, FeeSplitterError::AlreadyInstantiated {});
        }

        #[test]
        fn test_instantiate_with_zero_fee_percentage() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };

            // With shares should error
            let err = instantiate_fee_splitter(deps.as_mut().storage, Decimal::zero(), vec![dev_share, stakers_share]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidShares {
                expected: Decimal::zero(),
                total: Decimal::percent(100),
            });

            // Without shares should work
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::zero(), vec![]).unwrap();
        }
    }

    mod edit_tests {
        use cosmwasm_std::{testing::mock_dependencies, Decimal};

        use crate::{state::CONFIG, error::FeeSplitterError, instantiate_fee_splitter, edit_fee_split_config, Share};

        #[test]
        fn test_edit_config() {
            let mut deps = mock_dependencies();
            let dev_share_before = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share_before = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share_before, stakers_share_before]).unwrap();

            let dev_share_after = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(70),
            };
            let stakers_share_after = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(30),
            };
            edit_fee_split_config(deps.as_mut().storage, Decimal::permille(10), vec![dev_share_after, stakers_share_after]).unwrap();
            let config = CONFIG.load(&deps.storage).unwrap();
            assert_eq!(config.fee_percentage, Decimal::permille(10));
            assert_eq!(config.shares.len(), 2);
            assert_eq!(config.shares[0].address, "dev");
            assert_eq!(config.shares[0].percentage, Decimal::percent(70));
            assert_eq!(config.shares[1].address, "stakers");
            assert_eq!(config.shares[1].percentage, Decimal::percent(30));
        }

        #[test]
        fn test_edit_with_invalid_fee_percentage() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share.clone(), stakers_share.clone()]).unwrap();

            let err = edit_fee_split_config(deps.as_mut().storage, Decimal::percent(101), vec![dev_share, stakers_share]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidFeePercentage {
                fee_percentage: Decimal::percent(101),
            });
        }

        #[test]
        fn test_edit_with_invalid_shares() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            let someone_else_share = Share {
                address: "someone_else".to_string(),
                percentage: Decimal::permille(1),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share.clone(), stakers_share.clone()]).unwrap();

            // No shares
            let err = edit_fee_split_config(deps.as_mut().storage, Decimal::percent(100), vec![]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidShares {
                expected: Decimal::percent(100),
                total: Decimal::zero(),
            });

            // Shares add up to less than 100
            let err = edit_fee_split_config(deps.as_mut().storage, Decimal::percent(100), vec![dev_share.clone()]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidShares {
                expected: Decimal::percent(100),
                total: Decimal::percent(80),
            });

            // shares add up to more than 100
            let err = edit_fee_split_config(deps.as_mut().storage, Decimal::percent(100), vec![dev_share, stakers_share, someone_else_share]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidShares {
                expected: Decimal::percent(100),
                total: Decimal::permille(1001),
            });
        }

        #[test]
        fn test_edit_with_zero_fee_percentage() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share.clone(), stakers_share.clone()]).unwrap();

            // With shares should error
            let err = edit_fee_split_config(deps.as_mut().storage, Decimal::zero(), vec![dev_share, stakers_share]).unwrap_err();
            assert_eq!(err, FeeSplitterError::InvalidShares {
                expected: Decimal::zero(),
                total: Decimal::percent(100),
            });

            // Without shares should work
            edit_fee_split_config(deps.as_mut().storage, Decimal::zero(), vec![]).unwrap();
            let config = CONFIG.load(&deps.storage).unwrap();
            assert_eq!(config.fee_percentage, Decimal::percent(0));
            assert_eq!(config.shares.len(), 0);
        }
    }

    mod get_fee_split_tests {
        use cosmwasm_std::{Decimal, testing::mock_dependencies, Uint128, Coin, CosmosMsg, BankMsg};

        use crate::{instantiate_fee_splitter, get_fee_split, Share};

        #[test]
        fn test_get_fee_split() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share.clone(), stakers_share.clone()]).unwrap();

            // 1000 umpwr fee
            let (fee_split_msgs, remaining_amount) = get_fee_split(deps.as_mut().storage, Coin {
                denom: "umpwr".to_string(),
                amount: Uint128::new(1000),
            }).unwrap();
            assert_eq!(fee_split_msgs.len(), 2);
            assert_eq!(remaining_amount.denom, "umpwr");
            assert_eq!(remaining_amount.amount, Uint128::new(995));

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = fee_split_msgs[0].clone() {
                assert_eq!(to_address, "dev");
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::new(4));
            } else {
                panic!("Unexpected message type");
            }

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = fee_split_msgs[1].clone() {
                assert_eq!(to_address, "stakers");
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::new(1));
            } else {
                panic!("Unexpected message type");
            }
        }

        #[test]
        fn test_small_amounts() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::permille(5), vec![dev_share.clone(), stakers_share.clone()]).unwrap();

            // 500 umpwr fee, with 0.5% fee and 80/20 split means that dev gets 2 umpwr and stakers get 0 (rounded down)
            // and the remaining 498 umpwr is returned
            let (fee_split_msgs, remaining_amount) = get_fee_split(deps.as_mut().storage, Coin {
                denom: "umpwr".to_string(),
                amount: Uint128::new(500),
            }).unwrap();
            assert_eq!(fee_split_msgs.len(), 2);
            assert_eq!(remaining_amount.denom, "umpwr");
            assert_eq!(remaining_amount.amount, Uint128::new(498));

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = fee_split_msgs[0].clone() {
                assert_eq!(to_address, "dev");
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::new(2));
            } else {
                panic!("Unexpected message type");
            }

            // We can't split it down further, so stakers get 0 in this case
            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = fee_split_msgs[1].clone() {
                assert_eq!(to_address, "stakers");
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::new(0));
            } else {
                panic!("Unexpected message type");
            }
        }

        #[test]
        fn test_get_fee_split_for_zero_fee_percentage() {
            let mut deps = mock_dependencies();
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::zero(), vec![]).unwrap();

            let (fee_split_msgs, remaining_amount) = get_fee_split(deps.as_mut().storage, Coin {
                denom: "umpwr".to_string(),
                amount: Uint128::new(100),
            }).unwrap();
            assert_eq!(fee_split_msgs.len(), 0);
            assert_eq!(remaining_amount.denom, "umpwr");
            assert_eq!(remaining_amount.amount, Uint128::new(100));
        }
    }

    mod get_config_tests {
        use cosmwasm_std::{Decimal, testing::mock_dependencies};

        use crate::{instantiate_fee_splitter, get_config, Share};

        #[test]
        fn test_get_config() {
            let mut deps = mock_dependencies();
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(80),
            };
            let stakers_share = Share {
                address: "stakers".to_string(),
                percentage: Decimal::percent(20),
            };
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::percent(5), vec![dev_share.clone(), stakers_share.clone()]).unwrap();

            let config = get_config(deps.as_ref().storage).unwrap();
            assert_eq!(config.fee_percentage, Decimal::percent(5));
            assert_eq!(config.shares.len(), 2);
            assert_eq!(config.shares[0], dev_share);
            assert_eq!(config.shares[1], stakers_share);
        }

        #[test]
        fn test_get_config_with_zero_fee_percentage() {
            let mut deps = mock_dependencies();
            instantiate_fee_splitter(deps.as_mut().storage, Decimal::percent(0), vec![]).unwrap();

            let config = get_config(deps.as_ref().storage).unwrap();
            assert_eq!(config.fee_percentage, Decimal::percent(0));
            assert_eq!(config.shares.len(), 0);
        }
    }
}