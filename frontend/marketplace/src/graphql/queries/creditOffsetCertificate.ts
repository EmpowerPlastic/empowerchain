import gql from "graphql-tag";

export const GET_CREDIT_OFFSET_CERTIFICATE = gql`
  query GetCreditOffsetCertificate($id: String!) {
    creditOffsetCertificates(filter: { id: { equalTo: $id } }) {
      nodes {
        id
        nodeId
        denom
        retiringEntityName
        retiringEntityAdditionalData
        timestamp
        walletId
        amount
      }
    }
  }
`;
