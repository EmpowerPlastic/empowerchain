# Coding Guidelines

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