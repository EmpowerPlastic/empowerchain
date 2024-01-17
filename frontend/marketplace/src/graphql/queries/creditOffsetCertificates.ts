import gql from "graphql-tag";

export const GET_CREDIT_OFFSET_CERTIFICATES = gql`
  query GetCreditOffsetCertificates(
    $walletAddress: String!
    $first: Int!
    $offset: Int!
  ) {
    creditOffsetCertificates(
      first: $first
      offset: $offset
      filter: { wallet: { address: { equalTo: $walletAddress } } }
    ) {
      totalCount
      nodes {
        amount
        denom
        id
      }
    }
  }
`;
