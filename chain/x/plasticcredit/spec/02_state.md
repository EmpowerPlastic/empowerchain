# State

The `plasticcredit` module keeps track of plastic credits issued, traded/transferred and retired on-chain. 

## Params

The plasticcredit module stores it's params in state with the prefix of 0x00, it can be updated with governance or the address with authority.

Params have the `issuer_creator` which is a field that controls who is allowed to create new issuers. 
If the issuer_creator is empty (it is by default), the controlling entity is the gov module.

- Params: `0x00 | ProtocolBuffer(Params)`

## ID Counters

ID Counters is a global object to keep track of ID indexes. It keeps at all times the next id for the entities that need it: 
`next_issuer_id`, `next_collector_id`, `next_project_id` and `next_credit_class_id`.

- ID Counters: `0x01 | ProtocolBuffer(IDCounters)`

## Issuer

An Issuer is an entity that is allowed to create Credit Classes and issue Credits under their own Classes.
They are the entity responsible for the data, quality and trust of the plastic credits they issue.

An issuer consists of the following fields: `id`, `name`, `description`, `admin`, with `id` being the unique identifier for an issuer.

`name` and `description` is mainly for identifying and letting clients get information on issuers.

`admin` is the address of the administrative account that controls the issuer and can update information.

Only the `issuer_creator` from `Params` is allowed to create new issuers.
This is typically either directly through governance or through a sub-dao or group.

- Issuer: `0x02 | issuerID | -> ProtocolBuffer(Issuer)`

## Applicant

An Applicant is an entity that can apply for - and get issued by an issuer - plastic credits.

An Applicant consists of the following fields: `id`, `name`, `description`, `admin`, with `id` being the unique identifier for an applicant.

`name` and `description` is mainly for identifying and letting  clients get information on applicants.

`admin` is the address of the administrative account that controls the applicant and can update information.

- Issuer: `0x03 | applicantID | -> ProtocolBuffer(Applicant)`

## Credit Collection

Credit Collection is an object that contains all global information about the given Credit Collection, which is:
- `denom` - denomination of the collection, which is unique per collection and consists of `Credit Class` denom and a chosen suffix, e.g. `EMP/123`. Denom is also used as a store key.
- `Active amount` - amount of credits that are active for a given collection (weren't retired).
- `Retired amount` - amount of credits that have been retired for a given collection.
- `Credit data` - URLs and proofs to all the data relevant to a given Credit Collection.
## Credit Balance

Credit Balance stores a balance of credits of a given denom and for a given owner address. Store uses compound key, which is constructed from owner address and credit denom. The value of Credit Balance contains the amount of active and retired credits of a given denom and for a given owner address.

## Credit Class

## ID Counters

## Project