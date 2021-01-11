const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        savedBooks: [Book]
        bookCount: Int
    }
    type Book {
        _id: ID!
        authors: [String]!
        description: String
        bookId: String!
        image: String
        link: String
        title: String!
    }
    type Auth {
        token: ID!
        user: User
    }
    type bookInput {
        _id: ID!
        authors: [String]!
        description: String
        title: String!
        bookId: String!
        image: String
        link: String
    }
    type Query {
        users: [User]
        me(username: String!):User 
    }

    type Mutation {
        removeBook(bookId: String!): User
        saveBook(input: bookInput) : User
        createUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!) : Auth
    }
`;

module.exports = typeDefs;