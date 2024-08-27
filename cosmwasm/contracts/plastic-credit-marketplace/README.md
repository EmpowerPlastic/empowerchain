# Plastic Credit Marketplace

The plastic credit marketplace is cosmwasm smart contract built on top of the EmpowerChain `plasticcredit` module.
It allows users to list and buy plastic credits.

## Listings

The plastic credit marketplace functions by storing a list of `Listing` objects in the state. 
Anyone who has a plastic credit can create a listing by using the `CreateListing` message.

It allows anyone to buy a listing by using the `BuyCredits` message. 
They can then buy as many credits as they want (up to the amount listed, and given the correct amount of funds are sent with the message)

## Operators

TODO

Each listing has an optional `operator` field, which allows the operator set to freeze any number of credits in the listing
for the purpose of finishing a transaction off-chain. For instance, for off-chain payments the operator is given the ability to
freeze the credits as a way to escrow the credits. When the payment has been settled off-chain the operator (or the seller)
can then release the credits to the buyer.

## Fee split

The plastic credit marketplace uses the `fee-splitter` package to allow for the marketplace to set up a fee structure.
The fee is a percentage of the listing price, and can be split between any number of parties. 

A typical setup might be that the developer, or the deployer of the contract, gets a small fee, as well as the chain it runs on.
For instance, it could be set up like this:
- A total 5% fee for each listing
- 75% of the fee goes to the developer
- 25% of the fee goes to the chain
