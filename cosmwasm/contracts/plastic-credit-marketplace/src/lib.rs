use cosmwasm_std::{
    entry_point, DepsMut, Env, MessageInfo, Response,
};
use fee_splitter::instantiate_fee_splitter;
use msg::InstantiateMsg;
use crate::error::ContractError;
use crate::error::ContractError::FeeSplitError;
use crate::state::ADMIN;

pub mod state;
pub mod msg;
pub mod execute;
pub mod error;
pub mod query;

#[entry_point]
pub fn instantiate(
	deps: DepsMut,
	_env: Env,
	_info: MessageInfo,
	msg: InstantiateMsg,
) -> Result<Response, ContractError> {
	instantiate_fee_splitter(deps.storage, msg.fee_percentage, msg.shares).map_err(|e| FeeSplitError(e))?;

	let admin = deps.api.addr_validate(&msg.admin)?;
	ADMIN.save(deps.storage, &admin).unwrap();

	Ok(Response::new())
}

#[cfg(test)]
mod tests {
	use super::*;
	use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info};
	use cosmwasm_std::{coins, Decimal};
	use fee_splitter::Share;
	use crate::state::ADMIN;

	#[test]
	fn test_initialization() {
		let mut deps = mock_dependencies();

		let info = mock_info("creator", &coins(1, "BTC"));

		let dev_share = Share {
			address: "devs".to_string(),
			percentage: Decimal::percent(80)
		};
		let user_share = Share {
			address: "users".to_string(),
			percentage: Decimal::percent(10)
		};
		let grandma_share = Share {
			address: "grandma".to_string(),
			percentage: Decimal::percent(10)
		};
		let res = instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg{ admin: info.sender.to_string(), fee_percentage: Decimal::permille(10), shares: vec![dev_share, user_share, grandma_share] }).unwrap();
		assert_eq!(0, res.messages.len());

		let config = fee_splitter::get_config(deps.as_ref().storage).unwrap();
		assert_eq!(config.fee_percentage, Decimal::permille(10));
		assert_eq!(config.shares.len(), 3);
		assert_eq!(config.shares[0].address, "devs");
		assert_eq!(config.shares[0].percentage, Decimal::percent(80));
		assert_eq!(config.shares[1].address, "users");
		assert_eq!(config.shares[1].percentage, Decimal::percent(10));
		assert_eq!(config.shares[2].address, "grandma");
		assert_eq!(config.shares[2].percentage, Decimal::percent(10));

		let admin = ADMIN.load(deps.as_ref().storage).unwrap();
		assert_eq!(admin, info.sender);
	}

	#[test]
	fn test_initialization_with_no_fee_share() {
		let mut deps = mock_dependencies();

		let info = mock_info("creator", &coins(1, "BTC"));

		// we can just call .unwrap() to assert this was a success
		let res = instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg{ admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();
		assert_eq!(0, res.messages.len());
	}
}