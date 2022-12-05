# Concepts

## Credit

Credit is a digital unit that represents an offset created by removing plastic from the environment. Every Credit is based on a `Credit Class`, which describes the requirements that have to be met to obtain the Credits.

// TODO

Below is a high-level sequence diagram of how the credit flow works:

```mermaid
sequenceDiagram
    participant Governance
    participant Issuer
    participant Applicant
    participant EmpowerChain
    
    Governance->>EmpowerChain: Create Issuer
    Issuer->>EmpowerChain: Create Credit Class
    Applicant->>EmpowerChain: Create Project
    activate EmpowerChain
    EmpowerChain->>Issuer: Apply to
    deactivate EmpowerChain
    activate Issuer
    Issuer->>EmpowerChain: Approve project
    deactivate Issuer
    Applicant->>Issuer: Sends off-chain proof of cleanup
    activate Issuer
    Issuer->>EmpowerChain: Issues Credits
    deactivate Issuer
    EmpowerChain->>EmpowerChain: Create/updates collections and balances
```

Below is an Entity Relationship diagram of the on-chain entities

```mermaid
erDiagram
    ISSUER ||--o{ CREDIT-CLASS: owns
    APPLICANT ||--o{ PROJECT: runs
    PROJECT ||--o{ CREDIT-COLLECTION: "gets issued"
    PROJECT }o--|| CREDIT-CLASS: for
    CREDIT-CLASS ||--o{ CREDIT-COLLECTION: "type of credit for"
    ISSUER ||..o{ CREDIT-COLLECTION: issues
```