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
	NEXT_LISTING_ID.save(deps.storage, &0)?;

	Ok(Response::new())
}

#[cfg(test)]
mod tests {
	use super::*;
	use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info, MOCK_CONTRACT_ADDR};
	use cosmwasm_std::{attr, coins, CosmosMsg};

	#[test]
	fn test_initialization() {
		let mut deps = mock_dependencies();

		let info = mock_info("creator", &coins(1, "BTC"));

		// we can just call .unwrap() to assert this was a success
		let res = instantiate(deps.as_mut(), mock_env(), info, Empty{}).unwrap();
		assert_eq!(0, res.messages.len());

		// it worked, let's query the state
		let next_listing = NEXT_LISTING_ID.load(deps.as_ref().storage).unwrap();
		assert_eq!(0, next_listing)
	}
}

/*#[cfg(test)]
mod test {
    use cosmwasm_std::{Empty, Addr, Uint64, Uint128, Coin};
    use cw_multi_test::{App, Contract, ContractWrapper, Executor};

	use crate::instantiate;
    use crate::execute::execute;
	use crate::query::query;
	use crate::state::NEXT_LISTING_ID;
	use crate::msg::{ExecuteMsg, QueryMsg, ListingsResponse};
	use crate::error::ContractError;

	fn marketplace_contract() -> Box<dyn Contract<Empty>> {
		let contract = ContractWrapper::new(execute, instantiate, query);
		Box::new(contract)
	}

	fn setup() -> (App, Addr, Addr) {
		let mut app = App::default();

		let code_id = app.store_code(marketplace_contract());
		let owner = Addr::unchecked("owner");

		let contract_addr = app
			.instantiate_contract(code_id, owner.clone(), &Empty{}, &[], "plastic-credit-marketplace", None)
			.unwrap();

		(app, contract_addr, owner)
	}

	#[test]
	fn test_instantiate() {
		let (app, contract_addr, _) = setup();

		let next_listing = NEXT_LISTING_ID.query(&app.wrap(), contract_addr.clone()).unwrap();
		assert_eq!(0, next_listing)
	}

	#[test]
	fn test_create_listing() {
		let (mut app, contract_addr, owner) = setup();

		for _ in 0..5 {
			app.execute_contract(owner.clone(), contract_addr.clone(), &ExecuteMsg::CreateListing{
				denom: "pcrd".to_string(),
				number_of_credits: Uint64::new(1),
				price_per_credit: Coin{
					denom: "umpwr".to_string(),
					amount: Uint128::new(100),
				}
			}, &[]).unwrap();
		}

		let listings_resp: ListingsResponse = app.wrap().query_wasm_smart(contract_addr.clone(), &QueryMsg::Listings {
			limit: None,
			start_after: None,
		}).unwrap();
		assert_eq!(5, listings_resp.listings.len());

		for (i, listing) in listings_resp.listings.iter().enumerate() {
			assert_eq!(i as u64, listing.id);
			assert_eq!(owner.clone(), listing.owner);
			assert_eq!("pcrd".to_string(), listing.denom);
			assert_eq!(Uint64::new(1), listing.number_of_credits);
			assert_eq!(Coin{
				denom: "umpwr".to_string(),
				amount: Uint128::new(100),
			}, listing.price_per_credit);
		}

		let next_listing = NEXT_LISTING_ID.query(&app.wrap(), contract_addr.clone()).unwrap();
		assert_eq!(listings_resp.listings.len(), next_listing as usize);
	}

	#[test]
	fn test_create_listing_with_zero_credits() {
		let (mut app, contract_addr, owner) = setup();

		let msg = ExecuteMsg::CreateListing{
			denom: "pcrd".to_string(),
			number_of_credits: Uint64::new(0),
			price_per_credit: Coin{
				denom: "umpwr".to_string(),
				amount: Uint128::new(100),
			}
		};
		let err = app.execute_contract(owner.clone(), contract_addr.clone(), &msg, &[]).unwrap_err();
		assert_eq!(err.downcast::<ContractError>().unwrap(), ContractError::ZeroCredits {});
		let listings: ListingsResponse = app.wrap().query_wasm_smart(contract_addr.clone(), &QueryMsg::Listings {
			limit: None,
			start_after: None,
		}).unwrap();
		assert_eq!(0, listings.listings.len());
	}

	#[test]
	fn test_create_listing_with_zero_price() {
		let (mut app, contract_addr, owner) = setup();

		let msg = ExecuteMsg::CreateListing{
			denom: "pcrd".to_string(),
			number_of_credits: Uint64::new(1),
			price_per_credit: Coin{
				denom: "umpwr".to_string(),
				amount: Uint128::new(0),
			}
		};
		let err = app.execute_contract(owner.clone(), contract_addr.clone(), &msg, &[]).unwrap_err();
		assert_eq!(err.downcast::<ContractError>().unwrap(), ContractError::ZeroPrice {});
		let listings: ListingsResponse = app.wrap().query_wasm_smart(contract_addr.clone(), &QueryMsg::Listings {
			limit: None,
			start_after: None,
		}).unwrap();
		assert_eq!(0, listings.listings.len());
	}
}*/