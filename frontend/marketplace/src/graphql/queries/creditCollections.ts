import gql from "graphql-tag";

export const GET_CREDIT_COLLECTIONS = gql`
  query GetCreditCollections($denoms: [String!]!) {
    creditCollections(filter: { denom: { in: $denoms } }) {
      totalCount
      nodes {
        projectId
        id
        denom
        creditType
        activeAmount
        retiredAmount
        issuanceDate
        retiredCreditsEvents {
          nodes {
            amount
            id
            owner
            creditCollectionId
          }
        }
        creditData {
          nodes {
            id
            mediaFiles {
              nodes {
                name
                url
              }
            }
            binaryFiles {
              nodes {
                name
                url
              }
            }
            eventData {
              nodes {
                material {
                  nodes {
                    value
                    key
                  }
                }
                latitude
                longitude
                amount
                magnitude
                country
                registrationDate
              }
            }
            applicantDataByCreditDataId {
              nodes {
                name
                description
              }
            }
          }
        }
      }
    }
  }
`;
