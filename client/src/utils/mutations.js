import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $username: String, $email: String) {
    login(password: $password, username: $username, email: $email) {
      token
      user {
        password
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: ID!
    $description: String!
    $title: String!
    $authors: [String]!
    $image: String!
    $link: String!
  ) {
    saveBook(
      bookId: $bookId
      description: $description
      title: $title
      authors: $authors
      image: $image
      link: $link
    ) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        description
        title
        authors
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
    }
  }
`;
