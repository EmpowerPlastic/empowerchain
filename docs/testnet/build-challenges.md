# Build challenges

Earn rewards, delegations and grants!

Most challenges have potential 2 parts: UX/UI designs & Code. 
You can aim to do both in a challenge, or just focus on one of them. 
This allows designers that don't have coders available to make an amazing concept and get rewarded for that, 
while coders that aren't that comfortable creating beautiful UIs can get rewarded for creating functional prototypes.

If any of these challenges seem interesting, please read through the information and documentation we have provided, and then feel very free to reach out to discuss ideas and get feedback from our team.

There are also grants available for bigger ideas and/or further development. Reach out to discuss more!

## Plastic credit issuer interface

We need a generic interface for issuing plastic credits. Our main use case for this short-term is to let anyone test plastic credit issuance on testnet (Empower Platform has this integrated in a SaaS platform, but perhaps it can serve as a user interface for many other plastic credits on mainnet in the future as well!).

A high level description of how Plastic Credits works can be found here: [Plastic Credits: High level overview](../core-modules/plastic-credits/high-level-overview.md)

The main objective is to make an interface that does two things: interacts with the empowerchain (via EmpowerJS) to issue credits, and constructs and uploads the Plastic Credit Index File.

Plastic Credit Issuer interface should at least provide:

1. an input allowing to provide all the necessary plastic credit data, based on the Plastic Credit Index File requirements
2. a mechanism to build Plastic Credit Index File based on the data provided by user
3. integration with Empower's IPFS Storage, so it can upload binary files and Plastic Credit Index File
4. integration with EmpowerChain using EmpowerJS, so it can issue on-chain credits
5. transaction signing with the Issuer wallet (for testing purposes it can even be a part of the frontend code, but it'd be nice to have it done separately with a webservice)

More technical details available here [Plastic Credits developer docs](../developers/plastic-credits.md)

## Plastic credit dashboard
Build a dashboard to show interesting data like:

- Number of plastic credits issued
- Number of plastic credits retired
- Number of plastic credits sold
- All of the above in graphs, time-bound, today, etc
- And anything else that might be fun, even chain related data would be nice to have in a dashboard

A high level description of how Plastic Credits works can be found here: [Plastic Credits: High level overview](../core-modules/plastic-credits/high-level-overview.md)

## Plastic credit non-crypto marketplace/shop
The plastic credit marketplace only support buying plastic credits using crypto. For this to truly scale we need other solutions for non-crypto use cases.

We have two ideas, but feel free to ignore them and come up with something much better too!

1. A way for organizations to accept invoices from KYC'ed / whitelisted buyers - this could be built into the existing marketplace (contract and/or frontend)
2. Setting up a system for buying credits using fiat directly, and somehow do all the transfers/exchanging/etc on the backend.

This could be a real game changer for us, so if you want to be the rules of plastic credits, we will support you in any way we can (grants are also on the table for long-term projects).

A high level description of how Plastic Credits works can be found here: [Plastic Credits: High level overview](../core-modules/plastic-credits/high-level-overview.md)

## Plastic credit DeFi concept
How can we combine plastic credits in a DeFi concept? Find a way to make plastic credit use cases even more interesting by combining them with traditional DeFi ideas.

A high level description of how Plastic Credits works can be found here: [Plastic Credits: High level overview](../core-modules/plastic-credits/high-level-overview.md)

## Plastic credit NFT concepts
Wrapping plastic credits in NFTs could take plastic credits to the Interchain with IBC. What would a useful concept for this be?

A high level description of how Plastic Credits works can be found here: https://docs.empowerchain.io/plastic_credits/high_level_overview

## Proof of Existence stamp
When creating a proof of existence of a document for instance, it would be useful to have some kind of stamp that can be used to show (and prove) that the document existed at specific point in time.

A simple graphic design would be helpful here, but if you can also figure out a nice UX for the whole journey of creating proofs, where to use stamps, etc it would be even better :)

A high level description of how Proof of Existence works can be found here: [Proof of Existence: High level overview](../core-modules/proof-of-existence/high-level-overview.md)

## Proof of Existence wildcard use cases
How can an immutable piece of data be used? What can it prove? How can you enforce it?

Use PoE as the basis for bets, predictions, certifications, proof of ownership, etc.

Build a brand-new application, or build it into our existing proof of existence interface.

A high level description of how Proof of Existence works can be found here: [Proof of Existence: High level overview](../core-modules/proof-of-existence/high-level-overview.md)

## Proof of existence signatures
To make proof of existence even more useful, we want to the capability of multiple parties to sign the proof (for whatever purpose they might like).

The idea here is to extend proof of existence with a CosmWasm smart contract which asks X accounts/addresses to sign/confirm the proof. The sign/confirm part would be in the smart contract and reference the proof of existence hash which is on-chain (the smart contract could create the PoE during instantiation for instance).

Figure out a way to build this UI into our existing Proof of Existence UI, or build a new one if you think it would make more sense.

A high level description of how Proof of Existence works can be found here: [Proof of Existence: High level overview](../core-modules/proof-of-existence/high-level-overview.md)

## Automate reference docs for Marketplace contract
Get full reference documentation for the marketplace into the docs using some kind of automation that will generate the docs from the contract code.

It should be possible to do this for all contracts, but we start with the marketplace contract.

It should show all messages, variables, etc. and extract comments from the code to show as documentation.

If brand-new developer tooling needs to be built for the extraction/generation, we might be inclined to give a separate grant as well.

## EmpowerChain-specific Governance UI
Create an EmpowerChain branded governance UI/app that shows EmpowerChain's group-based governance structure in an easy-to-understand and transparent way.

Coming soon:
TODO: Explain a bit about the governance structure
TODO: List capabilities
TODO: EmpowerChain docs on governance

## Add full support for EmpowerChain to Groups UI

There isn't a _ton_ of work to make this happen and would require only frontend work in the [Groups UI repo](https://github.com/regen-network/groups-ui). 

The current issues are the main hurdles to get this done:
- https://github.com/regen-network/groups-ui/issues/72
- https://github.com/regen-network/groups-ui/issues/73 (some work exists here already, not a big deal to implement)
- https://github.com/regen-network/groups-ui/issues/74 (also not a big deal to implement)

Reach out to discuss details if you're interested in this one. Can also connect with the Regen team to coordinate further.

## Wildcard challenge
To signal that we don't think we have all the answers: a wildcard challenge! 
Come up with an innovative way to use EmpowerChain.
We don't know what a wildcard might look like, so we don't put any rules for this. We'll know it when we see it!

Reach out to bounce ideas with us if you want :)