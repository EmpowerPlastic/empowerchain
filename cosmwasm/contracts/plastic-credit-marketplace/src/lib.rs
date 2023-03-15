use cosmwasm_std::{
    entry_point, DepsMut, Empty, Env, MessageInfo, Response, StdResult,
};

pub mod state;
pub mod msg;
pub mod execute;
pub mod error;
pub mod query;

#[entry_point]
pub fn instantiate(
	_deps: DepsMut,
	_env: Env,
	_info: MessageInfo,
	_msg: Empty,
) -> StdResult<Response> {
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

	}
}