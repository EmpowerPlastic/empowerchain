# EmpowerChain docs

The EmpowerChain docs are located here.

The docs are written in markdown and rendered using Vitepress.

## Goals
The goals of the docs are to provide a place where people can find the information they need about EmpowerChain.
It will necessarily serve multiple audiences, from users to developers.

With that in mind, the information should be organized in a way that makes sense for each audience:
- People who are interested in learning about what EmpowerChain is and how it works
- Users should be able to find information about how to use EmpowerChain and its applications, including on-chain governance
- Developers should be able to find information about how (and why they might want) to build on EmpowerChain
- Validators should be able to find information about how to run a validator node and participate in the network

## API docs
The api documentation for the chain is under `api-docs` and is automatically generated.

### Run doc site locally

```shell
$ npm install
$ npm run dev
```

### Build

Built docs are located in `docs/.vitepress/dist`

```shell
$ npm run docs:build
```
