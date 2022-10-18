import { gql } from "@apollo/client";

const CHECK_DUPLICATE_EMAIL = gql`
  query checkDuplicateEmail($email: String!) {
    checkDuplicateEmail(email: $email)
  }
`;

export { CHECK_DUPLICATE_EMAIL };
