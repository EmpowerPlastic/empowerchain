# Proof of Existence: High level overview

Proof of Existence on EmpowerChain is a feature designed to allow users to prove the existence of any document or piece of data at a specific point in time. This high-level overview will provide you with a brief explanation of the purpose, concepts, and implementation of the Proof of Existence module on EmpowerChain.

The main use case at first for proof of existence is for tracking data to be time-stamped and immutable.

## Purpose
The main goal of the Proof of Existence module is to combine blockchain immutability with cryptographic hashing to enable users to:

1. Prove that a specific piece of data existed at least at the time it was added to the blockchain.
2. Demonstrate that the data has not changed since it was added to the blockchain.

This can be beneficial for various use cases (besides plastic waste tracking data immutability), such as demonstrating data or IP ownership, proving data integrity, and ensuring that data has not been corrupted.

## What _is_ proof existence?
Proof of Existence is a method that combines a hash and a timestamp to demonstrate the existence of a piece of data (e.g., a document, text, bytes) at a specific point in time. The blockchain's immutability ensures that the proof remains unchanged, allowing users to verify the existence and integrity of the data at any time.

## Hashing
Hashing is a cryptographic function that converts a variably sized piece of data into a small, practically unique, fixed-size string. By storing the hash on the blockchain, users can verify the integrity of their data by comparing the stored hash with the hash of their current data.

## Hash collision
Whenever you map something large (or at least larger than the output) into something small there will also be the
theoretical possibility of collisions, where two different datasets yield the same result.
In other words it is theoretically possible to have one hash function as the correct proof for more than one set of data.

To illustrate this we can take as example the widely used SHA-256 hashing algorithm:
It produces a hash made out of 32 bytes (1 byte is 8 bits, so a total of 256 bits - 0s and 1s)
and each byte can each represent 256 different values. The total number of possible
permutations under SHA-256 then becomes 32^256. That is such an absurdly large number
(it is a number so large that it has 386 digits and is more than 10^56 (or just about 3 septendecillion)
times larger than the number of atoms in the universe) that any practical chances of a collision is just about inconceivable.

## Read more
You can find more in-depth technical details on the implementation of proof of existence in the [proof of existence module docs](../module_docs/proofofexistence.md)