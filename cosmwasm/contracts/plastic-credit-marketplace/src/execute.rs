use cosmos_sdk_proto::cosmos::authz::v1beta1::MsgExec;
use cosmos_sdk_proto::traits::{Message, TypeUrl};
use cosmos_sdk_proto::traits::MessageExt;
use cosmwasm_std::{entry_point, Binary, DepsMut, Env, MessageInfo, Response, Uint64, Coin, CosmosMsg, BankMsg, Addr, Decimal, Timestamp, StdError, Uint128};
use fee_splitter::{edit_fee_split_config, Share};
use crate::{msg::ExecuteMsg, error::ContractError, state::{LISTINGS, Listing}};
use crate::error::ContractError::FeeSplitError;
use crate::query::get_price_and_fee;
use crate::state::{ADMIN, Freeze, freezes};

const MAX_TIMEOUT_SECONDS : u64 = 2419200; // 4 weeks

#[entry_point]
pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::CreateListing { denom, number_of_credits, price_per_credit, operator } => execute_create_listing(deps, env, info, denom, number_of_credits, price_per_credit, operator),
        ExecuteMsg::BuyCredits { owner, denom, number_of_credits_to_buy, retire, retiring_entity_name, retiring_entity_additional_data } => execute_buy_credits(deps, env, info, owner, denom, number_of_credits_to_buy, retire, retiring_entity_name, retiring_entity_additional_data),
        ExecuteMsg::UpdateListing { denom, number_of_credits, price_per_credit } => execute_update_listing(deps, env, info, denom, number_of_credits, price_per_credit),
        ExecuteMsg::CancelListing { denom } => execute_cancel_listing(deps, env, info, denom),
        ExecuteMsg::FreezeCredits { owner, denom, number_of_credits_to_freeze, buyer, timeout_unix_timestamp } => execute_freeze_credits(deps, env, info, owner, denom, number_of_credits_to_freeze, buyer, timeout_unix_timestamp),
        ExecuteMsg::CancelFrozenCredits { owner, denom, number_of_frozen_credits_to_cancel, buyer } => execute_cancel_frozen_credits(deps, env, info, owner, denom, buyer, number_of_frozen_credits_to_cancel),
        ExecuteMsg::ReleaseFrozenCredits { owner, denom, number_of_credits_to_release, buyer, retire, retiring_entity_name, retiring_entity_additional_data } => execute_release_frozen_credits(deps, env, info, owner, denom, buyer, number_of_credits_to_release, retire, retiring_entity_name, retiring_entity_additional_data),
        ExecuteMsg::EditFeeSplitConfig { fee_percentage, shares } => execute_edit_fee_split_config(deps, info, fee_percentage, shares),
    }
}

pub fn execute_create_listing(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    denom: String,
    number_of_credits: Uint64,
    price_per_credit: Coin,
    operator: Option<Addr>,
) -> Result<Response, ContractError> {
    if number_of_credits.is_zero() {
        return Err(ContractError::ZeroCredits {});
    }

    if price_per_credit.amount.is_zero() {
        return Err(ContractError::ZeroPrice {});
    }

    if (LISTINGS.may_load(deps.storage, (info.sender.clone(), denom.clone()))?).is_some() {
        return Err(ContractError::ListingAlreadyExists {});
    }

    let listing = &Listing {
        owner: info.sender.clone(),
        denom: denom.clone(),
        number_of_credits,
        price_per_credit: price_per_credit.clone(),
        operator,
    };

    LISTINGS.save(deps.storage, (info.sender.clone(), denom.clone()), listing)?;

    let exec_credit_transfer_msg = create_transfer_credits_to_contract_msg(
        info.sender.to_string(),
        env.contract.address.to_string(),
        denom.clone(),
        number_of_credits.into(),
    );

    Ok(Response::new()
        .add_attribute("action", "create_listing")
        .add_attribute("listing_owner", info.sender)
        .add_attribute("denom", denom)
        .add_attribute("number_of_credits", number_of_credits)
        .add_attribute("price_per_credit_amount", price_per_credit.amount.to_string())
        .add_attribute("price_per_credit_denom", price_per_credit.denom)
        .add_message(exec_credit_transfer_msg)
    )
}

pub fn execute_buy_credits(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    owner: Addr,
    denom: String,
    number_of_credits_to_buy: u64,
    retire: bool,
    retiring_entity_name: Option<String>,
    retiring_entity_additional_data: Option<String>,
) -> Result<Response, ContractError> {
    if number_of_credits_to_buy == 0 {
        return Err(ContractError::ZeroCredits {});
    }

    let mut listing = LISTINGS.load(deps.storage, (Addr::unchecked(owner.clone()), denom.clone())).map_err(|_| ContractError::ListingNotFound {})?;

    if listing.number_of_credits < number_of_credits_to_buy.into() {
        return Err(ContractError::NotEnoughCredits {});
    }

    let (total_price, fee, fee_split_msgs) = get_price_and_fee(deps.as_ref(), listing.clone(), number_of_credits_to_buy);
    if info.funds.len() != 1 || info.funds[0].denom != listing.price_per_credit.denom || info.funds[0].amount < total_price.amount {
        return Err(ContractError::NotEnoughFunds {});
    }
    if info.funds[0].amount > total_price.amount { // We can skip the denom check here because it is triggered in the previous if statement
        return Err(ContractError::TooMuchFunds {});
    }

    listing.number_of_credits = listing.number_of_credits.checked_sub(number_of_credits_to_buy.into()).unwrap();
    //let number_of_frozen_credits = listing.freezes.iter().fold(0, |acc, freeze| acc + freeze.number_of_credits.u64());
    let number_of_frozen_credits = freezes().may_load(deps.storage, (Addr::unchecked(owner.clone()), denom.clone(), info.sender.clone()))?.map_or(0, |freeze| freeze.number_of_credits.u64());
    if listing.number_of_credits.is_zero() && number_of_frozen_credits == 0 {
        LISTINGS.remove(deps.storage, (Addr::unchecked(owner.clone()), denom.clone()));
    } else {
        LISTINGS.save(deps.storage, (Addr::unchecked(owner.clone()), denom.clone()), &listing)?;
    }
    let transfer_credits_msg = create_transfer_credits_from_contract_msg(
        env,
        info.sender.to_string(),
        listing.denom.clone(),
        number_of_credits_to_buy,
        retire,
        retiring_entity_name,
        retiring_entity_additional_data,
    );

    let remaining_amount = total_price.amount.checked_sub(fee.amount).unwrap();
    let funds_after_split = Coin {
        denom: listing.price_per_credit.denom.clone(),
        amount: remaining_amount,
    };
    let transfer_funds_to_seller_msg = CosmosMsg::Bank(BankMsg::Send {
        to_address: listing.owner.to_string(),
        amount: vec![funds_after_split],
    });

    let mut msgs = vec![transfer_credits_msg, transfer_funds_to_seller_msg];
    if fee_split_msgs.len() > 0 {
        msgs.extend(fee_split_msgs);
    }

    Ok(Response::new()
        .add_attribute("action", "buy_credits")
        .add_attribute("listing_owner", listing.owner)
        .add_attribute("denom", listing.denom)
        .add_attribute("buyer", info.sender)
        .add_attribute("number_of_credits_bought", number_of_credits_to_buy.to_string())
        .add_attribute("total_price_amount", total_price.to_string())
        .add_attribute("total_price_denom", listing.price_per_credit.denom)
        .add_messages(msgs)
    )
}

fn execute_update_listing(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    denom: String,
    number_of_credits: Uint64,
    price_per_credit: Coin,
) -> Result<Response, ContractError> {
    // Can't update the number of credits to zero
    if number_of_credits.is_zero() {
        return Err(ContractError::ZeroCredits {});
    }

    // Can't update the price to zero
    if price_per_credit.amount.is_zero() {
        return Err(ContractError::ZeroPrice {});
    }

    let mut listing = LISTINGS.load(deps.storage, (info.sender.clone(), denom.clone())).map_err(|_| ContractError::ListingNotFound {})?;

    let exec_credit_transfer_msg: Option<CosmosMsg>;
    // Check if the number of credits is increasing or decreasing
    if number_of_credits < listing.number_of_credits {
        // If the number of credits is decreasing, we need to transfer the difference back to the owner
        let number_of_credits_to_transfer = listing.number_of_credits.checked_sub(number_of_credits).unwrap();
        exec_credit_transfer_msg = Some(create_transfer_credits_from_contract_msg(
            env,
            info.sender.to_string(),
            listing.denom.clone(),
            number_of_credits_to_transfer.into(),
            false,
            None,
            None,
        ));
    } else if number_of_credits > listing.number_of_credits {
        // If the number of credits is increasing, we need to transfer the difference from the owner
        let number_of_credits_to_transfer = number_of_credits.checked_sub(listing.number_of_credits).unwrap();
        exec_credit_transfer_msg = Some(create_transfer_credits_to_contract_msg(
            info.sender.to_string(),
            env.contract.address.to_string(),
            listing.denom.clone(),
            number_of_credits_to_transfer.into(),
        ));
    } else {
        // If the number of credits is the same, we don't need to transfer anything
        exec_credit_transfer_msg = None;
    }

    // Update the listing
    listing.number_of_credits = number_of_credits;
    listing.price_per_credit = price_per_credit.clone();
    LISTINGS.save(deps.storage, (listing.owner.clone(), listing.denom.clone()), &listing)?;

    let res = Response::new()
        .add_attribute("action", "update_listing")
        .add_attribute("listing_owner", info.sender)
        .add_attribute("denom", denom)
        .add_attribute("number_of_credits", number_of_credits.to_string())
        .add_attribute("price_per_credit_amount", price_per_credit.amount.to_string())
        .add_attribute("price_per_credit_denom", price_per_credit.denom);

    if let Some(msg) = exec_credit_transfer_msg {
        Ok(res.add_message(msg))
    } else {
        Ok(res)
    }
}

fn execute_cancel_listing(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    denom: String,
) -> Result<Response, ContractError> {
    let listing = LISTINGS.load(deps.storage, (info.sender.clone(), denom.clone())).map_err(|_| ContractError::ListingNotFound {})?;

    let exec_credit_transfer_msg = create_transfer_credits_from_contract_msg(
        env,
        info.sender.to_string(),
        listing.denom.clone(),
        listing.number_of_credits.into(),
        false,
        None,
        None,
    );

    LISTINGS.remove(deps.storage, (listing.owner.clone(), listing.denom.clone()));

    Ok(Response::new()
        .add_attribute("action", "cancel_listing")
        .add_attribute("listing_owner", info.sender)
        .add_attribute("denom", denom)
        .add_message(exec_credit_transfer_msg)
    )
}

fn execute_freeze_credits(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    owner: Addr,
    denom: String,
    number_of_credits_to_freeze: u64,
    buyer: Addr,
    timeout_unix_timestamp: u64,
) -> Result<Response, ContractError> {
    if number_of_credits_to_freeze == 0 {
        return Err(ContractError::ZeroCredits {});
    }

    if timeout_unix_timestamp <= env.block.time.seconds() {
        return Err(ContractError::TimeoutNotInFuture {});
    }

    let seconds_until_timeout = timeout_unix_timestamp.checked_sub(env.block.time.seconds()).unwrap();
    if seconds_until_timeout > MAX_TIMEOUT_SECONDS {
        return Err(ContractError::TimeoutTooLong {max_timeout: MAX_TIMEOUT_SECONDS});
    }

    let mut listing = LISTINGS.load(deps.storage, (Addr::unchecked(owner.clone()), denom.clone())).map_err(|_| ContractError::ListingNotFound {})?;

    // Check if the sender is either the owner or the operator
    if info.sender != listing.owner && info.sender != listing.operator.clone().unwrap_or(Addr::unchecked("".to_string())) {
        return Err(ContractError::Unauthorized {});
    }

    if listing.number_of_credits < number_of_credits_to_freeze.into() {
        return Err(ContractError::NotEnoughCredits {});
    }

    // Create or update the freeze (if it already exists we add the new ones + update the timeout)
    freezes().update(deps.storage, (Addr::unchecked(owner.clone()), denom.clone(), buyer.clone()), |freeze| -> Result<Freeze, StdError> {
        let mut number_of_credits: Uint64 = number_of_credits_to_freeze.into();
        let mut existing_timeout = 0u64;

        if let Some(freeze) = freeze {
            number_of_credits = number_of_credits.checked_add(freeze.number_of_credits).unwrap(); // Add to the existing freeze
            existing_timeout = freeze.timeout.seconds();
        }

        // Find the highest timeout
        let timeout_unix_timestamp = timeout_unix_timestamp.max(existing_timeout);

        Ok(Freeze {
            buyer: buyer.clone(),
            number_of_credits,
            timeout: Timestamp::from_seconds(timeout_unix_timestamp), // We simply overwrite any existing timeout. Can consider to use the max of the two
            listing_key: (Addr::unchecked(owner.clone()), denom.clone()),
        })
    })?;

    listing.number_of_credits = listing.number_of_credits.checked_sub(number_of_credits_to_freeze.into()).unwrap();

    LISTINGS.save(deps.storage, (listing.owner.clone(), listing.denom.clone()), &listing)?;

    Ok(Response::new()
        .add_attribute("action", "freeze_credits")
        .add_attribute("freezer", info.sender)
        .add_attribute("listing_owner", owner)
        .add_attribute("denom", denom)
        .add_attribute("buyer", buyer)
        .add_attribute("number_of_credits_frozen", number_of_credits_to_freeze.to_string())
        .add_attribute("timeout_unix_timestamp", timeout_unix_timestamp.to_string())
    )
}

fn execute_cancel_frozen_credits(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    owner: Addr,
    denom: String,
    buyer: Addr,
    mut number_of_frozen_credits_to_cancel: u64,
) -> Result<Response, ContractError> {
    let mut listing = LISTINGS.load(deps.storage, (Addr::unchecked(owner.clone()), denom.clone())).map_err(|_| ContractError::ListingNotFound {})?;
    let mut freeze = freezes().may_load(deps.storage, (Addr::unchecked(owner.clone()), denom.clone(), buyer.clone()))?.ok_or(ContractError::FreezeNotFound {})?;

    // Check if timed out, if not, we need to check permissions
    if freeze.timeout.seconds() > env.block.time.seconds() {
        // Check if the sender is either the owner or the operator
        if info.sender != listing.owner && info.sender != listing.operator.clone().unwrap_or(Addr::unchecked("".to_string())) {
            return Err(ContractError::Unauthorized {});
        }
    }

    if freeze.number_of_credits < number_of_frozen_credits_to_cancel.into() {
        return Err(ContractError::NotEnoughCredits {});
    }

    // 0 means all credits, so update the number_of_credits_to_cancel_from_freeze to the number of credits in the freeze
    if number_of_frozen_credits_to_cancel == 0 {
        number_of_frozen_credits_to_cancel = freeze.number_of_credits.u64();
    }

    freeze.number_of_credits = freeze.number_of_credits.checked_sub(number_of_frozen_credits_to_cancel.into()).unwrap();
    if freeze.number_of_credits.is_zero() {
        freezes().remove(deps.storage, (Addr::unchecked(owner.clone()), denom.clone(), buyer.clone()))?;
    } else {
        freezes().save(deps.storage, (Addr::unchecked(owner.clone()), denom.clone(), buyer.clone()), &freeze)?;
    }

    listing.number_of_credits = listing.number_of_credits.checked_add(number_of_frozen_credits_to_cancel.into()).unwrap();
    LISTINGS.save(deps.storage, (listing.owner.clone(), listing.denom.clone()), &listing)?;

    Ok(Response::new()
        .add_attribute("action", "freeze_credits")
        .add_attribute("canceler", info.sender)
        .add_attribute("listing_owner", owner)
        .add_attribute("denom", denom)
        .add_attribute("buyer", buyer)
        .add_attribute("number_of_credits_cancelled_from_freeze", number_of_frozen_credits_to_cancel.to_string())
    )
}

fn execute_release_frozen_credits(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    owner: Addr,
    denom: String,
    buyer: Addr,
    number_of_credits_to_release: u64,
    retire: bool,
    retiring_entity_name: Option<String>,
    retiring_entity_additional_data: Option<String>,
) -> Result<Response, ContractError> {
    if number_of_credits_to_release == 0 {
        return Err(ContractError::ZeroCredits {});
    }

    let listing = LISTINGS.load(deps.storage, (Addr::unchecked(owner.clone()), denom.clone())).map_err(|_| ContractError::ListingNotFound {})?;
    let mut freeze = freezes().may_load(deps.storage, (Addr::unchecked(owner.clone()), denom.clone(), buyer.clone()))?.ok_or(ContractError::FreezeNotFound {})?;

    // Check if timed out
    if freeze.timeout.seconds() <= env.block.time.seconds() {
        return Err(ContractError::TimedOut {});
    }

    // Check if the sender is either the owner or the operator
    if info.sender != listing.owner && info.sender != listing.operator.clone().unwrap_or(Addr::unchecked("".to_string())) {
        return Err(ContractError::Unauthorized {});
    }

    if freeze.number_of_credits < number_of_credits_to_release.into() {
        return Err(ContractError::NotEnoughCredits {});
    }

    freeze.number_of_credits = freeze.number_of_credits.checked_sub(number_of_credits_to_release.into()).unwrap();
    if freeze.number_of_credits.is_zero() {
        freezes().remove(deps.storage, (Addr::unchecked(owner.clone()), denom.clone(), buyer.clone()))?;
    } else {
        freezes().save(deps.storage, (Addr::unchecked(owner.clone()), denom.clone(), buyer.clone()), &freeze)?;
    }

    let (_, fee, fee_split_msgs) = get_price_and_fee(deps.as_ref(), listing.clone(), number_of_credits_to_release);

    if fee.amount > Uint128::from(0u128) {
        if info.funds.len() != 1 || info.funds[0].denom != listing.price_per_credit.denom || info.funds[0].amount < fee.amount {
            return Err(ContractError::NotEnoughFunds {});
        }
    }

    if info.funds.len() > 0 && info.funds[0].amount > fee.amount { // We can skip the denom check here because it is triggered in the previous if statement
        return Err(ContractError::TooMuchFunds {});
    }

    let transfer_credits_msg = create_transfer_credits_from_contract_msg(
        env,
        freeze.buyer.to_string(),
        listing.denom.clone(),
        number_of_credits_to_release,
        retire,
        retiring_entity_name,
        retiring_entity_additional_data,
    );
    let mut msgs = vec![transfer_credits_msg];
    if fee_split_msgs.len() > 0 {
        msgs.extend(fee_split_msgs);
    }

    Ok(Response::new()
        .add_attribute("action", "freeze_credits")
        .add_attribute("releaser", info.sender)
        .add_attribute("listing_owner", owner)
        .add_attribute("denom", denom)
        .add_attribute("buyer", buyer)
        .add_attribute("number_of_credits_released", number_of_credits_to_release.to_string())
        .add_messages(msgs)
    )
}

fn execute_edit_fee_split_config(
    deps: DepsMut,
    info: MessageInfo,
    fee_percentage: Decimal,
    shares: Vec<Share>,
) -> Result<Response, ContractError> {
    // Only admin can edit the fee split config
    let admin = ADMIN.load(deps.storage)?;
    if info.sender != admin {
        return Err(ContractError::Unauthorized {});
    }

    // Format shares before consuming it
    let formatted_shares = shares
        .iter()
        .map(|s| format!("{addr} -> {share}", addr = s.address, share = s.percentage))
        .collect::<Vec<_>>()
        .join(", ");

    edit_fee_split_config(deps.storage, fee_percentage, shares).map_err(|e| FeeSplitError(e))?;

    Ok(Response::new()
        .add_attribute("action", "edit_fee_split_config")
        .add_attribute("fee_percentage", fee_percentage.to_string())
        .add_attribute(
            "shares",
            formatted_shares
        )
        .add_attribute("admin", info.sender)
    )
}

fn create_transfer_credits_to_contract_msg(from: String, to: String, denom: String, amount: u64) -> CosmosMsg {
    let transfer_msg = MsgTransferCredits {
        from,
        to: to.clone(),
        denom,
        amount,
        retire: false,
        retiring_entity_name: "".to_string(),
        retiring_entity_additional_data: "".to_string(),
    };
    let exec_msg = MsgExec {
        msgs: vec![transfer_msg.to_any().unwrap()],
        grantee: to,
    };
    CosmosMsg::Stargate {
        type_url: "/cosmos.authz.v1beta1.MsgExec".to_string(),
        value: Binary::from(exec_msg.encode_to_vec()),
    }
}

fn create_transfer_credits_from_contract_msg(env: Env, to: String, denom: String, number_of_credits: u64, retire: bool, retiring_entity_name: Option<String>, retiring_entity_additional_data: Option<String>,) -> CosmosMsg {
    let transfer_to_buyer_msg = MsgTransferCredits {
        from: env.contract.address.to_string(),
        to,
        denom,
        amount: number_of_credits,
        retire,
        retiring_entity_name: retiring_entity_name.unwrap_or("".to_string()),
        retiring_entity_additional_data: retiring_entity_additional_data.unwrap_or("".to_string()),
    };
    CosmosMsg::Stargate {
        type_url: MsgTransferCredits::TYPE_URL.to_string(),
        value: Binary::from(transfer_to_buyer_msg.encode_to_vec()),
    }
}

// Ref: https://github.com/arnabmitra/authz-sc-proto/blob/main/src/contract.rs
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
    #[prost(string, tag = "6")]
    pub retiring_entity_name: ::prost::alloc::string::String,
    #[prost(string, tag = "7")]
    pub retiring_entity_additional_data: ::prost::alloc::string::String,
}

impl TypeUrl for MsgTransferCredits {
    const TYPE_URL: &'static str = "/empowerchain.plasticcredit.MsgTransferCredits";
}

#[cfg(test)]
mod tests {
    mod create_listing_tests {
        use cosmos_sdk_proto::{
            cosmos::authz::v1beta1::MsgExec,
            traits::MessageExt,
            traits::Message,
        };
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info, MOCK_CONTRACT_ADDR};
        use cosmwasm_std::{Coin, coins, CosmosMsg, Order, Uint128, Uint64, Addr, Decimal};
        use crate::msg::InstantiateMsg;
        use crate::{
            execute::{execute, MsgTransferCredits},
            instantiate,
            msg::ExecuteMsg,
            state::{Listing, LISTINGS},
        };
        use crate::error::ContractError;
        use crate::state::{Freeze, FreezeKey, freezes};

        #[test]
        fn test_create_listing() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg { admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };

            let res = execute(deps.as_mut(), mock_env(), info.clone(), msg).unwrap();
            assert_eq!(res.attributes.len(), 6);

            assert_eq!(res.messages.len(), 1);
            let sg_msg = &res.messages[0].msg;
            if let CosmosMsg::Stargate { type_url, value } = sg_msg {
                assert_eq!(type_url, "/cosmos.authz.v1beta1.MsgExec");

                let exec_msg = MsgExec::decode(value.as_slice()).unwrap();
                assert_eq!(exec_msg.msgs.len(), 1);

                let transfer_msg = MsgTransferCredits::from_any(&exec_msg.msgs[0]).unwrap();
                assert_eq!(transfer_msg.from, info.sender.to_string());
                assert_eq!(transfer_msg.to, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 42);
                assert_eq!(transfer_msg.retire, false);
            } else {
                panic!("Expected Stargate message");
            }

            let listing = LISTINGS.load(deps.as_ref().storage, (info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.owner, info.sender);
            assert_eq!(listing.denom, "pcrd");
            assert_eq!(listing.number_of_credits, Uint64::from(42u64));
            assert_eq!(listing.price_per_credit, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(1337u128),
            });
            assert_eq!(listing.operator, None);

            let freezes = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(FreezeKey, Freeze)>>();
            assert_eq!(freezes.len(), 0);


            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<((Addr, String), Listing)>>();
            assert_eq!(all_listings.len(), 1);
        }

        #[test]
        fn test_create_listing_with_operator() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            let operator = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg { admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Some(operator.sender.clone()),
            };

            execute(deps.as_mut(), mock_env(), info.clone(), msg).unwrap();

            let listing = LISTINGS.load(deps.as_ref().storage, (info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.owner, info.sender);
            assert_eq!(listing.denom, "pcrd");
            assert_eq!(listing.number_of_credits, Uint64::from(42u64));
            assert_eq!(listing.price_per_credit, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(1337u128),
            });
            assert_eq!(listing.operator, Some(operator.sender.clone()));

            let freezes = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(FreezeKey, Freeze)>>();
            assert_eq!(freezes.len(), 0);
        }

        #[test]
        fn test_create_multiple_listings() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            let info2 = mock_info("creator2", &coins(2, "token"));
            let info3 = mock_info("creator3", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg { admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };

            execute(deps.as_mut(), mock_env(), info.clone(), msg.clone()).unwrap();
            execute(deps.as_mut(), mock_env(), info2.clone(), msg.clone()).unwrap();
            execute(deps.as_mut(), mock_env(), info3.clone(), msg.clone()).unwrap();

            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<((Addr, String), Listing)>>();
            assert_eq!(all_listings.len(), 3);
        }

        #[test]
        fn test_create_listing_zero_credits() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg { admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(0u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };

            let err = execute(deps.as_mut(), mock_env(), info.clone(), msg).unwrap_err();
            assert_eq!(err, ContractError::ZeroCredits {});

            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<((Addr, String), Listing)>>();
            assert_eq!(all_listings.len(), 0);
        }

        #[test]
        fn test_create_listing_zero_price() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg { admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(0u128),
                },
                operator: None,
            };

            let err = execute(deps.as_mut(), mock_env(), info.clone(), msg).unwrap_err();
            assert_eq!(err, ContractError::ZeroPrice {});

            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<((Addr, String), Listing)>>();
            assert_eq!(all_listings.len(), 0);
        }

        #[test]
        fn test_create_listing_already_exists() {
            let mut deps = mock_dependencies();
            let info = mock_info("creator", &coins(2, "token"));
            instantiate(deps.as_mut(), mock_env(), info.clone(), InstantiateMsg { admin: info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };

            execute(deps.as_mut(), mock_env(), info.clone(), msg.clone()).unwrap();

            let err = execute(deps.as_mut(), mock_env(), info.clone(), msg).unwrap_err();
            assert_eq!(err, ContractError::ListingAlreadyExists {});

            let all_listings = LISTINGS.range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<((Addr, String), Listing)>>();
            assert_eq!(all_listings.len(), 1);
        }
    }

    mod update_listing_tests {
        use cosmos_sdk_proto::traits::TypeUrl;
        use cosmos_sdk_proto::{
            cosmos::authz::v1beta1::MsgExec,
            traits::MessageExt,
            traits::Message,
        };
        use cosmwasm_std::{Coin, CosmosMsg, Decimal, Order, Uint128, Uint64};
        use cosmwasm_std::testing::{MOCK_CONTRACT_ADDR, mock_dependencies, mock_env, mock_info};
        use crate::error::ContractError;
        use crate::execute::{execute, MsgTransferCredits};
        use crate::instantiate;
        use crate::msg::{ExecuteMsg, InstantiateMsg};
        use crate::state::{Freeze, FreezeKey, freezes, LISTINGS};

        #[test]
        fn test_update_listing_happy_path_increase_credits() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let update_listing_msg = ExecuteMsg::UpdateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(100u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
            };
            let res = execute(deps.as_mut(), mock_env(), creator_info.clone(), update_listing_msg).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 1);
            let sg_msg = &res.messages[0].msg;
            if let CosmosMsg::Stargate { type_url, value } = sg_msg {
                assert_eq!(type_url, "/cosmos.authz.v1beta1.MsgExec");

                let exec_msg = MsgExec::decode(value.as_slice()).unwrap();
                assert_eq!(exec_msg.msgs.len(), 1);

                let transfer_msg = MsgTransferCredits::from_any(&exec_msg.msgs[0]).unwrap();
                assert_eq!(transfer_msg.from, creator_info.sender.to_string());
                assert_eq!(transfer_msg.to, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 58);
                assert_eq!(transfer_msg.retire, false);
                assert_eq!(transfer_msg.retiring_entity_name, "");
                assert_eq!(transfer_msg.retiring_entity_additional_data, "");
            } else {
                panic!("Expected Stargate message");
            }

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.owner, creator_info.sender);
            assert_eq!(listing.denom, "pcrd");
            assert_eq!(listing.number_of_credits, Uint64::from(100u64));
            assert_eq!(listing.price_per_credit, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(1337u128),
            });

            let freezes = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(FreezeKey, Freeze)>>();
            assert_eq!(freezes.len(), 0);
        }

        #[test]
        fn test_update_listing_happy_path_decrease_credits() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let update_listing_msg = ExecuteMsg::UpdateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(10u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
            };
            let res = execute(deps.as_mut(), mock_env(), creator_info.clone(), update_listing_msg).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 1);
            if let CosmosMsg::Stargate { type_url, value } = &res.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, creator_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 32);
                assert_eq!(transfer_msg.retire, false);
            } else {
                panic!("Expected Stargate message");
            }

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.owner, creator_info.sender);
            assert_eq!(listing.denom, "pcrd");
            assert_eq!(listing.number_of_credits, Uint64::from(10u64));
            assert_eq!(listing.price_per_credit, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(1337u128),
            });

            let freezes = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(FreezeKey, Freeze)>>();
            assert_eq!(freezes.len(), 0);
        }

        #[test]
        fn test_update_listing_happy_path_change_price_per_credit_only() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let update_listing_msg = ExecuteMsg::UpdateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(42u128),
                },
            };
            let res = execute(deps.as_mut(), mock_env(), creator_info.clone(), update_listing_msg).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 0);

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.owner, creator_info.sender);
            assert_eq!(listing.denom, "pcrd");
            assert_eq!(listing.number_of_credits, Uint64::from(42u64));
            assert_eq!(listing.price_per_credit, Coin {
                denom: "token".to_string(),
                amount: Uint128::from(42u128),
            });

            let freezes = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap())
                .collect::<Vec<(FreezeKey, Freeze)>>();
            assert_eq!(freezes.len(), 0);
        }

        #[test]
        fn test_update_listing_non_existing_listing() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let update_listing_msg = ExecuteMsg::UpdateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(1337u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(42u128),
                },
            };
            let err = execute(deps.as_mut(), mock_env(), creator_info.clone(), update_listing_msg).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_update_listing_not_owner() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let update_listing_msg = ExecuteMsg::UpdateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(1337u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(42u128),
                },
            };
            let err = execute(deps.as_mut(), mock_env(), mock_info("not_creator", &[]), update_listing_msg).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_update_listing_operator_should_fail() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Some(operator.sender.clone()),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let update_listing_msg = ExecuteMsg::UpdateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(1337u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(42u128),
                },
            };
            let err = execute(deps.as_mut(), mock_env(), operator, update_listing_msg).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }


        #[test]
        fn test_update_listing_zero_price() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let update_listing_msg = ExecuteMsg::UpdateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(1337u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(0u128),
                },
            };
            let err = execute(deps.as_mut(), mock_env(), creator_info.clone(), update_listing_msg).unwrap_err();
            assert_eq!(err, ContractError::ZeroPrice {});
        }

        #[test]
        fn test_update_listing_zero_credits() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let update_listing_msg = ExecuteMsg::UpdateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(0u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(42u128),
                },
            };
            let err = execute(deps.as_mut(), mock_env(), creator_info.clone(), update_listing_msg).unwrap_err();
            assert_eq!(err, ContractError::ZeroCredits {});
        }
    }

    mod buy_credits_tests {
        use cosmos_sdk_proto::traits::{Message, TypeUrl};
        use cosmwasm_std::{BankMsg, Coin, coins, CosmosMsg, Uint128, Uint64, Addr, Decimal};
        use cosmwasm_std::testing::{MOCK_CONTRACT_ADDR, mock_dependencies, mock_env, mock_info};
        use fee_splitter::Share;
        use crate::error::ContractError;
        use crate::execute::{execute, MsgTransferCredits};
        use crate::instantiate;
        use crate::msg::{ExecuteMsg, InstantiateMsg};
        use crate::state::LISTINGS;

        #[test]
        fn test_buy_credits_happy_path_with_no_fee_share() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "umpwr".to_string(),
                    amount: Uint128::from(2u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(20, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 10u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let res = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap();
            assert_eq!(res.attributes.len(), 7);

            let listing = LISTINGS.load(deps.as_ref().storage, (Addr::unchecked(creator_info.sender.clone()), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(32u64)); // Because 10 were bought

            assert_eq!(res.messages.len(), 2);
            if let CosmosMsg::Stargate { type_url, value } = &res.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, buyer_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 10);
                assert_eq!(transfer_msg.retire, false);
                assert_eq!(transfer_msg.retiring_entity_name, "");
                assert_eq!(transfer_msg.retiring_entity_additional_data, "");
            } else {
                panic!("Expected Stargate message");
            }

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = &res.messages[1].msg {
                assert_eq!(to_address, &creator_info.sender);
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::from(20u128));
            } else {
                panic!("Expected Bank message");
            }
        }

        #[test]
        fn test_buy_credits_happy_path_with_fee_share() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(90),
            };
            let user_share = Share {
                address: "user".to_string(),
                percentage: Decimal::percent(10),
            };
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(5), shares: vec![dev_share, user_share] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "umpwr".to_string(),
                    amount: Uint128::from(1000u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(10_000, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 10u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let res = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap();
            assert_eq!(res.attributes.len(), 7);

            let listing = LISTINGS.load(deps.as_ref().storage, (Addr::unchecked(creator_info.sender.clone()), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(32u64)); // Because 10 were bought

            assert_eq!(res.messages.len(), 4);
            if let CosmosMsg::Stargate { type_url, value } = &res.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, buyer_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 10);
                assert_eq!(transfer_msg.retire, false);
                assert_eq!(transfer_msg.retiring_entity_name, "");
                assert_eq!(transfer_msg.retiring_entity_additional_data, "");
            } else {
                panic!("Expected Stargate message");
            }

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = &res.messages[1].msg {
                assert_eq!(to_address, &creator_info.sender);
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::from(9950u128));
            } else {
                panic!("Expected Bank message");
            }

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = &res.messages[2].msg {
                assert_eq!(to_address, &Addr::unchecked("dev".to_string()));
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::from(45u128));
            } else {
                panic!("Expected Bank message");
            }

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = &res.messages[3].msg {
                assert_eq!(to_address, &Addr::unchecked("user".to_string()));
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "umpwr");
                assert_eq!(amount[0].amount, Uint128::from(5u128));
            } else {
                panic!("Expected Bank message");
            }
        }

        #[test]
        fn test_buy_multiple_times_from_same_listing() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(30u64),
                price_per_credit: Coin {
                    denom: "umpwr".to_string(),
                    amount: Uint128::from(3u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(30, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 10u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg.clone()).unwrap();
            execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg.clone()).unwrap();
            execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg.clone()).unwrap();

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).map_err(|_| ContractError::ListingNotFound {});
            assert_eq!(listing.unwrap_err(), ContractError::ListingNotFound {});
        }

        #[test]
        fn test_buy_credits_with_retire() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(30u64),
                price_per_credit: Coin {
                    denom: "umpwr".to_string(),
                    amount: Uint128::from(3u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(30, "umpwr"));
            let buy_credits_msg_1 = ExecuteMsg::BuyCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 10u64,
                retire: true,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let res1 = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg_1.clone()).unwrap();
            let buy_credits_msg_2 = ExecuteMsg::BuyCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 10u64,
                retire: true,
                retiring_entity_name: "with_name".to_string().into(),
                retiring_entity_additional_data: "with_additional_data".to_string().into(),
            };
            let res2 = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg_2.clone()).unwrap();

            if let CosmosMsg::Stargate { type_url, value } = &res1.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, buyer_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 10);
                assert_eq!(transfer_msg.retire, true);
                assert_eq!(transfer_msg.retiring_entity_name, "");
                assert_eq!(transfer_msg.retiring_entity_additional_data, "");
            } else {
                panic!("Expected Stargate message");
            }

            if let CosmosMsg::Stargate { type_url, value } = &res2.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, buyer_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 10);
                assert_eq!(transfer_msg.retire, true);
                assert_eq!(transfer_msg.retiring_entity_name, "with_name");
                assert_eq!(transfer_msg.retiring_entity_additional_data, "with_additional_data");
            } else {
                panic!("Expected Stargate message");
            }
        }

        #[test]
        fn test_listing_does_not_exist() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let buyer_info = mock_info("buyer", &coins(1337, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender,
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 10u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_buying_zero_credits() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(1337, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender,
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 0u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::ZeroCredits {});
        }

        #[test]
        fn test_buying_without_enough_funds() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(2u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info_with_not_enough_umpwr = mock_info("buyer", &coins(1, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender,
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 1u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info_with_not_enough_umpwr.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughFunds {});
        }

        #[test]
        fn test_buying_with_too_much_funds() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "umpwr".to_string(),
                    amount: Uint128::from(2u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info_with_too_much_umpwr = mock_info("buyer", &coins(3, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender,
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 1u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info_with_too_much_umpwr.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::TooMuchFunds {});
        }

        #[test]
        fn test_buying_more_credits_than_available() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let buyer_info = mock_info("buyer", &coins(1337, "umpwr"));
            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender,
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 43u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughCredits {});
        }
    }

    mod cancel_lists_tests {
        use cosmos_sdk_proto::traits::TypeUrl;
        use cosmwasm_std::{Coin, Uint128, Uint64, CosmosMsg, Decimal};
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info, MOCK_CONTRACT_ADDR};
        use cosmos_sdk_proto::{traits::Message};
        use crate::error::ContractError;
        use crate::execute::{execute, MsgTransferCredits};
        use crate::instantiate;
        use crate::msg::{ExecuteMsg, InstantiateMsg};
        use crate::state::LISTINGS;

        #[test]
        fn test_cancel_listing_happy_path() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };

            let res = execute(deps.as_mut(), mock_env(), creator_info.clone(), msg).unwrap();
            assert_eq!(res.attributes.len(), 6);

            let cancel_listing_msg = ExecuteMsg::CancelListing {
                denom: "pcrd".to_string(),
            };
            let cancel_res = execute(deps.as_mut(), mock_env(), creator_info.clone(), cancel_listing_msg).unwrap();

            assert_eq!(cancel_res.messages.len(), 1);
            if let CosmosMsg::Stargate { type_url, value } = &cancel_res.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, creator_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 42);
                assert_eq!(transfer_msg.retire, false);
                assert_eq!(transfer_msg.retiring_entity_name, "");
                assert_eq!(transfer_msg.retiring_entity_additional_data, "");
            } else {
                panic!("Expected Stargate message");
            }

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender, "pcrd".to_string())).map_err(|_| ContractError::ListingNotFound {});
            assert_eq!(listing.unwrap_err(), ContractError::ListingNotFound {});
        }

        #[test]
        fn test_cancel_listing_that_does_not_exist() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let cancel_listing_msg = ExecuteMsg::CancelListing {
                denom: "pcrd".to_string(),
            };
            let err = execute(deps.as_mut(), mock_env(), creator_info.clone(), cancel_listing_msg).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_cancel_listing_already_cancelled() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            let owner = creator_info.sender.clone();
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let cancel_listing_msg = ExecuteMsg::CancelListing {
                denom: "pcrd".to_string(),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), cancel_listing_msg.clone()).unwrap();

            let listing = LISTINGS.load(deps.as_ref().storage, (owner, "pcrd".to_string())).map_err(|_| ContractError::ListingNotFound {});
            assert_eq!(listing.unwrap_err(), ContractError::ListingNotFound {});
            let err = execute(deps.as_mut(), mock_env(), creator_info.clone(), cancel_listing_msg).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_cancel_listing_not_owner_should_fail() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let not_owner_info = mock_info("not_owner", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let cancel_listing_msg = ExecuteMsg::CancelListing {
                denom: "pcrd".to_string(),
            };
            let err = execute(deps.as_mut(), mock_env(), not_owner_info.clone(), cancel_listing_msg.clone()).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_cancel_listing_operator_should_fail() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Some(operator.sender.clone()),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let cancel_listing_msg = ExecuteMsg::CancelListing {
                denom: "pcrd".to_string(),
            };
            let err = execute(deps.as_mut(), mock_env(), operator.clone(), cancel_listing_msg.clone()).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }
    }

    mod freeze_credits_tests {
        use cosmwasm_std::{Addr, Coin, coins, Decimal, from_binary, Order, Timestamp, Uint128, Uint64};
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info};
        use crate::error::ContractError;
        use crate::execute::{execute, MAX_TIMEOUT_SECONDS};
        use crate::{instantiate};
        use crate::msg::{ExecuteMsg, InstantiateMsg, QueryMsg};
        use crate::query::query;
        use crate::state::{Freeze, freezes, LISTINGS};

        #[test]
        fn test_freeze_credits_happy_path_by_seller() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: None,
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 10u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let res = execute(deps.as_mut(), mock_env(), creator_info.clone(), freeze_message).unwrap();
            assert_eq!(res.attributes.len(), 7);
            assert_eq!(res.messages.len(), 0);

            let freezes = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .filter_map(Result::ok) // Only keep Ok values
                .map(|(_, freeze)| freeze) // Extract the Freeze from the tuple
                .collect::<Vec<Freeze>>();
            assert_eq!(freezes.len(), 1);
            assert_eq!(freezes.len(), 1);
            assert_eq!(freezes[0].buyer, Addr::unchecked("buyer"));
            assert_eq!(freezes[0].number_of_credits, Uint64::from(10u64));
            assert_eq!(freezes[0].timeout, Timestamp::from_seconds(env.block.time.seconds() + 1000u64));

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(32u64)); // 10 less

        }

        #[test]
        fn test_freeze_credits_happy_path_by_operator() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();
            assert_eq!(res.attributes.len(), 7);
            assert_eq!(res.messages.len(), 0);

            let freezes = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap().1)
                .collect::<Vec<Freeze>>();
            assert_eq!(freezes.len(), 1);
            assert_eq!(freezes[0].buyer, Addr::unchecked("buyer"));
            assert_eq!(freezes[0].number_of_credits, Uint64::from(15u64));
            assert_eq!(freezes[0].timeout, Timestamp::from_seconds(env.block.time.seconds() + 1000u64));

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();

            assert_eq!(listing.number_of_credits, Uint64::from(27u64)); // 15 less
        }

        #[test]
        fn test_freeze_multiple_times_happy_path() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: Addr::unchecked("buyer1"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();
            assert_eq!(res.attributes.len(), 7);
            assert_eq!(res.messages.len(), 0);

            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 10u64,
                buyer: Addr::unchecked("buyer1"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();
            assert_eq!(res.attributes.len(), 7);
            assert_eq!(res.messages.len(), 0);

            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 1u64,
                buyer: Addr::unchecked("buyer2"),
                timeout_unix_timestamp: env.block.time.seconds() + 1001u64,
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();
            assert_eq!(res.attributes.len(), 7);
            assert_eq!(res.messages.len(), 0);

            let freezes = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap().1)
                .collect::<Vec<Freeze>>();
            assert_eq!(freezes.len(), 2);
            assert_eq!(freezes[0].buyer, Addr::unchecked("buyer1"));
            assert_eq!(freezes[0].number_of_credits, Uint64::from(25u64));
            assert_eq!(freezes[0].timeout, Timestamp::from_seconds(env.block.time.seconds() + 1000u64));

            assert_eq!(freezes[1].buyer, Addr::unchecked("buyer2"));
            assert_eq!(freezes[1].number_of_credits, Uint64::from(1u64));
            assert_eq!(freezes[1].timeout, Timestamp::from_seconds(env.block.time.seconds() + 1001u64));

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();

            assert_eq!(listing.number_of_credits, Uint64::from(16u64)); // 26 less
        }

        #[test]
        fn test_freeze_message_with_invalid_values() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message_zero_credits = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 0u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message_zero_credits).unwrap_err();
            assert_eq!(err, ContractError::ZeroCredits {});

            let freeze_message_timeout_in_past = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 10u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() - 1000u64,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message_timeout_in_past).unwrap_err();
            assert_eq!(err, ContractError::TimeoutNotInFuture {});

            let freeze_message_timeout_too_long = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 10u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + MAX_TIMEOUT_SECONDS + 1,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message_timeout_too_long).unwrap_err();
            assert_eq!(err, ContractError::TimeoutTooLong {max_timeout: MAX_TIMEOUT_SECONDS});
        }

        #[test]
        fn test_freeze_message_with_non_existing_listing() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 10u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_freeze_fail_not_enough_credits() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            let env = mock_env();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(9u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 10u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughCredits {});
        }

        #[test]
        fn test_freeze_and_buy_remaining_credits_should_not_delete_listing() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &coins(9000, "token"));
            let env = mock_env();
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(18u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1000u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 9u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 9u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap();

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(0u64));

            let res = query(deps.as_ref(), mock_env(), QueryMsg::Listing {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
            }).unwrap();
            let res: crate::msg::ListingResponse = from_binary(&res).unwrap();
            assert_eq!(res.listing.denom, "pcrd");
            assert_eq!(res.listing.number_of_credits, Uint64::from(0u64));
        }

        #[test]
        fn test_buy_more_than_available_after_freeze_should_fail() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &coins(9000, "token"));
            let env = mock_env();
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: 18u64.into(),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: 1000u128.into(),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 9u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let buy_credits_msg = ExecuteMsg::BuyCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_buy: 10u64,
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info.clone(), buy_credits_msg).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughCredits {});
        }

        #[test]
        fn test_freeze_by_unauthorized_sender() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &coins(9000, "token"));
            let env = mock_env();
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: 18u64.into(),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: 1000u128.into(),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 9u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let err = execute(deps.as_mut(), mock_env(), buyer_info.clone(), freeze_message).unwrap_err();
            assert_eq!(err, ContractError::Unauthorized {});
        }

        #[test]
        fn test_freeze_too_many() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &coins(9000, "token"));
            let env = mock_env();
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: 18u64.into(),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: 1000u128.into(),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 19u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughCredits {});
        }

        #[test]
        fn test_freeze_too_many_with_existing_freeze() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &coins(9000, "token"));
            let env = mock_env();
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: 18u64.into(),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: 1000u128.into(),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 10u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };

            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message.clone()).unwrap();
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughCredits {});
        }
    }

    mod cancel_frozen_credits_tests {
        use cosmwasm_std::{Addr, Coin, Decimal, Order, Timestamp, Uint128, Uint64};
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info};
        use crate::error::ContractError;
        use crate::execute::execute;
        use crate::instantiate;
        use crate::msg::{ExecuteMsg, InstantiateMsg};
        use crate::state::{Freeze, freezes, LISTINGS};

        #[test]
        fn test_cancel_frozen_credits_happy_path() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let cancel_frozen_message = ExecuteMsg::CancelFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_frozen_credits_to_cancel: 10u64,
                buyer: Addr::unchecked("buyer"),
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), cancel_frozen_message).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 0);

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(37u64)); // 5 less, not 15 anymore

            let freeze = crate::state::freezes().load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string(), Addr::unchecked("buyer"))).unwrap();
            assert_eq!(freeze.number_of_credits, Uint64::from(5u64)); // 5 in the freeze, not 15 anymore
        }

        #[test]
        fn test_cancel_frozen_credits_happy_path_all_credits() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let freezes_before = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap().1)
                .collect::<Vec<Freeze>>();
            assert_eq!(freezes_before.len(), 1); // Not deleted yet

            let cancel_frozen_message = ExecuteMsg::CancelFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_frozen_credits_to_cancel: 0u64,
                buyer: Addr::unchecked("buyer"),
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), cancel_frozen_message).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 0);

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(42u64)); // All are back

            let freezes_after = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap().1)
                .collect::<Vec<Freeze>>();
            assert_eq!(freezes_after.len(), 0); // It should have been deleted
        }

        #[test]
        fn test_cancel_frozen_credits_happy_path_timed_out() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let cancel_frozen_message = ExecuteMsg::CancelFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_frozen_credits_to_cancel: 10u64,
                buyer: Addr::unchecked("buyer"),
            };
            let mut timed_out_env = mock_env();
            timed_out_env.block.time = Timestamp::from_seconds(env.block.time.seconds() + 1001u64);
            let res = execute(deps.as_mut(), timed_out_env, operator_info.clone(), cancel_frozen_message).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 0);

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(37u64)); // 5 less, not 15 anymore

            let freeze = crate::state::freezes().load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string(), Addr::unchecked("buyer"))).unwrap();
            assert_eq!(freeze.number_of_credits, Uint64::from(5u64)); // 5 in the freeze, not 15 anymore
        }

        #[test]
        fn test_cancel_frozen_credits_happy_path_permissionless() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let cancel_frozen_message = ExecuteMsg::CancelFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_frozen_credits_to_cancel: 10u64,
                buyer: Addr::unchecked("buyer"),
            };
            let mut timed_out_env = mock_env();
            timed_out_env.block.time = Timestamp::from_seconds(env.block.time.seconds() + 1001u64);
            let permissionless_sender = mock_info("permissionless_sender", &[]);

            let res = execute(deps.as_mut(), timed_out_env, permissionless_sender.clone(), cancel_frozen_message).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 0);

            let listing = LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(37u64)); // 5 less, not 15 anymore

            let freeze = crate::state::freezes().load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string(), Addr::unchecked("buyer"))).unwrap();
            assert_eq!(freeze.number_of_credits, Uint64::from(5u64)); // 5 in the freeze, not 15 anymore
        }


        #[test]
        fn test_cancel_frozen_credits_with_invalid_params() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let cancel_frozen_too_many = ExecuteMsg::CancelFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_frozen_credits_to_cancel: 16u64,
                buyer: Addr::unchecked("buyer"),
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), cancel_frozen_too_many).unwrap_err();
            assert_eq!(err, ContractError::NotEnoughCredits {});

            let cancel_freeze_not_found = ExecuteMsg::CancelFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_frozen_credits_to_cancel: 10u64,
                buyer: Addr::unchecked("not_buyer"),
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), cancel_freeze_not_found).unwrap_err();
            assert_eq!(err, ContractError::FreezeNotFound {});

            let cancel_listing_not_found = ExecuteMsg::CancelFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "not_pcrd".to_string(),
                number_of_frozen_credits_to_cancel: 10u64,
                buyer: Addr::unchecked("buyer"),
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), cancel_listing_not_found).unwrap_err();
            assert_eq!(err, ContractError::ListingNotFound {});
        }

        #[test]
        fn test_cancel_frozen_credits_as_unauthorized() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: Addr::unchecked("buyer"),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let cancel_frozen_message = ExecuteMsg::CancelFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_frozen_credits_to_cancel: 10u64,
                buyer: Addr::unchecked("buyer"),
            };
            let unauthorized_info = mock_info("unauthorized", &[]);
            let err = execute(deps.as_mut(), mock_env(), unauthorized_info.clone(), cancel_frozen_message).unwrap_err();
            assert_eq!(err, ContractError::Unauthorized {});
        }
    }

    mod release_frozen_credits_test {
        use cosmos_sdk_proto::traits::TypeUrl;
        use cosmwasm_std::{Addr, BankMsg, Coin, coins, CosmosMsg, Decimal, Order, Timestamp, Uint128, Uint64};
        use cosmwasm_std::testing::{MOCK_CONTRACT_ADDR, mock_dependencies, mock_env, mock_info};
        use prost::Message;
        use fee_splitter::Share;
        use crate::execute::{execute, MsgTransferCredits};
        use crate::instantiate;
        use crate::msg::{ExecuteMsg, InstantiateMsg};
        use crate::state::{Freeze, freezes};

        #[test]
        fn test_release_frozen_credits_happy_path() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let release_message = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_message).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 1);

            if let CosmosMsg::Stargate { type_url, value } = &res.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, buyer_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 10);
                assert_eq!(transfer_msg.retire, false);
                assert_eq!(transfer_msg.retiring_entity_name, "");
                assert_eq!(transfer_msg.retiring_entity_additional_data, "");
            } else {
                panic!("Expected Stargate message");
            }

            let listing = crate::state::LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(27u64)); // 10 less, still

            let freeze = crate::state::freezes().load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string(), Addr::unchecked("buyer"))).unwrap();
            assert_eq!(freeze.number_of_credits, Uint64::from(5u64)); // 5 less now
        }

        #[test]
        fn test_release_frozen_credits_happy_path_with_retire() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let release_message = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: buyer_info.sender.clone(),
                retire: true,
                retiring_entity_name: "retire_name".to_string().into(),
                retiring_entity_additional_data: "retire_data".to_string().into(),
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_message).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 1);

            if let CosmosMsg::Stargate { type_url, value } = &res.messages[0].msg {
                assert_eq!(type_url, MsgTransferCredits::TYPE_URL);

                let transfer_msg = MsgTransferCredits::decode(value.as_slice()).unwrap();
                assert_eq!(transfer_msg.from, MOCK_CONTRACT_ADDR.to_string());
                assert_eq!(transfer_msg.to, buyer_info.sender.to_string());
                assert_eq!(transfer_msg.denom, "pcrd");
                assert_eq!(transfer_msg.amount, 10);
                assert_eq!(transfer_msg.retire, true);
                assert_eq!(transfer_msg.retiring_entity_name, "retire_name");
                assert_eq!(transfer_msg.retiring_entity_additional_data, "retire_data");
            } else {
                panic!("Expected Stargate message");
            }

            let listing = crate::state::LISTINGS.load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string())).unwrap();
            assert_eq!(listing.number_of_credits, Uint64::from(27u64)); // 10 less, still

            let freeze = crate::state::freezes().load(deps.as_ref().storage, (creator_info.sender.clone(), "pcrd".to_string(), Addr::unchecked("buyer"))).unwrap();
            assert_eq!(freeze.number_of_credits, Uint64::from(5u64)); // 5 less now
        }

        #[test]
        fn test_release_frozen_credits_happy_path_all_credits() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let release_message = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 15u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_message).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 1);

            let freezes_after = freezes().range(deps.as_ref().storage, None, None, Order::Ascending)
                .map(|item| item.unwrap().1)
                .collect::<Vec<Freeze>>();
            assert_eq!(freezes_after.len(), 0); // It should have been deleted
        }

        #[test]
        fn test_release_frozen_credits_happy_path_with_fee_split() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(90),
            };
            let user_share = Share {
                address: "user".to_string(),
                percentage: Decimal::percent(10),
            };
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(5), shares: vec![dev_share, user_share] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let release_message = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let operator_info = mock_info("operator", &coins(66, "token"));
            let res = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_message).unwrap();
            assert_eq!(res.attributes.len(), 6);
            assert_eq!(res.messages.len(), 3);


            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = &res.messages[1].msg {
                assert_eq!(to_address, &Addr::unchecked("dev".to_string()));
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "token");
                assert_eq!(amount[0].amount, Uint128::from(60u128));
            } else {
                panic!("Expected Bank message");
            }

            if let CosmosMsg::Bank(BankMsg::Send { to_address, amount }) = &res.messages[2].msg {
                assert_eq!(to_address, &Addr::unchecked("user".to_string()));
                assert_eq!(amount.len(), 1);
                assert_eq!(amount[0].denom, "token");
                assert_eq!(amount[0].amount, Uint128::from(6u128));
            } else {
                panic!("Expected Bank message");
            }
        }

        #[test]
        fn test_release_credits_with_not_enough_funds() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(90),
            };
            let user_share = Share {
                address: "user".to_string(),
                percentage: Decimal::percent(10),
            };
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(5), shares: vec![dev_share, user_share] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let release_message = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let operator_info = mock_info("operator", &coins(65, "token"));
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_message).unwrap_err();
            assert_eq!(err, crate::error::ContractError::NotEnoughFunds {});
        }

        #[test]
        fn test_release_credits_with_too_much_funds() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            let dev_share = Share {
                address: "dev".to_string(),
                percentage: Decimal::percent(90),
            };
            let user_share = Share {
                address: "user".to_string(),
                percentage: Decimal::percent(10),
            };
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::permille(5), shares: vec![dev_share, user_share] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let release_message = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let operator_info = mock_info("operator", &coins(67, "token"));
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_message).unwrap_err();
            assert_eq!(err, crate::error::ContractError::TooMuchFunds {});
        }


        #[test]
        fn test_invalid_params() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let release_message_zero = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 0u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_message_zero).unwrap_err();
            assert_eq!(err, crate::error::ContractError::ZeroCredits {});

            let release_message_too_many = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 16u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_message_too_many).unwrap_err();
            assert_eq!(err, crate::error::ContractError::NotEnoughCredits {});

            let release_freeze_not_found = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: Addr::unchecked("not_found"),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_freeze_not_found).unwrap_err();
            assert_eq!(err, crate::error::ContractError::FreezeNotFound {});

            let release_listing_not_found = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "not_found".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), mock_env(), operator_info.clone(), release_listing_not_found).unwrap_err();
            assert_eq!(err, crate::error::ContractError::ListingNotFound {});
        }

        #[test]
        fn test_release_credits_unauthorized() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            let release_message = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let non_operator_info = mock_info("non_operator", &[]);
            let err = execute(deps.as_mut(), mock_env(), non_operator_info.clone(), release_message).unwrap_err();
            assert_eq!(err, crate::error::ContractError::Unauthorized {});
        }

        #[test]
        fn test_release_timed_out_freeze() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            let operator_info = mock_info("operator", &[]);
            let buyer_info = mock_info("buyer", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let create_listing_msg = ExecuteMsg::CreateListing {
                denom: "pcrd".to_string(),
                number_of_credits: Uint64::from(42u64),
                price_per_credit: Coin {
                    denom: "token".to_string(),
                    amount: Uint128::from(1337u128),
                },
                operator: Option::from(operator_info.clone().sender),
            };
            execute(deps.as_mut(), mock_env(), creator_info.clone(), create_listing_msg).unwrap();

            let mut env = mock_env();
            let freeze_message = ExecuteMsg::FreezeCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_freeze: 15u64,
                buyer: buyer_info.sender.clone(),
                timeout_unix_timestamp: env.block.time.seconds() + 1000u64,
            };
            execute(deps.as_mut(), mock_env(), operator_info.clone(), freeze_message).unwrap();

            env.block.time = Timestamp::from_seconds(env.block.time.seconds() + 1001u64); // Set the block time to a future timestamp
            let release_message = ExecuteMsg::ReleaseFrozenCredits {
                owner: creator_info.sender.clone(),
                denom: "pcrd".to_string(),
                number_of_credits_to_release: 10u64,
                buyer: buyer_info.sender.clone(),
                retire: false,
                retiring_entity_name: None,
                retiring_entity_additional_data: None,
            };
            let err = execute(deps.as_mut(), env, operator_info.clone(), release_message).unwrap_err();
            assert_eq!(err, crate::error::ContractError::TimedOut {});
        }
    }

    mod edit_fee_split_config_tests {
        use cosmwasm_std::Decimal;
        use cosmwasm_std::testing::{mock_dependencies, mock_env, mock_info};
        use fee_splitter::Share;
        use crate::error::ContractError;
        use crate::execute::execute;
        use crate::instantiate;
        use crate::msg::{ExecuteMsg, InstantiateMsg};

        #[test]
        fn test_edit_fee_split_config_happy_path() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let edit_fee_split_config_msg = ExecuteMsg::EditFeeSplitConfig {
                fee_percentage: Decimal::percent(10),
                shares: vec![
                    Share{ address: "addr1".to_string(), percentage: Decimal::percent(50) },
                    Share{ address: "addr2".to_string(), percentage: Decimal::percent(50) }
                ],
            };
            let res = execute(deps.as_mut(), mock_env(), creator_info.clone(), edit_fee_split_config_msg).unwrap();
            assert_eq!(res.attributes.len(), 4);

            let config = fee_splitter::get_config(deps.as_ref().storage).unwrap();
            assert_eq!(config.fee_percentage, Decimal::percent(10));
            assert_eq!(config.shares.len(), 2);
            assert_eq!(config.shares[0].address, "addr1");
            assert_eq!(config.shares[0].percentage, Decimal::percent(50));
            assert_eq!(config.shares[1].address, "addr2");
            assert_eq!(config.shares[1].percentage, Decimal::percent(50));
        }

        #[test]
        fn test_edit_fee_split_config_with_invalid_percentage() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let edit_fee_split_config_msg = ExecuteMsg::EditFeeSplitConfig {
                fee_percentage: Decimal::percent(110),
                shares: vec![
                    Share{ address: "addr1".to_string(), percentage: Decimal::percent(50) },
                    Share{ address: "addr2".to_string(), percentage: Decimal::percent(50) }
                ],
            };
            let err = execute(deps.as_mut(), mock_env(), creator_info.clone(), edit_fee_split_config_msg).unwrap_err();
            assert_eq!(err, ContractError::FeeSplitError(
                fee_splitter::error::FeeSplitterError::InvalidFeePercentage{ fee_percentage: Decimal::percent(110) }
            ));
        }

        #[test]
        fn test_edit_fee_split_with_non_admin() {
            let mut deps = mock_dependencies();
            let creator_info = mock_info("creator", &[]);
            instantiate(deps.as_mut(), mock_env(), creator_info.clone(), InstantiateMsg { admin: creator_info.sender.to_string(), fee_percentage: Decimal::percent(0), shares: vec![] }).unwrap();

            let edit_fee_split_config_msg = ExecuteMsg::EditFeeSplitConfig {
                fee_percentage: Decimal::percent(10),
                shares: vec![
                    Share{ address: "addr1".to_string(), percentage: Decimal::percent(50) },
                    Share{ address: "addr2".to_string(), percentage: Decimal::percent(50) }
                ],
            };
            let non_admin_info = mock_info("non_admin", &[]);
            let err = execute(deps.as_mut(), mock_env(), non_admin_info.clone(), edit_fee_split_config_msg).unwrap_err();
            assert_eq!(err, ContractError::Unauthorized {});
        }
    }
}