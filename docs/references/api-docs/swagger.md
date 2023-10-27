


# Empowerchain - API docs
A REST interface for state queries
  

## Informations

### Version

1.0.0

## Content negotiation

### URI Schemes
  * http

### Consumes
  * application/json

### Produces
  * application/json

## All endpoints

###  query

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /empowerchain/empowerchain/plasticcredit/applicants/{applicant_id} | [applicant](#applicant) |  |
| GET | /empowerchain/empowerchain/plasticcredit/applicants | [applicants](#applicants) |  |
| GET | /empowerchain/empowerchain/plasticcredit/creditbalances/{owner}/{denom} | [credit balance](#credit-balance) |  |
| GET | /empowerchain/empowerchain/plasticcredit/creditbalances | [credit balances](#credit-balances) |  |
| GET | /empowerchain/empowerchain/plasticcredit/creditcollections/{denom} | [credit collection](#credit-collection) |  |
| GET | /empowerchain/empowerchain/plasticcredit/credit-types/{credit_type_abbreviation} | [credit type](#credit-type) |  |
| GET | /empowerchain/empowerchain/plasticcredit/credit-types | [credit types](#credit-types) |  |
| GET | /empowerchain/empowerchain/plasticcredit/issuers/{issuer_id} | [issuer](#issuer) |  |
| GET | /empowerchain/empowerchain/plasticcredit/issuers | [issuers](#issuers) |  |
| GET | /empowerchain/empowerchain/plasticcredit/params | [plastic credit params](#plastic-credit-params) |  |
| GET | /empowerchain/empowerchain/plasticcredit/projects/{project_id} | [project](#project) |  |
| GET | /empowerchain/empowerchain/plasticcredit/projects | [projects](#projects) |  |
| GET | /empowerchain/empowerchain/proofofexistence/proof/{hash} | [proof](#proof) |  |
  


## Paths

### <span id="applicant"></span> applicant (*Applicant*)

```
GET /empowerchain/empowerchain/plasticcredit/applicants/{applicant_id}
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| applicant_id | `path` | uint64 (formatted string) | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#applicant-200) | OK | A successful response. |  | [schema](#applicant-200-schema) |
| [default](#applicant-default) | | An unexpected error response. |  | [schema](#applicant-default-schema) |

#### Responses


##### <span id="applicant-200"></span> 200 - A successful response.
Status: OK

###### <span id="applicant-200-schema"></span> Schema
   
  

[ApplicantOKBody](#applicant-o-k-body)

##### <span id="applicant-default"></span> Default Response
An unexpected error response.

###### <span id="applicant-default-schema"></span> Schema

  

[ApplicantDefaultBody](#applicant-default-body)

###### Inlined models

**<span id="applicant-default-body"></span> ApplicantDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][ApplicantDefaultBodyDetailsItems0](#applicant-default-body-details-items0)| `[]*ApplicantDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="applicant-default-body-details-items0"></span> ApplicantDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="applicant-o-k-body"></span> ApplicantOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicant | [ApplicantOKBodyApplicant](#applicant-o-k-body-applicant)| `ApplicantOKBodyApplicant` |  | |  |  |



**<span id="applicant-o-k-body-applicant"></span> ApplicantOKBodyApplicant**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="applicants"></span> applicants (*Applicants*)

```
GET /empowerchain/empowerchain/plasticcredit/applicants
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| pagination.count_total | `query` | boolean | `bool` |  |  |  | count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set. |
| pagination.key | `query` | byte (base64 string) | `strfmt.Base64` |  |  |  | key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set. |
| pagination.limit | `query` | uint64 (formatted string) | `string` |  |  |  | limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app. |
| pagination.offset | `query` | uint64 (formatted string) | `string` |  |  |  | offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set. |
| pagination.reverse | `query` | boolean | `bool` |  |  |  | reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43 |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#applicants-200) | OK | A successful response. |  | [schema](#applicants-200-schema) |
| [default](#applicants-default) | | An unexpected error response. |  | [schema](#applicants-default-schema) |

#### Responses


##### <span id="applicants-200"></span> 200 - A successful response.
Status: OK

###### <span id="applicants-200-schema"></span> Schema
   
  

[ApplicantsOKBody](#applicants-o-k-body)

##### <span id="applicants-default"></span> Default Response
An unexpected error response.

###### <span id="applicants-default-schema"></span> Schema

  

[ApplicantsDefaultBody](#applicants-default-body)

###### Inlined models

**<span id="applicants-default-body"></span> ApplicantsDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][ApplicantsDefaultBodyDetailsItems0](#applicants-default-body-details-items0)| `[]*ApplicantsDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="applicants-default-body-details-items0"></span> ApplicantsDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="applicants-o-k-body"></span> ApplicantsOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicants | [][ApplicantsOKBodyApplicantsItems0](#applicants-o-k-body-applicants-items0)| `[]*ApplicantsOKBodyApplicantsItems0` |  | |  |  |
| pagination | [ApplicantsOKBodyPagination](#applicants-o-k-body-pagination)| `ApplicantsOKBodyPagination` |  | |  |  |



**<span id="applicants-o-k-body-applicants-items0"></span> ApplicantsOKBodyApplicantsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



**<span id="applicants-o-k-body-pagination"></span> ApplicantsOKBodyPagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="credit-balance"></span> credit balance (*CreditBalance*)

```
GET /empowerchain/empowerchain/plasticcredit/creditbalances/{owner}/{denom}
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| denom | `path` | string | `string` |  | ✓ |  |  |
| owner | `path` | string | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#credit-balance-200) | OK | A successful response. |  | [schema](#credit-balance-200-schema) |
| [default](#credit-balance-default) | | An unexpected error response. |  | [schema](#credit-balance-default-schema) |

#### Responses


##### <span id="credit-balance-200"></span> 200 - A successful response.
Status: OK

###### <span id="credit-balance-200-schema"></span> Schema
   
  

[CreditBalanceOKBody](#credit-balance-o-k-body)

##### <span id="credit-balance-default"></span> Default Response
An unexpected error response.

###### <span id="credit-balance-default-schema"></span> Schema

  

[CreditBalanceDefaultBody](#credit-balance-default-body)

###### Inlined models

**<span id="credit-balance-default-body"></span> CreditBalanceDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][CreditBalanceDefaultBodyDetailsItems0](#credit-balance-default-body-details-items0)| `[]*CreditBalanceDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="credit-balance-default-body-details-items0"></span> CreditBalanceDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="credit-balance-o-k-body"></span> CreditBalanceOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| balance | [CreditBalanceOKBodyBalance](#credit-balance-o-k-body-balance)| `CreditBalanceOKBodyBalance` |  | |  |  |



**<span id="credit-balance-o-k-body-balance"></span> CreditBalanceOKBodyBalance**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| balance | [CreditBalanceOKBodyBalanceBalance](#credit-balance-o-k-body-balance-balance)| `CreditBalanceOKBodyBalanceBalance` |  | |  |  |
| denom | string| `string` |  | |  |  |
| owner | string| `string` |  | |  |  |



**<span id="credit-balance-o-k-body-balance-balance"></span> CreditBalanceOKBodyBalanceBalance**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



### <span id="credit-balances"></span> credit balances (*CreditBalances*)

```
GET /empowerchain/empowerchain/plasticcredit/creditbalances
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| pagination.count_total | `query` | boolean | `bool` |  |  |  | count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set. |
| pagination.key | `query` | byte (base64 string) | `strfmt.Base64` |  |  |  | key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set. |
| pagination.limit | `query` | uint64 (formatted string) | `string` |  |  |  | limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app. |
| pagination.offset | `query` | uint64 (formatted string) | `string` |  |  |  | offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set. |
| pagination.reverse | `query` | boolean | `bool` |  |  |  | reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43 |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#credit-balances-200) | OK | A successful response. |  | [schema](#credit-balances-200-schema) |
| [default](#credit-balances-default) | | An unexpected error response. |  | [schema](#credit-balances-default-schema) |

#### Responses


##### <span id="credit-balances-200"></span> 200 - A successful response.
Status: OK

###### <span id="credit-balances-200-schema"></span> Schema
   
  

[CreditBalancesOKBody](#credit-balances-o-k-body)

##### <span id="credit-balances-default"></span> Default Response
An unexpected error response.

###### <span id="credit-balances-default-schema"></span> Schema

  

[CreditBalancesDefaultBody](#credit-balances-default-body)

###### Inlined models

**<span id="credit-balances-default-body"></span> CreditBalancesDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][CreditBalancesDefaultBodyDetailsItems0](#credit-balances-default-body-details-items0)| `[]*CreditBalancesDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="credit-balances-default-body-details-items0"></span> CreditBalancesDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="credit-balances-o-k-body"></span> CreditBalancesOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_balances | [][CreditBalancesOKBodyCreditBalancesItems0](#credit-balances-o-k-body-credit-balances-items0)| `[]*CreditBalancesOKBodyCreditBalancesItems0` |  | |  |  |
| pagination | [CreditBalancesOKBodyPagination](#credit-balances-o-k-body-pagination)| `CreditBalancesOKBodyPagination` |  | |  |  |



**<span id="credit-balances-o-k-body-credit-balances-items0"></span> CreditBalancesOKBodyCreditBalancesItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| balance | [CreditBalancesOKBodyCreditBalancesItems0Balance](#credit-balances-o-k-body-credit-balances-items0-balance)| `CreditBalancesOKBodyCreditBalancesItems0Balance` |  | |  |  |
| denom | string| `string` |  | |  |  |
| owner | string| `string` |  | |  |  |



**<span id="credit-balances-o-k-body-credit-balances-items0-balance"></span> CreditBalancesOKBodyCreditBalancesItems0Balance**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



**<span id="credit-balances-o-k-body-pagination"></span> CreditBalancesOKBodyPagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="credit-collection"></span> credit collection (*CreditCollection*)

```
GET /empowerchain/empowerchain/plasticcredit/creditcollections/{denom}
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| denom | `path` | string | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#credit-collection-200) | OK | A successful response. |  | [schema](#credit-collection-200-schema) |
| [default](#credit-collection-default) | | An unexpected error response. |  | [schema](#credit-collection-default-schema) |

#### Responses


##### <span id="credit-collection-200"></span> 200 - A successful response.
Status: OK

###### <span id="credit-collection-200-schema"></span> Schema
   
  

[CreditCollectionOKBody](#credit-collection-o-k-body)

##### <span id="credit-collection-default"></span> Default Response
An unexpected error response.

###### <span id="credit-collection-default-schema"></span> Schema

  

[CreditCollectionDefaultBody](#credit-collection-default-body)

###### Inlined models

**<span id="credit-collection-default-body"></span> CreditCollectionDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][CreditCollectionDefaultBodyDetailsItems0](#credit-collection-default-body-details-items0)| `[]*CreditCollectionDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="credit-collection-default-body-details-items0"></span> CreditCollectionDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="credit-collection-o-k-body"></span> CreditCollectionOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_collection | [CreditCollectionOKBodyCreditCollection](#credit-collection-o-k-body-credit-collection)| `CreditCollectionOKBodyCreditCollection` |  | |  |  |



**<span id="credit-collection-o-k-body-credit-collection"></span> CreditCollectionOKBodyCreditCollection**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| denom | string| `string` |  | |  |  |
| metadata_uris | []string| `[]string` |  | |  |  |
| project_id | uint64 (formatted string)| `string` |  | |  |  |
| total_amount | [CreditCollectionOKBodyCreditCollectionTotalAmount](#credit-collection-o-k-body-credit-collection-total-amount)| `CreditCollectionOKBodyCreditCollectionTotalAmount` |  | |  |  |



**<span id="credit-collection-o-k-body-credit-collection-total-amount"></span> CreditCollectionOKBodyCreditCollectionTotalAmount**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



### <span id="credit-type"></span> credit type (*CreditType*)

```
GET /empowerchain/empowerchain/plasticcredit/credit-types/{credit_type_abbreviation}
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| credit_type_abbreviation | `path` | string | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#credit-type-200) | OK | A successful response. |  | [schema](#credit-type-200-schema) |
| [default](#credit-type-default) | | An unexpected error response. |  | [schema](#credit-type-default-schema) |

#### Responses


##### <span id="credit-type-200"></span> 200 - A successful response.
Status: OK

###### <span id="credit-type-200-schema"></span> Schema
   
  

[CreditTypeOKBody](#credit-type-o-k-body)

##### <span id="credit-type-default"></span> Default Response
An unexpected error response.

###### <span id="credit-type-default-schema"></span> Schema

  

[CreditTypeDefaultBody](#credit-type-default-body)

###### Inlined models

**<span id="credit-type-default-body"></span> CreditTypeDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][CreditTypeDefaultBodyDetailsItems0](#credit-type-default-body-details-items0)| `[]*CreditTypeDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="credit-type-default-body-details-items0"></span> CreditTypeDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="credit-type-o-k-body"></span> CreditTypeOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_type | [CreditTypeOKBodyCreditType](#credit-type-o-k-body-credit-type)| `CreditTypeOKBodyCreditType` |  | |  |  |



**<span id="credit-type-o-k-body-credit-type"></span> CreditTypeOKBodyCreditType**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| abbreviation | string| `string` |  | |  |  |
| issuer_id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="credit-types"></span> credit types (*CreditTypes*)

```
GET /empowerchain/empowerchain/plasticcredit/credit-types
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| pagination.count_total | `query` | boolean | `bool` |  |  |  | count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set. |
| pagination.key | `query` | byte (base64 string) | `strfmt.Base64` |  |  |  | key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set. |
| pagination.limit | `query` | uint64 (formatted string) | `string` |  |  |  | limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app. |
| pagination.offset | `query` | uint64 (formatted string) | `string` |  |  |  | offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set. |
| pagination.reverse | `query` | boolean | `bool` |  |  |  | reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43 |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#credit-types-200) | OK | A successful response. |  | [schema](#credit-types-200-schema) |
| [default](#credit-types-default) | | An unexpected error response. |  | [schema](#credit-types-default-schema) |

#### Responses


##### <span id="credit-types-200"></span> 200 - A successful response.
Status: OK

###### <span id="credit-types-200-schema"></span> Schema
   
  

[CreditTypesOKBody](#credit-types-o-k-body)

##### <span id="credit-types-default"></span> Default Response
An unexpected error response.

###### <span id="credit-types-default-schema"></span> Schema

  

[CreditTypesDefaultBody](#credit-types-default-body)

###### Inlined models

**<span id="credit-types-default-body"></span> CreditTypesDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][CreditTypesDefaultBodyDetailsItems0](#credit-types-default-body-details-items0)| `[]*CreditTypesDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="credit-types-default-body-details-items0"></span> CreditTypesDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="credit-types-o-k-body"></span> CreditTypesOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_types | [][CreditTypesOKBodyCreditTypesItems0](#credit-types-o-k-body-credit-types-items0)| `[]*CreditTypesOKBodyCreditTypesItems0` |  | |  |  |
| pagination | [CreditTypesOKBodyPagination](#credit-types-o-k-body-pagination)| `CreditTypesOKBodyPagination` |  | |  |  |



**<span id="credit-types-o-k-body-credit-types-items0"></span> CreditTypesOKBodyCreditTypesItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| abbreviation | string| `string` |  | |  |  |
| issuer_id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



**<span id="credit-types-o-k-body-pagination"></span> CreditTypesOKBodyPagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="issuer"></span> issuer (*Issuer*)

```
GET /empowerchain/empowerchain/plasticcredit/issuers/{issuer_id}
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| issuer_id | `path` | uint64 (formatted string) | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#issuer-200) | OK | A successful response. |  | [schema](#issuer-200-schema) |
| [default](#issuer-default) | | An unexpected error response. |  | [schema](#issuer-default-schema) |

#### Responses


##### <span id="issuer-200"></span> 200 - A successful response.
Status: OK

###### <span id="issuer-200-schema"></span> Schema
   
  

[IssuerOKBody](#issuer-o-k-body)

##### <span id="issuer-default"></span> Default Response
An unexpected error response.

###### <span id="issuer-default-schema"></span> Schema

  

[IssuerDefaultBody](#issuer-default-body)

###### Inlined models

**<span id="issuer-default-body"></span> IssuerDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][IssuerDefaultBodyDetailsItems0](#issuer-default-body-details-items0)| `[]*IssuerDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="issuer-default-body-details-items0"></span> IssuerDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="issuer-o-k-body"></span> IssuerOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| issuer | [IssuerOKBodyIssuer](#issuer-o-k-body-issuer)| `IssuerOKBodyIssuer` |  | |  |  |



**<span id="issuer-o-k-body-issuer"></span> IssuerOKBodyIssuer**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="issuers"></span> issuers (*Issuers*)

```
GET /empowerchain/empowerchain/plasticcredit/issuers
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| pagination.count_total | `query` | boolean | `bool` |  |  |  | count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set. |
| pagination.key | `query` | byte (base64 string) | `strfmt.Base64` |  |  |  | key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set. |
| pagination.limit | `query` | uint64 (formatted string) | `string` |  |  |  | limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app. |
| pagination.offset | `query` | uint64 (formatted string) | `string` |  |  |  | offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set. |
| pagination.reverse | `query` | boolean | `bool` |  |  |  | reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43 |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#issuers-200) | OK | A successful response. |  | [schema](#issuers-200-schema) |
| [default](#issuers-default) | | An unexpected error response. |  | [schema](#issuers-default-schema) |

#### Responses


##### <span id="issuers-200"></span> 200 - A successful response.
Status: OK

###### <span id="issuers-200-schema"></span> Schema
   
  

[IssuersOKBody](#issuers-o-k-body)

##### <span id="issuers-default"></span> Default Response
An unexpected error response.

###### <span id="issuers-default-schema"></span> Schema

  

[IssuersDefaultBody](#issuers-default-body)

###### Inlined models

**<span id="issuers-default-body"></span> IssuersDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][IssuersDefaultBodyDetailsItems0](#issuers-default-body-details-items0)| `[]*IssuersDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="issuers-default-body-details-items0"></span> IssuersDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="issuers-o-k-body"></span> IssuersOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| issuers | [][IssuersOKBodyIssuersItems0](#issuers-o-k-body-issuers-items0)| `[]*IssuersOKBodyIssuersItems0` |  | |  |  |
| pagination | [IssuersOKBodyPagination](#issuers-o-k-body-pagination)| `IssuersOKBodyPagination` |  | |  |  |



**<span id="issuers-o-k-body-issuers-items0"></span> IssuersOKBodyIssuersItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



**<span id="issuers-o-k-body-pagination"></span> IssuersOKBodyPagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="plastic-credit-params"></span> plastic credit params (*PlasticCreditParams*)

```
GET /empowerchain/empowerchain/plasticcredit/params
```

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#plastic-credit-params-200) | OK | A successful response. |  | [schema](#plastic-credit-params-200-schema) |
| [default](#plastic-credit-params-default) | | An unexpected error response. |  | [schema](#plastic-credit-params-default-schema) |

#### Responses


##### <span id="plastic-credit-params-200"></span> 200 - A successful response.
Status: OK

###### <span id="plastic-credit-params-200-schema"></span> Schema
   
  

[PlasticCreditParamsOKBody](#plastic-credit-params-o-k-body)

##### <span id="plastic-credit-params-default"></span> Default Response
An unexpected error response.

###### <span id="plastic-credit-params-default-schema"></span> Schema

  

[PlasticCreditParamsDefaultBody](#plastic-credit-params-default-body)

###### Inlined models

**<span id="plastic-credit-params-default-body"></span> PlasticCreditParamsDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][PlasticCreditParamsDefaultBodyDetailsItems0](#plastic-credit-params-default-body-details-items0)| `[]*PlasticCreditParamsDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="plastic-credit-params-default-body-details-items0"></span> PlasticCreditParamsDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="plastic-credit-params-o-k-body"></span> PlasticCreditParamsOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| params | [PlasticCreditParamsOKBodyParams](#plastic-credit-params-o-k-body-params)| `PlasticCreditParamsOKBodyParams` |  | |  |  |



**<span id="plastic-credit-params-o-k-body-params"></span> PlasticCreditParamsOKBodyParams**


> Params defines the parameters for the module.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_type_creation_fee | [PlasticCreditParamsOKBodyParamsCreditTypeCreationFee](#plastic-credit-params-o-k-body-params-credit-type-creation-fee)| `PlasticCreditParamsOKBodyParamsCreditTypeCreationFee` |  | |  |  |
| issuer_creator | string| `string` |  | |  |  |



**<span id="plastic-credit-params-o-k-body-params-credit-type-creation-fee"></span> PlasticCreditParamsOKBodyParamsCreditTypeCreationFee**


> Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| amount | string| `string` |  | |  |  |
| denom | string| `string` |  | |  |  |



### <span id="project"></span> project (*Project*)

```
GET /empowerchain/empowerchain/plasticcredit/projects/{project_id}
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| project_id | `path` | uint64 (formatted string) | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#project-200) | OK | A successful response. |  | [schema](#project-200-schema) |
| [default](#project-default) | | An unexpected error response. |  | [schema](#project-default-schema) |

#### Responses


##### <span id="project-200"></span> 200 - A successful response.
Status: OK

###### <span id="project-200-schema"></span> Schema
   
  

[ProjectOKBody](#project-o-k-body)

##### <span id="project-default"></span> Default Response
An unexpected error response.

###### <span id="project-default-schema"></span> Schema

  

[ProjectDefaultBody](#project-default-body)

###### Inlined models

**<span id="project-default-body"></span> ProjectDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][ProjectDefaultBodyDetailsItems0](#project-default-body-details-items0)| `[]*ProjectDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="project-default-body-details-items0"></span> ProjectDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="project-o-k-body"></span> ProjectOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| project | [ProjectOKBodyProject](#project-o-k-body-project)| `ProjectOKBodyProject` |  | |  |  |



**<span id="project-o-k-body-project"></span> ProjectOKBodyProject**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicant_id | uint64 (formatted string)| `string` |  | |  |  |
| credit_type_abbreviation | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| status | string| `string` |  | `"NEW"`|  |  |



### <span id="projects"></span> projects (*Projects*)

```
GET /empowerchain/empowerchain/plasticcredit/projects
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| pagination.count_total | `query` | boolean | `bool` |  |  |  | count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set. |
| pagination.key | `query` | byte (base64 string) | `strfmt.Base64` |  |  |  | key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set. |
| pagination.limit | `query` | uint64 (formatted string) | `string` |  |  |  | limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app. |
| pagination.offset | `query` | uint64 (formatted string) | `string` |  |  |  | offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set. |
| pagination.reverse | `query` | boolean | `bool` |  |  |  | reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43 |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#projects-200) | OK | A successful response. |  | [schema](#projects-200-schema) |
| [default](#projects-default) | | An unexpected error response. |  | [schema](#projects-default-schema) |

#### Responses


##### <span id="projects-200"></span> 200 - A successful response.
Status: OK

###### <span id="projects-200-schema"></span> Schema
   
  

[ProjectsOKBody](#projects-o-k-body)

##### <span id="projects-default"></span> Default Response
An unexpected error response.

###### <span id="projects-default-schema"></span> Schema

  

[ProjectsDefaultBody](#projects-default-body)

###### Inlined models

**<span id="projects-default-body"></span> ProjectsDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][ProjectsDefaultBodyDetailsItems0](#projects-default-body-details-items0)| `[]*ProjectsDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="projects-default-body-details-items0"></span> ProjectsDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="projects-o-k-body"></span> ProjectsOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| pagination | [ProjectsOKBodyPagination](#projects-o-k-body-pagination)| `ProjectsOKBodyPagination` |  | |  |  |
| projects | [][ProjectsOKBodyProjectsItems0](#projects-o-k-body-projects-items0)| `[]*ProjectsOKBodyProjectsItems0` |  | |  |  |



**<span id="projects-o-k-body-pagination"></span> ProjectsOKBodyPagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



**<span id="projects-o-k-body-projects-items0"></span> ProjectsOKBodyProjectsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicant_id | uint64 (formatted string)| `string` |  | |  |  |
| credit_type_abbreviation | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| status | string| `string` |  | `"NEW"`|  |  |



### <span id="proof"></span> proof (*Proof*)

```
GET /empowerchain/empowerchain/proofofexistence/proof/{hash}
```

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| hash | `path` | string | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#proof-200) | OK | A successful response. |  | [schema](#proof-200-schema) |
| [default](#proof-default) | | An unexpected error response. |  | [schema](#proof-default-schema) |

#### Responses


##### <span id="proof-200"></span> 200 - A successful response.
Status: OK

###### <span id="proof-200-schema"></span> Schema
   
  

[ProofOKBody](#proof-o-k-body)

##### <span id="proof-default"></span> Default Response
An unexpected error response.

###### <span id="proof-default-schema"></span> Schema

  

[ProofDefaultBody](#proof-default-body)

###### Inlined models

**<span id="proof-default-body"></span> ProofDefaultBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][ProofDefaultBodyDetailsItems0](#proof-default-body-details-items0)| `[]*ProofDefaultBodyDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



**<span id="proof-default-body-details-items0"></span> ProofDefaultBodyDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



**<span id="proof-o-k-body"></span> ProofOKBody**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| metadata | [ProofOKBodyMetadata](#proof-o-k-body-metadata)| `ProofOKBodyMetadata` |  | |  |  |



**<span id="proof-o-k-body-metadata"></span> ProofOKBodyMetadata**


> ProofMetadata is the metadata attached to a specific data proof
Because the proof itself is also the key, the data structure is hash -> ProofMetadata
The hash is the SHA-256 hash of the data of which is being made a proof for.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| creator | string| `string` |  | |  |  |
| timestamp | date-time (formatted string)| `strfmt.DateTime` |  | |  |  |



## Models

### <span id="cosmos-base-query-v1beta1-page-request"></span> cosmos.base.query.v1beta1.PageRequest


> message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| count_total | boolean| `bool` |  | | count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set. |  |
| key | byte (base64 string)| `strfmt.Base64` |  | | key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set. |  |
| limit | uint64 (formatted string)| `string` |  | | limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app. |  |
| offset | uint64 (formatted string)| `string` |  | | offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set. |  |
| reverse | boolean| `bool` |  | | reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43 |  |



### <span id="cosmos-base-query-v1beta1-page-response"></span> cosmos.base.query.v1beta1.PageResponse


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="cosmos-base-v1beta1-coin"></span> cosmos.base.v1beta1.Coin


> Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| amount | string| `string` |  | |  |  |
| denom | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-applicant"></span> empowerchain.plasticcredit.Applicant


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-credit-amount"></span> empowerchain.plasticcredit.CreditAmount


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-credit-balance"></span> empowerchain.plasticcredit.CreditBalance


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| balance | [EmpowerchainPlasticcreditCreditBalanceBalance](#empowerchain-plasticcredit-credit-balance-balance)| `EmpowerchainPlasticcreditCreditBalanceBalance` |  | |  |  |
| denom | string| `string` |  | |  |  |
| owner | string| `string` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-credit-balance-balance"></span> EmpowerchainPlasticcreditCreditBalanceBalance**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-credit-collection"></span> empowerchain.plasticcredit.CreditCollection


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| denom | string| `string` |  | |  |  |
| metadata_uris | []string| `[]string` |  | |  |  |
| project_id | uint64 (formatted string)| `string` |  | |  |  |
| total_amount | [EmpowerchainPlasticcreditCreditCollectionTotalAmount](#empowerchain-plasticcredit-credit-collection-total-amount)| `EmpowerchainPlasticcreditCreditCollectionTotalAmount` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-credit-collection-total-amount"></span> EmpowerchainPlasticcreditCreditCollectionTotalAmount**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-credit-type"></span> empowerchain.plasticcredit.CreditType


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| abbreviation | string| `string` |  | |  |  |
| issuer_id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-issuer"></span> empowerchain.plasticcredit.Issuer


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-params"></span> empowerchain.plasticcredit.Params


> Params defines the parameters for the module.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_type_creation_fee | [EmpowerchainPlasticcreditParamsCreditTypeCreationFee](#empowerchain-plasticcredit-params-credit-type-creation-fee)| `EmpowerchainPlasticcreditParamsCreditTypeCreationFee` |  | |  |  |
| issuer_creator | string| `string` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-params-credit-type-creation-fee"></span> EmpowerchainPlasticcreditParamsCreditTypeCreationFee**


> Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| amount | string| `string` |  | |  |  |
| denom | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-project"></span> empowerchain.plasticcredit.Project


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicant_id | uint64 (formatted string)| `string` |  | |  |  |
| credit_type_abbreviation | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| status | string| `string` |  | `"NEW"`|  |  |



### <span id="empowerchain-plasticcredit-project-status"></span> empowerchain.plasticcredit.ProjectStatus


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| empowerchain.plasticcredit.ProjectStatus | string| string | `"NEW"`|  |  |



### <span id="empowerchain-plasticcredit-query-applicant-response"></span> empowerchain.plasticcredit.QueryApplicantResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicant | [EmpowerchainPlasticcreditQueryApplicantResponseApplicant](#empowerchain-plasticcredit-query-applicant-response-applicant)| `EmpowerchainPlasticcreditQueryApplicantResponseApplicant` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-applicant-response-applicant"></span> EmpowerchainPlasticcreditQueryApplicantResponseApplicant**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-applicants-response"></span> empowerchain.plasticcredit.QueryApplicantsResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicants | [][EmpowerchainPlasticcreditQueryApplicantsResponseApplicantsItems0](#empowerchain-plasticcredit-query-applicants-response-applicants-items0)| `[]*EmpowerchainPlasticcreditQueryApplicantsResponseApplicantsItems0` |  | |  |  |
| pagination | [EmpowerchainPlasticcreditQueryApplicantsResponsePagination](#empowerchain-plasticcredit-query-applicants-response-pagination)| `EmpowerchainPlasticcreditQueryApplicantsResponsePagination` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-applicants-response-applicants-items0"></span> EmpowerchainPlasticcreditQueryApplicantsResponseApplicantsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-applicants-response-pagination"></span> EmpowerchainPlasticcreditQueryApplicantsResponsePagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-credit-balance-response"></span> empowerchain.plasticcredit.QueryCreditBalanceResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| balance | [EmpowerchainPlasticcreditQueryCreditBalanceResponseBalance](#empowerchain-plasticcredit-query-credit-balance-response-balance)| `EmpowerchainPlasticcreditQueryCreditBalanceResponseBalance` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-credit-balance-response-balance"></span> EmpowerchainPlasticcreditQueryCreditBalanceResponseBalance**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| balance | [EmpowerchainPlasticcreditQueryCreditBalanceResponseBalanceBalance](#empowerchain-plasticcredit-query-credit-balance-response-balance-balance)| `EmpowerchainPlasticcreditQueryCreditBalanceResponseBalanceBalance` |  | |  |  |
| denom | string| `string` |  | |  |  |
| owner | string| `string` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-credit-balance-response-balance-balance"></span> EmpowerchainPlasticcreditQueryCreditBalanceResponseBalanceBalance**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-credit-balances-response"></span> empowerchain.plasticcredit.QueryCreditBalancesResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_balances | [][EmpowerchainPlasticcreditQueryCreditBalancesResponseCreditBalancesItems0](#empowerchain-plasticcredit-query-credit-balances-response-credit-balances-items0)| `[]*EmpowerchainPlasticcreditQueryCreditBalancesResponseCreditBalancesItems0` |  | |  |  |
| pagination | [EmpowerchainPlasticcreditQueryCreditBalancesResponsePagination](#empowerchain-plasticcredit-query-credit-balances-response-pagination)| `EmpowerchainPlasticcreditQueryCreditBalancesResponsePagination` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-credit-balances-response-credit-balances-items0"></span> EmpowerchainPlasticcreditQueryCreditBalancesResponseCreditBalancesItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| balance | [EmpowerchainPlasticcreditQueryCreditBalancesResponseCreditBalancesItems0Balance](#empowerchain-plasticcredit-query-credit-balances-response-credit-balances-items0-balance)| `EmpowerchainPlasticcreditQueryCreditBalancesResponseCreditBalancesItems0Balance` |  | |  |  |
| denom | string| `string` |  | |  |  |
| owner | string| `string` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-credit-balances-response-credit-balances-items0-balance"></span> EmpowerchainPlasticcreditQueryCreditBalancesResponseCreditBalancesItems0Balance**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-credit-balances-response-pagination"></span> EmpowerchainPlasticcreditQueryCreditBalancesResponsePagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-credit-collection-response"></span> empowerchain.plasticcredit.QueryCreditCollectionResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_collection | [EmpowerchainPlasticcreditQueryCreditCollectionResponseCreditCollection](#empowerchain-plasticcredit-query-credit-collection-response-credit-collection)| `EmpowerchainPlasticcreditQueryCreditCollectionResponseCreditCollection` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-credit-collection-response-credit-collection"></span> EmpowerchainPlasticcreditQueryCreditCollectionResponseCreditCollection**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| denom | string| `string` |  | |  |  |
| metadata_uris | []string| `[]string` |  | |  |  |
| project_id | uint64 (formatted string)| `string` |  | |  |  |
| total_amount | [EmpowerchainPlasticcreditQueryCreditCollectionResponseCreditCollectionTotalAmount](#empowerchain-plasticcredit-query-credit-collection-response-credit-collection-total-amount)| `EmpowerchainPlasticcreditQueryCreditCollectionResponseCreditCollectionTotalAmount` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-credit-collection-response-credit-collection-total-amount"></span> EmpowerchainPlasticcreditQueryCreditCollectionResponseCreditCollectionTotalAmount**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| active | uint64 (formatted string)| `string` |  | |  |  |
| retired | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-credit-type-response"></span> empowerchain.plasticcredit.QueryCreditTypeResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_type | [EmpowerchainPlasticcreditQueryCreditTypeResponseCreditType](#empowerchain-plasticcredit-query-credit-type-response-credit-type)| `EmpowerchainPlasticcreditQueryCreditTypeResponseCreditType` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-credit-type-response-credit-type"></span> EmpowerchainPlasticcreditQueryCreditTypeResponseCreditType**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| abbreviation | string| `string` |  | |  |  |
| issuer_id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-credit-types-response"></span> empowerchain.plasticcredit.QueryCreditTypesResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_types | [][EmpowerchainPlasticcreditQueryCreditTypesResponseCreditTypesItems0](#empowerchain-plasticcredit-query-credit-types-response-credit-types-items0)| `[]*EmpowerchainPlasticcreditQueryCreditTypesResponseCreditTypesItems0` |  | |  |  |
| pagination | [EmpowerchainPlasticcreditQueryCreditTypesResponsePagination](#empowerchain-plasticcredit-query-credit-types-response-pagination)| `EmpowerchainPlasticcreditQueryCreditTypesResponsePagination` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-credit-types-response-credit-types-items0"></span> EmpowerchainPlasticcreditQueryCreditTypesResponseCreditTypesItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| abbreviation | string| `string` |  | |  |  |
| issuer_id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-credit-types-response-pagination"></span> EmpowerchainPlasticcreditQueryCreditTypesResponsePagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-issuer-response"></span> empowerchain.plasticcredit.QueryIssuerResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| issuer | [EmpowerchainPlasticcreditQueryIssuerResponseIssuer](#empowerchain-plasticcredit-query-issuer-response-issuer)| `EmpowerchainPlasticcreditQueryIssuerResponseIssuer` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-issuer-response-issuer"></span> EmpowerchainPlasticcreditQueryIssuerResponseIssuer**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-issuers-response"></span> empowerchain.plasticcredit.QueryIssuersResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| issuers | [][EmpowerchainPlasticcreditQueryIssuersResponseIssuersItems0](#empowerchain-plasticcredit-query-issuers-response-issuers-items0)| `[]*EmpowerchainPlasticcreditQueryIssuersResponseIssuersItems0` |  | |  |  |
| pagination | [EmpowerchainPlasticcreditQueryIssuersResponsePagination](#empowerchain-plasticcredit-query-issuers-response-pagination)| `EmpowerchainPlasticcreditQueryIssuersResponsePagination` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-issuers-response-issuers-items0"></span> EmpowerchainPlasticcreditQueryIssuersResponseIssuersItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| admin | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-issuers-response-pagination"></span> EmpowerchainPlasticcreditQueryIssuersResponsePagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-params-response"></span> empowerchain.plasticcredit.QueryParamsResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| params | [EmpowerchainPlasticcreditQueryParamsResponseParams](#empowerchain-plasticcredit-query-params-response-params)| `EmpowerchainPlasticcreditQueryParamsResponseParams` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-params-response-params"></span> EmpowerchainPlasticcreditQueryParamsResponseParams**


> Params defines the parameters for the module.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| credit_type_creation_fee | [EmpowerchainPlasticcreditQueryParamsResponseParamsCreditTypeCreationFee](#empowerchain-plasticcredit-query-params-response-params-credit-type-creation-fee)| `EmpowerchainPlasticcreditQueryParamsResponseParamsCreditTypeCreationFee` |  | |  |  |
| issuer_creator | string| `string` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-params-response-params-credit-type-creation-fee"></span> EmpowerchainPlasticcreditQueryParamsResponseParamsCreditTypeCreationFee**


> Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| amount | string| `string` |  | |  |  |
| denom | string| `string` |  | |  |  |



### <span id="empowerchain-plasticcredit-query-project-response"></span> empowerchain.plasticcredit.QueryProjectResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| project | [EmpowerchainPlasticcreditQueryProjectResponseProject](#empowerchain-plasticcredit-query-project-response-project)| `EmpowerchainPlasticcreditQueryProjectResponseProject` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-project-response-project"></span> EmpowerchainPlasticcreditQueryProjectResponseProject**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicant_id | uint64 (formatted string)| `string` |  | |  |  |
| credit_type_abbreviation | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| status | string| `string` |  | `"NEW"`|  |  |



### <span id="empowerchain-plasticcredit-query-projects-response"></span> empowerchain.plasticcredit.QueryProjectsResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| pagination | [EmpowerchainPlasticcreditQueryProjectsResponsePagination](#empowerchain-plasticcredit-query-projects-response-pagination)| `EmpowerchainPlasticcreditQueryProjectsResponsePagination` |  | |  |  |
| projects | [][EmpowerchainPlasticcreditQueryProjectsResponseProjectsItems0](#empowerchain-plasticcredit-query-projects-response-projects-items0)| `[]*EmpowerchainPlasticcreditQueryProjectsResponseProjectsItems0` |  | |  |  |



#### Inlined models

**<span id="empowerchain-plasticcredit-query-projects-response-pagination"></span> EmpowerchainPlasticcreditQueryProjectsResponsePagination**


> PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| next_key | byte (base64 string)| `strfmt.Base64` |  | | next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results. |  |
| total | uint64 (formatted string)| `string` |  | |  |  |



**<span id="empowerchain-plasticcredit-query-projects-response-projects-items0"></span> EmpowerchainPlasticcreditQueryProjectsResponseProjectsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| applicant_id | uint64 (formatted string)| `string` |  | |  |  |
| credit_type_abbreviation | string| `string` |  | |  |  |
| id | uint64 (formatted string)| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| status | string| `string` |  | `"NEW"`|  |  |



### <span id="empowerchain-proofofexistence-proof-metadata"></span> empowerchain.proofofexistence.ProofMetadata


> ProofMetadata is the metadata attached to a specific data proof
Because the proof itself is also the key, the data structure is hash -> ProofMetadata
The hash is the SHA-256 hash of the data of which is being made a proof for.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| creator | string| `string` |  | |  |  |
| timestamp | date-time (formatted string)| `strfmt.DateTime` |  | |  |  |



### <span id="empowerchain-proofofexistence-query-proof-response"></span> empowerchain.proofofexistence.QueryProofResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| metadata | [EmpowerchainProofofexistenceQueryProofResponseMetadata](#empowerchain-proofofexistence-query-proof-response-metadata)| `EmpowerchainProofofexistenceQueryProofResponseMetadata` |  | |  |  |



#### Inlined models

**<span id="empowerchain-proofofexistence-query-proof-response-metadata"></span> EmpowerchainProofofexistenceQueryProofResponseMetadata**


> ProofMetadata is the metadata attached to a specific data proof
Because the proof itself is also the key, the data structure is hash -> ProofMetadata
The hash is the SHA-256 hash of the data of which is being made a proof for.
  





**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| creator | string| `string` |  | |  |  |
| timestamp | date-time (formatted string)| `strfmt.DateTime` |  | |  |  |



### <span id="google-protobuf-any"></span> google.protobuf.Any


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |



### <span id="grpc-gateway-runtime-error"></span> grpc.gateway.runtime.Error


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| code | int32 (formatted integer)| `int32` |  | |  |  |
| details | [][GrpcGatewayRuntimeErrorDetailsItems0](#grpc-gateway-runtime-error-details-items0)| `[]*GrpcGatewayRuntimeErrorDetailsItems0` |  | |  |  |
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



#### Inlined models

**<span id="grpc-gateway-runtime-error-details-items0"></span> GrpcGatewayRuntimeErrorDetailsItems0**


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| type_url | string| `string` |  | |  |  |
| value | byte (base64 string)| `strfmt.Base64` |  | |  |  |


