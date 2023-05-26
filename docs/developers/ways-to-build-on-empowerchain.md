# Way to build on EmpowerChain

There might be other brilliant ways to build on EmpowerChain than what we have outlined here, but we will start with these to give you some general ideas:

## Building standalone applications using APIs
EmpowerChain is an open permissionless blockchain with a set of APIs allowing you to build applications that interact with the blockchain.

You could use these APIs and wallet software like Leap or Keplr to build frontends that interact with the blockchain (like a marketplace or a new exciting way to use Proof of Existence).

## Building CosmWasm smart contracts
EmpowerChain integrates the CosmWasm smart contract module, which enables developers to write Rust (and soon other Wasm-supported languages) smart contracts.

These smart contracts can interact directly with the core EmpowerChain protocol, other smart contracts, or even other blockchains by using IBC.

Smart contract deployment is not open for anyone and must go through governance (either a direct governance proposal or through a group/multi-sig with deployment permissions).
Governance-gated deployment is done not to limit development but to ensure applications on EmpowerChain are as safe as possible and contribute towards the chain's goals.

Read more about CosmWasm here: https://cosmwasm.com

## Building out the core EmpowerChain protocol
You can see more details on how EmpowerChain is built in the [architecture](architecture.md) chapter, but to explain very briefly:
EmpowerChain is built using the Cosmos SDK, a modular framework for building blockchains. The core parts of the protocol are made using the Cosmos SDK modules.

Core protocol development should have simpler, more stable, and more... core (for the lack of a better word) goals than application development.
An example is plastic credits: the core protocol defines how plastic credits are issued, transferred, and retired but does not concern itself with applications such as marketplaces or DeFi use cases.

Don't hesitate to contact the core developers of EmpowerChain to discuss protocol development on EmpowerChain.