# empowerchain-ts-client

NodeJS module with exported EmpowerChain's types in TypeScript.

## IMPORTANT

If upgrading Cosmos SDK with changes in SDK protos, run `./scripts/update-sdk-proto.sh` to fetch newest Cosmos SDK proto definitions.

## Manual types generation

```
npm i
npx telescope transpile
...
[go through interactive shell]
```

## TODO

Figure out how do we want to import types to client apps. Lerna internal module? Published to npmjs?..