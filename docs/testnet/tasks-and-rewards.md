# Tasks and rewards

To make sure you are eligible for the rewards, please read the [rules](./rules) carefully first.

**Disclaimer:** The tasks and rewards might be adjusted at any time, but will be announced in Discord if so.

Before you start on a task, please open the submission form to make sure that:

1. The task has opened (if the form is not accepting submissions, the task is not open)
2. You understand the task and the instructions which you will find in the submission form itself

To find resources such as RPC, API, block explorers and validation guides, please visit the [resources](./resources)
page.

## For validators

As you will see below, most of the tasks are not particularly geared towards validators. This is because we want to
make sure that everyone can participate, not just validators.

More importantly, we want to align and incentivize validators long-term, which is why the delegation program
will be the most important way for validators to earn rewards. Please see
the [delegation program](../validators/delegation-program.md) for more information.

**Being in the active set during the testnet is not really relevant to the delegation program (so please don't worry
about that)**

## How to participate

To participate, you first need to do three things:

1. Join our Discord
2. Sign up on our Google Form
3. Grab the Circulus-1 Tester role in the # 🤝︱tester-role channel in Discord

Ensure you create a new wallet (instructions below) and **use the same address for all tasks during the testnet**.
We will ask everyone to provide the address at the end of the testnet to match it against the Discord username you
provided in the signup form.

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
| Community helper  | 5,000 $MPWR   |                                                     |

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
| Transfer plastic credits  | 30 $MPWR for the first 200 | 12 $MPWR for the last 500 |

### Instructions

Instruction for each task can be found in the Google submission form for each task.

Create proof of existence: https://forms.gle/i2TSGvN2AL983WS16

Buy plastic credits: https://forms.gle/MDfBbZZSv3rDh11W7

Retire plastic credits: https://forms.gle/UQiyWdwatPZTJqhz9

Transfer plastic credits: https://forms.gle/mBGXAkgruZ4sGCyn9

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

Plastic credit issuance CLI tasks: Will be provided later to the participants who pass the quiz (which will also be
provided later).
In the meantime, you can read up on the [Plastic Credits](../core-modules/plastic-credits/high-level-overview.md)
module.

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

| Task                                                     | Winner                                         | Runner-ups    |
|----------------------------------------------------------|------------------------------------------------|---------------|
| Proof of existence user guide                            | 4687.5 $MPWR                                   | 1562.5 $MPWR  |
| Marketplace user guide                                   | 4687.5 $MPWR                                   | 1562.5 $MPWR  |
| Plastic credit CLI guide (from both sides)               | 4687.5 $MPWR                                   | 1562.5 $MPWR  |
| Automate CODING_GUIDELINES and other .md files into docs | 4687.5 $MPWR                                   | 1562.5 $MPWR  |
| Make our automated API docs look better                  | 4687.5 $MPWR                                   | 1562.5 $MPWR  |
| From zero to hero validator guide                        | 9375 $MPWR                                     | 3125 $MPWR    |
| Wildcard / TBA                                           | 4687.5 $MPWR                                   | 1562.5 $MPWR  |
| Testnet task instructions                                | 500-1000 $MPWR per accepted (multiple winners) | 100-500 $MPWR |

All of the above tasks needs to be submitted as Pull Requests to EmpowerChain's GitHub
repo: https://github.com/EmpowerPlastic/empowerchain and to a Google Form (see below)

The docs are written in Markdown under the `docs` folder: https://github.com/EmpowerPlastic/empowerchain/tree/main/docs

It is recommended to reach out to someone from the team to figure out what is expected for each task, but we've added
some clarifications in the instructions below.

### Instructions

General guidelines:

- All written material needs to be in English
- All written material needs to be in Markdown
- All written material needs to be fairly grammatically correct

Some more specifics on each task:

| Task                                                     | Description                                                                                                                                                                                                                                                               |
|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Proof of existence user guide                            | An end-user guide on how to create on our [PoE web app](https://testnet.proof-of-existence.com/)                                                                                                                                                                          |
| Marketplace user guide                                   | An end-user guide on how to use the [Plastic Credit Marketplace web app](https://testnet.empower.market//)                                                                                                                                                                |
| Plastic credit CLI guide (from both sides)               | A guide on how to use the Plastic Credit CLI for both issuers and applicants (mostly issuers)                                                                                                                                                                             |
| Automate CODING_GUIDELINES and other .md files into docs | We have a bunch of .md files that are not included in the docs, but should be. This task is to automate that process. Talk to us!                                                                                                                                         |
| Make our automated API docs look better                  | We have automated API docs, but they don't look that good. This task is to make them look better. Talk to us!                                                                                                                                                             |
| From zero to hero validator guide                        | A guide on how to become a validator. What it is, how to set it up, how to secure it. _Everything_ you need to know from zero (knowing nothing) to actually running a good validator setup that is secure and performant. Please reach out to talk if you have questions. |
| Wildcard / TBA                                           | If you have an idea for a task that you think would be valuable, please reach out to us and we can discuss it.                                                                                                                                                            |
| Testnet task instructions                                | Many of the testnet tasks have unclear/incomplete instructions. IBC is a good example. If you think a task might need a guide, it probably does. Talk to us!                                                                                                              |

To submit a task, you will need to do two things:

1. Create a Pull Request to the EmpowerChain repo with your changes: https://github.com/EmpowerPlastic/empowerchain
2. Submit a Google Form with a link to your Pull
   Request: https://docs.google.com/forms/d/e/1FAIpQLScd5GEfcry1Mu5NMTD4B5W21kZW97tzg-xtsWxhMoDge6uViQ/viewform?usp=sf_link

And again, it is recommended to reach out to someone from the team to figure out what and how to write if you are
unsure.

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

Make sure to check and report first (unless critical, see note below)
at: https://github.com/EmpowerPlastic/empowerchain/issues

**IMPORTANT!** If you discover a security issue in an upstream library that is used by EmpowerChain, please report it in
private.
Disclosing security issues in public can be harmful to all users of that software in live systems.

## Stress testing

**Make sure you are following all the instructions laid out here. Especially the windows for stress testing, the scope
for each window, and only using a single wallet is very important!**

Always check back here before each window as we might change the exact scope if we find it necessary.

For stress testing we will reward evenly across all submissions that meet the requirements.
The total number of tokens to be distributed is 30,000 $MPWR.

25,000 $MPWR will be distributed evenly across transactions that meet the requirements,
and 5,000 $MPWR will be distributed to the top 3 participants who can prove they have
stress tested the frontend in a meaningful way (a scripted headless browser for instance?).

The stress test phase will last from 21st of June to EOD (or early next day) 25th of June.

The plan is not to stress test the whole network all the time, but to focus stress testing on specific parts of the
network at specific times (windows).

The plan is as follows:

On 21st of June, we will start with a stress test of the network at a single window of 1 hour.
The next days we will have 3 windows where we will only ask to stress test our custom modules, not the whole network.
If we find anyone is stress testing the whole network, they will be disqualified from the stress testing rewards.

The windows are as follows:

| What to test                                 | Date         | Time              |
|----------------------------------------------|--------------|-------------------|
| Everything, transactions of any kind         | 21st of June | 16:00 - 17:00 UTC |
| Everything, transactions of any kind         | 22nd of June | 10:00 - 11:00 UTC |
| Plastic credit purchase, transfer and retire | 22nd of June | 16:00 - 17:00 UTC |
| Plastic credit purchase, transfer and retire | 22nd of June | 23:00 - 00:00 UTC |
| Plastic credit purchase, transfer and retire | 23rd of June | 10:00 - 11:00 UTC |
| Plastic credit purchase, transfer and retire | 23rd of June | 16:00 - 17:00 UTC |
| Plastic credit purchase, transfer and retire | 23rd of June | 23:00 - 00:00 UTC |
| Plastic credit purchase, transfer and retire | 24th of June | 10:00 - 11:00 UTC |
| Plastic credit purchase, transfer and retire | 24th of June | 16:00 - 17:00 UTC |
| Plastic credit purchase, transfer and retire | 24th of June | 23:00 - 00:00 UTC |
| Plastic credit purchase, transfer and retire | 25th of June | 10:00 - 11:00 UTC |
| Plastic credit purchase, transfer and retire | 25th of June | 16:00 - 17:00 UTC |
| Plastic credit purchase, transfer and retire | 25th of June | 23:00 - 00:00 UTC |

It is important that you don't keep spamming the network outside of these windows, if we find anyone doing this, they
will be disqualified from the stress testing rewards (and potentially previous rewards if they are causing harm).

### Instructions

Each participant is only allowed to stress test with a single account, the same account they have been using for the
previous tasks. Using multiple wallets will not help you in any way. So be smart with your transactions and tokens (*
*remember: you
can bundle many messages in a single transaction if you know what you are doing**).

We are not going to give detailed instructions on _how_ to stress test the network, but we will give some important
notes.

We are increasing the number of tokens given out by the faucet, so you can have enough tokens a lot of transactions.
(**Keep in mind: there is 0 point in spending those tokens on delegating to your validator, it doesn't help your case in
any way**).

For "Everything, throw transactions of any kind at the network", you can use any transaction type you want.
Just throw transactions at the network within the assigned window.

For "Plastic credit purchase, transfer and retire transactions", do any of the following (ideally all of them):

- Purchase plastic credits
    - Either on the marketplace website or using cosmwasm execute
      directly ([Rust msg.rs for reference](https://github.com/EmpowerPlastic/empowerchain/blob/main/cosmwasm/contracts/plastic-credit-marketplace/src/msg.rs))
    - **Please:** only buy 1 or a few at a time so others can also buy some
- Transfer plastic credits
    - Either on the marketplace website or using the cli/gprc/api
      directly ([cli reference](../references/cli-docs/empowerd_tx_plasticcredit_transfer))
- Retire plastic credits (makes them non-transferable)
    - Either on the marketplace website or using the cli/grpc/api
      directly ([cli reference](../references/cli-docs/empowerd_tx_plasticcredit_retire))

At any point during the stress test phase, but before the end of the stress test phase, you can submit your
participation
with the account you have been using here: https://forms.gle/XPt6hPwx8amy7DmDA

For the frontend stress testing mentioned earlier, we are not going to give any instructions, but leave it
open to you to figure out how to stress test the frontend in a meaningful way. If you can prove you have done this,
fill in the form here: https://forms.gle/EAWS38XGvJCArkKw8

## Community helper

For the community helper reward there will be maximum 1 winner and 3 runner-ups. So even if you don't win, you might
still get rewarded well.

| Task             | Winner      | Runner-ups |
|------------------|-------------|------------|
| Community helper | 3,500 $MPWR | 500 $MPWR  |

To be eligible for this reward you need to be active in the community and help others. This can be in the form of
answering questions, helping people with issues, helping people with their submissions, etc. If you can prove
that you have been active in the community and helped others, you can win this!

Submit your proof here: https://forms.gle/UMgJWK6m7M1in5Hq9
