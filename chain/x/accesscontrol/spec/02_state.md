# State

`accesscontrol` tracks Cosmos SDK addresses allowed to execute specific messages . It creates a sub-KVStore for every module that injects `accesscontrol's` keeper.

## SubKeepers

Usage of `accesscontrol` is a bit different from what we may know from standard SDK modules. Because of creating and using sub-stores for every module that registers `accesscontrol's` keeper, the concept of a `SubKeeper` was introduced. `SubKeeper` allows a module to access it's `accesscontrol's` sub-store and at the same time protects sub-stores of other modules from unprivilleged access. Below is an example of initializing `accesscontrol's` keeper and injecting a subkeeper in `app.go`:

```golang
	app.AccessControlKeeper = *accesscontrolmodulekeeper.NewKeeper(appCodec, keys[accesscontrolmoduletypes.StoreKey])
    ...
    ...
    ...
	app.PlasticcreditKeeper = *plasticcreditmodulekeeper.NewKeeper(appCodec,
		keys[plasticcreditmoduletypes.StoreKey],
		keys[plasticcreditmoduletypes.MemStoreKey],
		app.GetSubspace(plasticcreditmoduletypes.ModuleName),
		accesscontrolmodulekeeper.NewSubKeeper(&app.AccessControlKeeper, plasticcreditmoduletypes.ModuleName),
```
Initializing a SubKeeper requires a unique prefix, that will be used to access the module's sub-store. Conventionally, module name should be used as prefix. After injecting a SubKeeper, it is recommended to create an interface for it the same way as for other external Keepers. The full interface is shown below:
```golang
type AccessControlKeeper interface {
	HasAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) bool
	GrantAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) error
	RevokeAccess(ctx sdk.Context, account sdk.AccAddress, msgType string)
}
```

It is recommended to maintain a list of message types as constants instead of passing *magic variables* to Access Control Keeper's functions:

```golang
k.accesscontrol.keeper.HasAccess(msg.Creator, types.MsgListUsersTypes)
```
