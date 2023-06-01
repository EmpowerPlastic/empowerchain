# Tokenomics

This page will go through the two key parts of the EmpowerChain tokenomics: the token distribution, token emission and the token economics (how the chain will make money).

## Initial Token Distribution
At launch, the EmpowerChain will have a total supply of 200,000,000 $MPWR tokens, 
with a maximum supply of 1,000,000,000 $MPWR tokens, distributed at a fixed rate as staking rewards over 12 years.

Immediately after launch, the token distribution mechanism (often called inflation, or token minting) will be turned off.
As soon as token holders get a solid chance to stake and get ready, governance can vote to turn on the token distribution mechanism.

The initial token distribution will be as follows:

![token-distribution.png](token-distribution.png)

- 25% for waste collectors and recyclers (to be distributed over time)
- 25% for usage incentives and airdrops (to be distributed over time)
- Up to 10% for private presale (exact numbers TBA - leftovers will go to the community growth group)
- 5% permalocked for an on-chain staking impact
- 20% for community growth, partnerships, liquidity, etc
- 7.5% for team members (see lockup and vesting details below)
- 7.5% for an Empower long-term strategic reserve (see lockup and vesting details below)

Any tokens not owned by the team will be locked in on-chain groups (similar to a multisig) which is owned by the chain itself (through governance),
but will be preset with members of the team, and potentially other community members. The makeup of these groups will be decided by governance of time.
Read more about this under [Governance overview](../governance/overview.md) and [Governance structure](../governance/structure.md).

Each section is explained in more detail below.

> A short note on usage incentives: most of the usage incentives in both the 
> initial distribution and the block rewards are not fully documents here yet.
> It is important to note that these usage incentives are subject to audits and transparency requirements,
> as they are owned by the chain itself. Documentation and details will be added and announced as they are finalized.

### 25% for Waste Collectors and Recyclers
25% will be set aside for waste collectors and recyclers, to be distributed over time. 
The main goal is to incentivise and include global network of waste collection and recycling infrastructure as 
basis for both the physical and digital network- and infrastructure effects of the Empowerchain.

The exact details of how this distribution will happen, and under which conditions, will be documented and announced later (before it start, naturally).

These usage incentives tokens are held by the Usage Incentives group (controlled by members of the team at launch).

### 25% for Usage Incentives and Airdrops
The 50,000,000 $MPWR tokens set aside for usage incentives and airdrops will be split into three parts:
- 22,500,000 $MPWR for deposit app usage incentives (launch happening later this year/early next year)
  - These tokens are likely to be vested and distributed over a long time after Deposit App launch
- 6,000,000 $MPWR for plastic credit usage incentives
    - These tokens are likely to be vested and distributed over a long period of time
- 10,000,000 for airdrops
    - Some of which will be distributed at genesis, most of which will be distributed over time (TBA)

The current airdrop distribution at launch looks like this:
- Holders of Empower Cyber Plastic Heros NFTs (1000 $MPWR each)
- Holders of Empower Earth Day Plastic Heroes NFTs (20 $MPWR each)
- Delegators on Empower Validator on Stargaze, Regen, IXO, Cheqd and Jackal (Amount TBA)
- Potentially some other groups (TBA)

All unspent tokens at genesis will be held by the Usage incentive group (controlled by members of the team at launch).

### 10% for Private Presale
Up to 10% of the total supply will be sold in a private presale, with the exact amount to be announced closer to mainnet launch.

All tokens are subject to at least 1 year lock-up _plus_ 1 year vesting - with multiple ones having longer lockups (up to 4 years).

The exact details of the private presale (including how long they will be locked and vested) will be announced closer to mainnet launch.

### 5% Permalocked for an On-Chain Staking Impact
5% of the total supply will be permalocked on-chain and used for impact staking, the rewards from which will be used to buying of plastic credits and deposit incentives in the market.

The permalocked tokens (and its rewards) will be controlled by the Impact group (controlled by members of the team at launch).

### 20% for Community Growth, Partnerships, Liquidity, etc
Incentivise token liquidity on DEX/CEXes and to build strategic partnerships across Cosmos and IBC through token swaps or other incentives and alignments

Within these 20% there are also sub-initiatives for:
- Testnet rewards (a total of 1% of the total supply, 0.5% of which for the first testnet and the rest for future testnets)
- Bug and security bounty program (1% of the total supply)

These two initatives are held by the Usage incentives group. The other 18% are held by the Impact group.

### 7.5% for Team Members
7.5% of the total supply will be allocated to team members, with a minimum of 1 year lockup and 5 year vesting.

To ensure members of the team are not being incentivized after they stop working on the project, we have placed all
the tokens in the Empower group. From there they tokens will be distributed to team members as they vest.
This also allows us to move any incentives over to new team members in the scenario of exchange of personnel.

Our biggest priority is to ensure the long-term success of the EmpowerChain, and we believe this will help us achieve that.
Especially, we don't end up in a situation where team members are paid too much up-front, and then leave the project and keep dumping tokens for years - as we have seen in many other projects.

### 7.5% for an Empower Long-Term Strategic Reserve
7.5% of the total supply will be allocated to Empower for long-term strategic reserve, with a 5-year lockup + 5 year vesting period.
Meaning that these tokens will only be fully vested after 10 years.

The goal of these tokens is long-term alignment for Empower to keep building and supporting the chain and its ecosystem.

## Token emission
As mentioned already, the token supply starts at 200,000,000 $MPWR tokens and is capped at 1,000,000,000 $MPWR tokens.
The emission schedule is simply: linear emission over 12 years, starting at 200,000,000 $MPWR tokens and ending at 1,000,000,000 $MPWR tokens.
Which means that the number of token emitted per year is 66,666,666.

The supply curve looks like this:

![Total supply over 12 years](total-supply.png)

The emission curve, or supply increase percentage, looks like this:

![Supply increase per year](emission.png)

The emission of new tokens happens every block and is part of the block rewards (next to the transaction fees).

## Block rewards

At launch, the block rewards are very simply made up of 75% to stakers and 25% to the community pool in the form of the community pool tax.
The 25% of block rewards going to the community pool is not intended to be there for too long and there will be a governance proposal to split 
the funds into the same buckets as the planned block rewards.

![Initial block rewards](initial-block-rewards.png)

When we implement the final block rewards, at a later date, they will be as follows:

![final-block-rewards.png](final-block-rewards.png)

- 75% to stakers
- 5% to tech & infrastructure
- 15% to usage incentives
- 3% to impact and physical waste infrastructure grants
- 2% as a Basic Active Validator Income (BAVI)

### 75% to stakers
75% of the block rewards will go to stakers, and will be distributed proportionally to the amount of $MPWR staked. 
This is standard Cosmos staking, nothing fancy going on here.

### 5% to tech & infrastructure
5% of the block rewards will go to tech & infrastructure, with the objective Ensure the longevity and 
continuous stable development of the core infrastructure needed both for dev teams and users on the EmpowerChain as well as for IBC/Cosmos in general.

The tokens will be split into two parts:
- 75% for maintenance and development of the EmpowerChain
- 25% for Interchain public goods funding

The recipients of the tokens will be the Tech funding group which will be without members at launch, but its members will be decided by governance over time.

The usage of these tokens will be subject to annual audits and reports to the community by neutral third parties.
Any spending will also be required to be done and documented on-chain as far as possible.

### 15% to usage incentives

Similar to the 25% from initial genesis distribution, 15% of the block rewards will go to usage incentives for waste 
collectors and recycler infrastructure as basis for both the physical and digital network- and infrastructure effects of the Empowerchain.

1% of the total block rewards (take from these 15%) will be set aside for the Global Waste Lottery staking. Details TBA.

The exact details of how this distribution will happen, and under which conditions, will be documented and announced later (before it start, naturally).

### 3% to impact and physical waste infrastructure grants
3% of the block rewards will go to grants and support for physical network of waste collectors and recyclers.
This can be done through various measures as funding to collection and recycling organisations 
(direct grants, beneficial loans, subsidised services etc), hackathons, educational content and marketing.

These block rewards can also be put into other initiatives - within the scope of the Impact group - in lack of better investments or to strengthen that part of the ecosystem.

### 2% as a Basic Active Validator Income (BAVI)
2% of the block rewards will be distributed to all active validators as a flat reward, regardless of their delegation amount.
This is to help increase decentralization and security of the network, and to help smaller validators.

The exact mechanism for this will be decided by governance, but the validators participating in this will likely need to be
known to avoid sybil attacks. This might require some sort of identity solution, but it would have to be privacy-preserving.
Governance will decide in the end how this shall be done.

It has not been decided how the BAVI tokens accumulating in the community pool will be distributed/used. 
This will be decided by governance in any case.

## Sustainable economics
The big question for any blockchain is how it will operate sustainably in the long term. The EmpowerChain network token
is a utility token, and is needed to use the network. It is needed not only for gas fees, but also for:
- Usage fees for dApps
- Plastic Credit issuance fees
- Marketplace fees
- And other fees from using the network in different way 
- Staking
- Participating/voting in governance

The utility of the MPWR token, and the demand for it, will be driven by the usage of the network. 
WIth the network owning and using the tokens for various purposes, there will be a constant demand for the token.