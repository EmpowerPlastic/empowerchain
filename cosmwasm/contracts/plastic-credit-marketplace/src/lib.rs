use cosmwasm_std::{
    entry_point, DepsMut, Empty, Env, MessageInfo, Response, StdResult,
};
use state::NEXT_LISTING_ID;

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
	_msg: Empty,
) -> StdResult<Response> {
	NEXT_LISTING_ID.save(deps.storage, &1)?;

	Ok(Response::new())
}

#[cfg(test)]
mod tests {
	use super::*;
	use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info};
	use cosmwasm_std::coins;


	#[test]
	fn test_initialization() {
		let mut deps = mock_dependencies();

		let info = mock_info("creator", &coins(1, "BTC"));

		// we can just call .unwrap() to assert this was a success
		let res = instantiate(deps.as_mut(), mock_env(), info, Empty{}).unwrap();
		assert_eq!(0, res.messages.len());

		// it worked, let's query the state
		let next_listing = NEXT_LISTING_ID.load(deps.as_ref().storage).unwrap();
		assert_eq!(1, next_listing)
	}
}