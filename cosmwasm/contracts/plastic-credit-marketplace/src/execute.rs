use cosmos_sdk_proto::cosmos::authz::v1beta1::MsgExec;
use cosmos_sdk_proto::traits::{Message, TypeUrl};
use cosmos_sdk_proto::traits::MessageExt;
use cosmwasm_std::{entry_point, Binary, DepsMut, Env, MessageInfo, Response, Uint64, Coin, CosmosMsg, Empty};
use crate::{msg::ExecuteMsg, error::ContractError, state::{LISTINGS, Listing, NEXT_LISTING_ID}};

#[entry_point]
pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::CreateListing { denom, number_of_credits, price_per_credit } => execute_create_listing(deps, env, info, denom, number_of_credits, price_per_credit),
    }
}

pub fn execute_create_listing(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    denom: String,
    number_of_credits: Uint64,
    price_per_credit: Coin,
) -> Result<Response, ContractError> {
    if number_of_credits.is_zero() {
        return Err(ContractError::ZeroCredits {});
    }

    if price_per_credit.amount.is_zero() {
        return Err(ContractError::ZeroPrice {});
    }

    let next_listing_id = NEXT_LISTING_ID.load(deps.storage)?;

    LISTINGS.save(deps.storage, next_listing_id, &Listing {
        id: next_listing_id,
        owner: info.sender.clone(),
        denom: denom.clone(),
        number_of_credits,
        price_per_credit,
    })?;

    NEXT_LISTING_ID.save(deps.storage, &(next_listing_id + 1))?;

    let mut transfer_msg = MsgTransferCredits {
        from: info.sender.to_string(),
        to: env.contract.address.to_string(),
        denom: denom.clone(),
        amount: number_of_credits.u64(),
        retire: false,
    };

    let contract_address = env.contract.address.to_string();
    let exec_msg = MsgExec {
        msgs: vec![transfer_msg.to_any().unwrap()],
        grantee: contract_address,
    };
    let msg = CosmosMsg::Stargate {
        type_url: "/cosmos.authz.v1beta1.MsgExec".to_string(),
        value: Binary::from(exec_msg.encode_to_vec()),
    };

    Ok(Response::new().add_message(msg))
}

#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgTransferCredits {
    #[prost(string, tag = "1")]
    pub from: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub to: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
    #[prost(uint64, tag = "4")]
    pub amount: u64,
    #[prost(bool, tag = "5")]
    pub retire: bool,
}

impl TypeUrl for MsgTransferCredits {
    const TYPE_URL: &'static str = "/empowerchain.plasticcredit.MsgTransferCredits";
}