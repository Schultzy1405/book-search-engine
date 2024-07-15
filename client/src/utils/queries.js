import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
`;
