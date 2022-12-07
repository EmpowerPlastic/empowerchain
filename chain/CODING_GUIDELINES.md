# Coding Guidelines

## Module structure

We try to follow the folder structure outline in the Cosmos SDK docs: https://docs.cosmos.network/main/building-modules/structure

For documentation of a module, we use the `README.md` file under `x/modulename`. The format should conform to the "spec-spec" outlined in the Cosmos SDK docs: https://docs.cosmos.network/main/spec/SPEC-SPEC

## Keeper structure

To keep a clean separation of concerns in our modules, we construct our keeper this way:
- API Layer: MsgServer and Querier
- Business logic layer: Public Keeper methods
- Storage layer: Private Keeper methods

![](../docs/static/img/module_structure.png)

### API Layer: MsgServer and Querier

A thin layer that mainly deals with converting messages to whatever the Keeper methods requires, 
as well as converting responses to message response formats for queries.

### Business logic layer: Public Keeper methods

This is the layer where all the magic happens. Think of this as the main entry point to _doing things_. 
The API layer will call in here directly, as will any "external" modules. 

The business logic layer should not make any assumptions about how it was called, so it needs to make sure the data it asks for is correct.

The business logic layer should not panic unless something is terribly wrong with the state, instead it should send back sensible errors.

The methods exposed here should in most cases not be just "setters" and "getters". It should be business operations that give value.
Setter and getters are for the storage layer.

### Storage layer: Private Keeper methods

This is the layer where storage is updated. Setters and getters might make sense here. 
The functions should be private and can make assumptions about correctness of data it is being sent.

## Proto files

### Pointers

The general rule should be to not use pointers. Pointers are ugly, slow (for small data collections) and most of the time unnecessary.
Use ` [(gogoproto.nullable) = false];` whenever possible.

Example:
```protobuf
message QueryResponse {
  MyEntity entity = 1  [(gogoproto.nullable) = false];
}

message AnotherQueryResponse {
  repeated AnotherEntity entities = 1 [(gogoproto.nullable) = false];
}

message MsgWithNestedTypes {
  uint64 something = 1;
  NestedType nestedType = 2 [(gogoproto.nullable) = false];
}
```

## Errors

To keep testing and debugging as easy as possible, we try to create good errors rather than use generic ones.
This does not mean we need a unique error for every single error scenario.
A good rule of thumb is: "if all I had was the error code, would I be able to find some useful information about what happened?".

Error codes are grouped by the different types of entities. The grouping is done with the first digit(s), corresponding to the digit in the storage key.
Given a key like this in `keys.go`
```go "test"
var MyEntity = []byte{0x02}
```
The errors could look like in `errors.go`:
```go
var ErrAboutMyEntity = errors.Register(ModuleName, 2001, "my first error")
```

The error number count from 1 by default, but if the error has a close correspondence in http error codes, use that instead.
For example, for the error code `2404` would indicate that `MyEntity` is not found.
```go
var (
    ErrAboutMyEntity = errors.Register(ModuleName, 2001, "my first error")
    ErrNotFoundMyEntity = errors.Register(ModuleName, 2404, "my entity was not found")
)
```

## Coding tips

### Typical order of making changes (especially new things)

1. Make changes in the proto files
    - Update any changes in spec
2. Generate proto `$ make proto`
3. Implement/Update `Validate()` on any non-rpc messages (i.e. data structures to be persisted in the keeper and in genesis)
4. If you created any new rpc messages:
    - Implement the `sdk.Msg` interface in `msgs.go` (`_ sdk.Msg = &MsgName{}`)
    - Don't forget to create tests for `ValidateBasic`!
5. Implement `MsgServer`/`Querier` and `Keeper` methods
    - Don't forget integration tests
    - If you create public Keeper methods, they need to be tested as well
    - Don't forget events
6. Update genesis if necessary (in genesis and keeper/genesis)
7. Update the client/cli if necessary
8. Create e2e tests in  `scripts/test/`
    - Remember to `$ make install` after every change you make so the binary under test is the correct one.
    - Hot tip: stop the test at some point before the serve is killed with `exit 0` and run just the script (e.g. `$ ./scripts/test/smoke_plastic_credit.sh`). 
    - This way the server is still running, and you can manually run your CLI commands in the terminal.
    - To get access to the environment variables such as `$CHAIN_ID` and `$CHAIN_DIR` you can use the env script like this: `$ source ./scripts/serve_env.sh`.
9. Format and lint your code before committing: `$ make format` and `$ make lint`