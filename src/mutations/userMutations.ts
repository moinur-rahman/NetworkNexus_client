import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($email: String!, $name: String!, $password: String!) {
    createUser(email: $email, name: $name, password: $password) {
      email
      name
      password
    }
  }
`;

export { CREATE_USER };
