import gql from "graphql-tag";

export const GET_MARKETPLACE_LISTING = gql`
  query GetMarketplaceListing($id: String!) {
    marketplaceListings(filter: { id: { equalTo: $id } }) {
      totalCount
      nodes {
        id
        amount
        initialAmount
        denom
        owner
        pricePerCreditAmount
        pricePerCreditDenom
        creditCollection {
          activeAmount
          retiredAmount
          creditType
          creditData {
            nodes {
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
                  magnitude
                  registrationDate
                  amount
                  country
                  latitude
                  longitude
                  material {
                    nodes {
                      key
                      value
                    }
                  }
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
  }
`;
