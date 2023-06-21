# Introduction

Proof of Existence on EmpowerChain is a feature designed to allow users to prove the existence of any document or piece of data at a specific point in time. This high-level overview will provide you with a brief explanation of the purpose, concepts, and implementation of the Proof of Existence module on EmpowerChain.

The main use case at first for proof of existence is for tracking data to be time-stamped and immutable.

for more full explanation you can read on [proof of existence](../core-modules/proof-of-existence/high-level-overview.md) section.

## Pre requisite

- Empower Wallet (empower1xwXXXXXXXXXXXXX)
- Any type document that you wish to certify as proof of existence. or you can use plain text to certify as proof of existence
- Some MPWR Token

## Certify

Visit [https://testnet.proof-of-existence.com/](https://testnet.proof-of-existence.com/)

> ### File
>
> 1. Choose **_Certify_** Menu, choose **_File_** tab and click **_Browse_**
>
> ![PoE Web App](poe-web-app-certify-file.png "PoE Web App")
>
> 2. Select your files that you want to create the PoE
>
> ![Select File](poe-web-app-certify-file-select.png "Browse File")
>
> 3. Click **_Create proof_**
>
> ![Create proof clicked](poe-web-app-certify-file-create-proof.png "After click create proof")
>
> 4. Connect your wallet, you can use **_Keplr_**, **_cosmostation_**, or **_leap_**
>
> ![Connect wallet](poe-web-app-certify-file-connect-wallet.png "Connected Wallet")
>
> 5. Completed transaction on you wallet
>
> ![Transaction](poe-web-app-certify-file-complete-pay.png "Transaction")
>
> 6. You will see proof of existence certificate, You can copy the verification link and send it to someone that needed the proof of existence of your document
>
> ![PoE File Certificate](poe-web-app-certify-file-success.png "PoE File Certificate")

> ### Text
>
> 1. Choose **_Certify_** Menu, choose **_Text_** tab
>
> ![PoE Web App](poe-web-app-certify-text.png "PoE Web App")
>
> 2. There is 2 options available on checklist, It will produce different hash based on your options. We will cover it later.
>
> ![Text PoE](poe-web-app-certify-text-create-with-check.png "Text PoE")
>
> 3. Just like file PoE, you need to connect your wallet and completed the transaction
>
> ![Transaction](poe-web-app-certify-text-create-with-check-complete.png "Transaction")
>
> 4. You will see proof of existence certificate, You can copy the verification link and send it to someone that needed the proof of existence of your document
>
> ![PoE Text Certificate](poe-web-app-certify-text-create-with-check-certificate.png "PoE Text Certificate")
>
> 5. In step 2, we mention that it will produce different hash based on your options, as you can see in screenshot, we don't check the options
>
> ![Text PoE Without Check Options](poe-web-app-certify-text-without-text.png "Text PoE Without Check Options")
>
> 6. It's produce different hash, with options it create hash "4666853d2d63581e14ba6bc32f49b5c945ae3cfac38f2d8fce1a7e1f0f45dcfd", without options it create hash "ff826b8389624dce9009b0a8b34eb5d55c477c1ba4cc5fceec1d311b086d0128", It means that the hash will different if we supply different text or file
>
> ![Text PoE Without Check Options Hash](poe-web-app-certify-text-without-text-hash.png "Text PoE Without Check Options Hash")

## Verify

Visit [https://testnet.proof-of-existence.com/verify](https://testnet.proof-of-existence.com/verify)

> ### File
>
> 1. If you want to check that the document on EmpowerChain, you can use this to verify the file PoE, Choose **_File_** tab, Click **_browse_** and select your files
> ![Verify File](poe-web-app-verify-file-select.png "Verify File")
>
> 2. And if the document was right, it should show the hash stored on EmpowerChain. even you change the document name, it can verify your document
>
>![Verify File Success](poe-web-app-verify-file-success.png "Verify File Success")


> ### Text
>
> 1. If you want check some words or text on EmpowerChain, you can use this to verify the text PoE, Choose **_Text_** tab, type your words
> > **Note:** Make sure you use the right style of your words, like letter casing words and whitespace characters, because it will produce different hash
>
> ![Verify Text](poe-web-app-verify-text.png "Verify Text")
>
> 2. And if the words was right, it should show the hash stored on EmpowerChain. 
>
>![Verify Text Success](poe-web-app-verify-file-success.png "Verify Text Success")