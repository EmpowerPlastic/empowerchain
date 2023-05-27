# High-level Architecture

EmpowerChain is built using the Cosmos SDK, which is the world’s most popular framework for building application-specific blockchains.

EmpowerChain roughly has the following tech stack:
- Cosmos SDK as the blockchain framework
- CometBFT as the consensus engine
  - IBC (Inter Blockchain Communication Protocol) for interchain communication
- Custom Cosmos SDK modules written in Go
- CosmWasm for smart contract development in Rust

The goal is to have the stable core protocol developed as custom Cosmos SDK modules and build applications and tools on top of that in CosmWasm smart contracts.

![EmpowerChain High Level architecture](./empowerchain-high-level-architecture.png 'EmpowerChain high level architecture')

All the code for EmpowerChain is open source and can be found on our GitHub: https://github.com/EmpowerPlastic/empowerchain

## Cosmos SDK
Cosmos SDK is a modular framework that connects all the different components and modules needed to build a blockchain, such as:
- A consensus mechanism (like CometBFT, a Proof of Stake consensus mechanism)
- Networking
- State-machine
- Modules for staking, tokens, authorization, nfts and more
- Custom, application-specific modules

TODO: High level architecture with Cosmos SDK, modules, CometBFT and ABCI

Read more about the Cosmos SDK here: https://docs.cosmos.network/main

Read more about CometBFT here: https://docs.cometbft.com 

## IBC

The Inter-Blockchain Communication Protocol (IBC) is a cutting-edge technology that enables seamless communication between different blockchains. It is designed to be connection-oriented, stateful, and provide reliable, ordered, and authenticated communication between heterogeneous blockchains in a dynamic topology. By implementing IBC, blockchains can interact with each other, opening up new possibilities for cross-chain applications.

EmpowerChain integrates IBC natively which allows the core protocol, smart contracts and users to leverage it.
Besides the obvious use cases around transferring tokens to be used in DeFi applications, there are countless ways IBC can be used to extend the capabilities of EmpowerChain (and other blockchains).

Read more about IBC here: https://ibc.cosmos.network

## CosmWasm

CosmWasm are WebAssembly Smart Contracts for the Cosmos SDK and are typically written in Rust (more languages such as Go and Javascript should be possible in the future).
They allow for small applications to easily be written and maintained on top of blockchains.

For EmpowerChain this means smaller tools and applications can easily be deployed to extend the core protocol. 
An example of this is the Plastic Credit marketplace which communicates with the plastic credit module to escrow and transfer credits between sellers and buyers.

Read more about CosmWasm here: https://cosmwasm.com
