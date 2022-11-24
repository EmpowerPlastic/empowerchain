# State

The `plasticcredit` module keeps track of plastic credits issued, traded/transferred and retired on-chain. 

## Params

The plasticcredit module stores it's params in state with the prefix of 0x00, it can be updated with governance or the address with authority.

Params have the `issuer_creator` which is a field that controls who is allowed to create new issuers. 
If the issuer_creator is empty (is it is by default), the controlling entity is the gov module.

- Params: `0x00 | ProtocolBuffer(Params)`

## ID Counters

ID Counters is a global object to keep track of ID indexes. It keeps at all times the next id for the entities that need it: 
`next_issuer_id`, `next_collector_id`, `next_project_id` and `next_credit_class_id`.

- ID Counters: `0x01 | ProtocolBuffer(IDCounters)`

## Issuer

An Issuer is an entity that is allowed to create Credit Classes and issue Credits under their own Classes.
They are the entity responsible for the data, quality and trust of the plastic credits they issue.

An issue consists of the following fields: `id`, `name`, `description`, `admin`, with `id` being the unique identifier for an issuer.

`name` and `description` is mainly for identifying and letting clients get information on issuers.

`admin` is the address of the administrative account that controls the issuer and can update information and `accounts`. 

Only the `issuer_creator` from `Params` is allowed to create new issuers.
This is typically either directly through governance or through a sub-dao or group.

- Issuer: `0x02 | issuerID | -> ProtocolBuffer(Issuer)`

## Collector

## Credit Balance

## Credit Batch

## Credit Class

## Credit Denom

## ID Counters

## Project