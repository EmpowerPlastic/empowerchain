# empowerjs

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/61703024?s=200&v=4" width="80"><br />
    @emempowerjs
</p>


## install

```sh
npm install empowerjs
```
## Table of contents

- [empowerjs](#empowerjs)
  - [install](#install)
  - [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Composing Messages](#composing-messages)
      - [CosmWasm Messages](#cosmwasm-messages)
      - [IBC Messages](#ibc-messages)
      - [Cosmos Messages](#cosmos-messages)
    - [Empower Data Format Builder](#empower-data-format-builder)
  - [Connecting with Wallets and Signing Messages](#connecting-with-wallets-and-signing-messages)
    - [Initializing the Stargate Client](#initializing-the-stargate-client)
    - [Creating Signers](#creating-signers)
    - [Amino Signer](#amino-signer)
    - [Proto Signer](#proto-signer)
    - [Broadcasting Messages](#broadcasting-messages)
  - [Advanced Usage](#advanced-usage)
  - [Developing](#developing)
    - [Codegen](#codegen)
    - [Publishing](#publishing)

## Usage
### RPC Clients

```js
import { empowerjs } from 'empowerjs';

const { createRPCQueryClient } = empowerjs.ClientFactory; 
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: 'empowerjs1addresshere' });

// you can also query the empowerjs modules
const balances = await client.empowerjs.exchange.v1beta1
    .exchangeBalances()
```

### Composing Messages

Import the `empowerjs` object from `empowerjs`. 

```js
import { empowerjs } from 'empowerjs';

const {
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit
} = empowerjs.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### CosmWasm Messages

```js
import { cosmwasm } from "empowerjs";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

#### IBC Messages

```js
import { ibc } from 'empowerjs';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

#### Cosmos Messages

```js
import { cosmos } from 'empowerjs';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```
### Empower Data Format Builder

```ts
import {
  ApplicantBuilder,
  EventBuilder,
  FileBuilder,
  MaterialPropertyBuilder,
  PlasticCreditBuilder
} from 'empowerjs';
    const files = fileBuilder
      .addFile('invoice.pdf', 'url1')
      .addFile('handover_doc.pdf', 'url2')
      .build();

    const mediaFiles = fileBuilder
      .addFile('cleanup_image_1.png', 'mediaUrl1')
      .addFile('cleanup_image_2.png', 'mediaUrl2')
      .build();

    const materials = propertyBuilder.addProperty('origin', 'ocean').addProperty('type', 'plastic').build();

    const event = eventBuilder
      .setLocation({ latitude: '1', longitude: '2' })
      .setAmount('100')
      .setMagnitude('kg')
      .setMaterial(materials)
      .setRegistrationDate('2020-01-01')
      .build();

    const applicant = applicantBuilder
      .setName('Applicant')
      .setDescription('We\'re working towards the clean world!')
      .setWebRefs(['https://applicant.com', 'https://www.instagram.com/applicant/'])
      .build();

    const plasticCredit = plasticCreditBuilder
      .setIssuanceDate('2020-01-01')
      .setCreditType('type')
      .setApplicantData(applicant)
      .addCreditEventData(event)
      .addCreditEventData(event2)
      .addCreditFilesData(files)
      .addCreditMediaData(mediaFiles)
      .build();

    // actual data to be uploaded to IPFS and used as metadata URI for Plastic Credit
    const plasticCreditIndexFileData = JSON.stringify(plasticCredit, null, 2);
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningEmpowerchainClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningEmpowerchainClient } from 'empowerjs';

const stargateClient = await getSigningEmpowerchainClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```
### Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'empowerjs');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'coin',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: 'coin',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

## Advanced Usage


If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    empowerjsAminoConverters,
    empowerjsProtoRegistry
} from 'empowerjs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/empowerjs'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...empowerjsProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...empowerjsAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Developing

When first cloning the repo:

```
yarn
yarn build
```

### Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK and contracts into `empowerjs`:

```
yarn codegen
```

### Publishing

Build the types and then publish:

```
yarn build:ts
yarn publish
```
