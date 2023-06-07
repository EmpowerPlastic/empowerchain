# Tasks and rewards

To make sure you are eligible for the rewards, please read the [rules](./rules) carefully first.

**Disclaimer:** The tasks and rewards might be adjusted at any time, but will be announced in Discord if so.

Before you start on a task, please open the submission form to make sure that:
1. The task has opened (if the form is not accepting submissions, the task is not open)
2. You understand the task and the instructions which you will find in the submission form itself

To find resources such as RPC, API, block explorers and validation guides, please visit the [resources](./resources) page.

## For validators
As you will see below, most of the tasks are not particularly geared towards validators. This is because we want to
make sure that everyone can participate, not just validators.

More importantly, we want to align and incentivize validators long-term, which is why the delegation program 
will be the most important way for validators to earn rewards. Please see the [delegation program](../validators/delegation-program.md) for more information.

**Being in the active set during the testnet is not really relevant to the delegation program (so please don't worry about that)**

## How to participate
To participate, you first need to do three things:
1. Join our Discord
2. Sign up on our Google Form
3. Grab the Circulus-1 Tester role in the # 🤝︱tester-role channel in Discord

Ensure you create a new wallet (instructions below) and **use the same address for all tasks during the testnet**. 
We will ask everyone to provide the address at the end of the testnet to match it against the Discord username you provided in the signup form.

## A note on wallets:
Make sure you use the same wallet address for all tasks. We will collect and link all addresses to 
the information you signed up with. Make sure you use a new wallet, so we can't connect it to any
mainnet addresses.

Take a look at this video to learn how to set up a Keplr wallet: https://www.youtube.com/watch?v=cmxx_hIulz8

## Tokens for gas and stuff

For most of the tasks you will need some tokens to pay for gas and other stuff.

You can request tokens in the `# 🔧︱faucet` channel in Discord.

Please do not abuse the faucet. It will only give a small amount of tokens and there will be 
a cool-down before you can request more tokens. If we detect abuse you will be disqualified.

## Rewards

For the circulus-1 testnet there are set aside 0.5%, or 1,000,000 $MPWR, from the initial supply.

**All prices will be rewarded as $MPWR tokens to be vested for 1 year.** (unless stated clearly otherwise)

These rewards are split among the different categories below:

| Category          | Max tokens    | Notes                                               |
|-------------------|---------------|-----------------------------------------------------|
| Zealy             | 120,000 $MPWR |                                                     |
| UI testing        | 30,000 $MPWR  |                                                     |
| CLI testing       | 30,000 $MPWR  |                                                     |
| IBC testing       | 10,000 $MPWR  |                                                     |
| Docs, guides, etc | 50,000 $MPWR  |                                                     |
| Build challenges  | 250,000 $MPWR |                                                     |
| Bugs              | 230,000 $MPWR | Critical bugs are not subject to vesting            |
| Security issues   | 250,000 $MPWR | Critical security issues are not subject to vesting |
| Stress testing    | 30,000 $MPWR  | Not until phase 3                                   |

Max tokens per category are split among the participants in that category according to the rules of each category (see
below).

In addition, most categories have different ways to win rewards and might require you
to be early to win the maximum amount of tokens.

## First and last serve submissions

Many of the categories' tasks rewards are split among the first X submissions and the final Y submissions, with
each group earning different amount of tokens. Any submissions beyond the last serve batch
will not earn any tokens. There will be some lag between us confirming the maximum number
of submissions, but we will try to close the submissions as soon as possible to communicate
that the submissions are finalized (which means that even if you managed to submit, you
might not get rewarded - if you are too late).

As an example: if a task has 15 $MPWR for first 200 and 6 $MPWR for last 500, it means
that the first 200 approved submissions earn $15 MPWR each and the next 500 earn 6 $MPWR each.
Anyone submitting beyond those two batches are not rewarded.

We've chosen this mechanism to get as early feedback as possible, as well
as gamifying the process a little. We might change the exact numbers
during the testnet itself, but will communicate this in Discord if so.

## Zealy

Zealy tasks are different social media, marketing, and community tasks.
Examples of tasks might be:

- Retweeting a tweet
- Making content
- Participating in community events
- Doing plastic waste cleanup
- More tasks likely to be added, so keep an eye out!

The exact tasks are available on Zealy: https://zealy.io/c/circulus1-empowerchain/questboard

120,000 $MPWR are set aside for Zealy tasks and will be awarded relative to the number of points/xp earned by
the top 500 (subject to change!) participants.

## UI Testing

See [First and last serve submissions](#first-and-last-serve-submissions) for details on reward mechanism.

| Task                      | First serve submissions    | Last serve submissions    |
|---------------------------|----------------------------|---------------------------|
| Create proof of existence | 15 $MPWR for first 200     | 6 $MPWR for last 500      |
| Buy plastic credits       | 30 $MPWR for first 200     | 12 $MPWR for last 500     |
| Retire plastic credits    | 30 $MPWR for the first 200 | 12 $MPWR for the last 500 |

### Instructions
Instruction for each task can be found in the Google submission form for each task.

Create proof of existence: https://forms.gle/i2TSGvN2AL983WS16

Buy plastic credits: https://forms.gle/MDfBbZZSv3rDh11W7

_(Right now, the credits you buy will not show up anywhere (except if you know how to query the marketplace contract manually). This will be added shortly.)_

Retire plastic credits: Will be provided later when this functionality is turned on.

## CLI Testing

See [First and last serve submissions](#first-and-last-serve-submissions) for details on reward mechanism.

| Task                               | First serve submissions       | Last serve submissions      |
|------------------------------------|-------------------------------|-----------------------------|
| SDK transactions                   | 37.5 $MPWR for first 200      | 15 $MPWR for last 500       |
| Proof of existence transaction     | 9.375 $MPWR for the first 200 | 3.75 $MPWR for the last 500 |
| Plastic credit issuance CLI tasks* | 450 $MPWR for first 25*       | N/A                         |

> \* Performing the plastic credit issuance CLI tasks requires deep knowledge about the plastic credits module
> as well as being given special permissions on-chain.
>
> As such, we will conduct a quiz to determine who gets to do this line of operations
> Hint: it will require intimate knowledge
> about [Plastic Credits](../core-modules/plastic-credits/high-level-overview.md)

### Instructions
Instruction for each task can be found in the Google submission form for each task.

SDK transactions: https://forms.gle/mfuLHV9vBshJY2by6

Proof of existence transaction: https://forms.gle/QajitMU2D1Mo7cRU7

Plastic credit issuance CLI tasks: Will be provided later to the participants who pass the quiz (which will also be provided later).
In the meantime, you can read up on the [Plastic Credits](../core-modules/plastic-credits/high-level-overview.md) module.

## IBC Testing

See [First and last serve submissions](#first-and-last-serve-submissions) for details on reward mechanism.

| Task                                                   | First serve submissions  | Last serve submissions  |
|--------------------------------------------------------|--------------------------|-------------------------|
| Send $MPWR to Cosmos Hub, and half back                | 7.14 $MPWR for first 100 | 1.42 $MPWR for last 500 |
| Send $ATOM to EmpowerChain                             | 7.14 $MPWR for first 100 | 1.42 $MPWR for last 500 |
| Send $MPWR to Stargaze, and half back again            | 7.14 $MPWR for first 100 | 1.42 $MPWR for last 500 |
| Send $STARS to EmpowerChain                            | 7.14 $MPWR for first 100 | 1.42 $MPWR for last 500 |
| Send $MPWR to Osmosis, and half back again             | 7.14 $MPWR for first 100 | 1.42 $MPWR for last 500 |
| Send $USDC to EmpowerChain (from Osmosis for instance) | 7.14 $MPWR for first 100 | 1.42 $MPWR for last 500 |
| Send $OSMO to EmpowerChain                             | 7.14 $MPWR for first 100 | 1.42 $MPWR for last 500 |

### Instructions
Instruction for each task can be found in the Google submission form.

All the tasks are in the following Google Form: https://forms.gle/JJDeX5AVaZnznvqv8

## Docs, guides, etc

For docs and guide related tasks there are is a different reward mechanism. For each task there will be
maximum 1 winner and 3 runner-ups. So even if you don't win, you might still get rewarded well.

| Task                                                     | Winner       | Runner-ups   |
|----------------------------------------------------------|--------------|--------------|
| Proof of existence user guide                            | 4687.5 $MPWR | 1562.5 $MPWR |
| Marketplace user guide                                   | 4687.5 $MPWR | 1562.5 $MPWR |
| Plastic credit CLI guide (from both sides)               | 4687.5 $MPWR | 1562.5 $MPWR |
| Automate CODING_GUIDELINES and other .md files into docs | 4687.5 $MPWR | 1562.5 $MPWR |
| Make our automated API docs look better                  | 4687.5 $MPWR | 1562.5 $MPWR |
| From zero to hero validator guide                        | 9375 $MPWR   | 3125 $MPWR   |
| Wildcard / TBA                                           | 4687.5 $MPWR | 1562.5 $MPWR |

All of the above tasks needs to be submitted as Pull Requests to EmpowerChain's GitHub repo: https://github.com/EmpowerPlastic/empowerchain

The docs are written in Markdown under the `docs` folder: https://github.com/EmpowerPlastic/empowerchain/tree/main/docs

## Build challenges

Most challenges have potential 2 parts: UX/UI designs & Code.
You can aim to do both in a challenge, or just focus on one of them.
This allows designers that don't have coders available to make an amazing concept and get rewarded for that,
while coders that aren't that comfortable creating beautiful UIs can get rewarded for creating functional prototypes.

If any of these challenges seem interesting, please read through the information and documentation we have provided, and
then feel very free to reach out to discuss ideas and get feedback from our team.

There are also grants available for bigger ideas and/or further development. Reach out to discuss more!

For build challenges there are is a different reward mechanism. For each task there will be
maximum 1 winner and 3 runner-ups. So even if you don't win, you might still get rewarded well.

| Challenge                                        | Winner       | Runner-ups   |
|--------------------------------------------------|--------------|--------------|
| Plastic credit issuer interface                  | 15,000 $MPWR | 5,000 $MPWR  |
| Plastic credit dashboard                         | 15,000 $MPWR | 5,000 $MPWR  |
| Plastic credit non-crypto                        | 15,000 $MPWR | 5,000 $MPWR  |
| Plastic credit DeFi concept                      | 15,000 $MPWR | 5,000 $MPWR  |
| Plastic credit NFT concepts                      | 15,000 $MPWR | 5,000 $MPWR  |
| Proof of Existence stamp                         | 15,000 $MPWR | 5,000 $MPWR  |
| Proof of Existence wildcard use cases            | 15,000 $MPWR | 5,000 $MPWR  |
| Proof of existence signatures                    | 15,000 $MPWR | 5,000 $MPWR  |
| EmpowerChain-specific Governance UI              | 30,000 $MPWR | 10,000 $MPWR |
| Automate reference docs for Marketplace contract | 7,500 $MPWR  | 2,500 $MPWR  |
| Add full support for EmpowerChain to Groups UI   | 15,000 $MPWR | 5,000 $MPWR  |
| Wildcard challenge                               | 15,000 $MPWR | 5,000 $MPWR  |

### Instructions

All the challenges are detailed in the [Build challenges page](./build-challenges.md).

Submitting can be done in the following Google Form: https://forms.gle/tkmAULdirqQLV6EJ6

## Bugs

Critical bugs and genesis bugs are not subject to vesting.

See [First and last serve submissions](#first-and-last-serve-submissions) for details on reward mechanism.

| Task                                    | First serve submissions    | Last serve submissions    |
|-----------------------------------------|----------------------------|---------------------------|
| Minor bugs                              | 36.5 $MPWR for first 100   | 7.3 $MPWR for last 500    |
| Non-show-stopper bugs (medium severity) | 182.5 $MPWR for first 100  | 36.5 $MPWR for last 500   |
| Critical bugs                           | 3650.79 $MPWR for first 25 | 912.69 $MPWR for last 100 |
| Genesis bugs                            | 365 $MPWR for first 5      | 91.26 $MPWR for last 20   |

All bugs are rewarded only if you are the first to report them.
If they are reported elsewhere, or by someone else first, you will not be rewarded
(depending on the situation, we'll look at this on a case-by-case basis).

Make sure to check and report first at: https://github.com/EmpowerPlastic/empowerchain/issues

### Instructions

Submit bugs in our GitHub repo: https://github.com/EmpowerPlastic/empowerchain

And submit it in this Google form as well: https://forms.gle/FXopNQoFeoZjZqPs6

> **Make sure to search and sure nobody has submitted the bug before you.**

## Security issues

Critical security issues are not subject to vesting.

See [First and last serve submissions](#first-and-last-serve-submissions) for details on reward mechanism.

| Task                                                  | First serve submissions     | Last serve submissions        |
|-------------------------------------------------------|-----------------------------|-------------------------------|
| Upstream security issue, SDK, etc*                    | 416.66 $MPWR for first 25   | 208.3 $MPWR for last 50       |
| Non-critical security issue                           | 416.66 $MPWR for first 25   | 104.16 $MPWR for last 100     |
| Critical security issue (stolen funds, stalled chain) | 10416.66 $MPWR for first 10 | 4166.66 $MPWR for the last 25 |

### Instructions

Please read everything in this section carefully.

Submit issues related to EmpowerChain in our GitHub repo: https://github.com/EmpowerPlastic/empowerchain

And submit it in this Google form as well: https://forms.gle/FXopNQoFeoZjZqPs6

- Upstream security issues should:
    - Be reported to the upstream project
    - Be reported to us
    - Be reported in private
- Upstream security issues will:
    - Be rewarded by us
    - Most likely be rewarded by the upstream project as well
        - If not, we will reward you (amount depending on severity)

All security issues are rewarded only if you are the first to report them.
If they are reported elsewhere, or by someone else first, you will not be rewarded
(depending on the situation, we'll look at this on a case-by-case basis).

Make sure to check and report first (unless critical, see note below) at: https://github.com/EmpowerPlastic/empowerchain/issues

**IMPORTANT!** If you discover a security issue in an upstream library that is used by EmpowerChain, please report it in
private.
Disclosing security issues in public can be harmful to all users of that software in live systems.

## Stress testing

This will be for phase 3 and details will be added and announced later.


