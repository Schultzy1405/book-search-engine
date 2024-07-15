const typeDefs = `
    type Book {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: Book
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me(userId: ID, username: String): User
        user: User
}
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(username: String, email: String, password: String!): Auth
        saveBook(bookId: String!, description: String!, title: String!, authors:[String], image: String, link: String): User
        removeBook(bookId: String!): User
    }
`;
module.exports = typeDefs;
