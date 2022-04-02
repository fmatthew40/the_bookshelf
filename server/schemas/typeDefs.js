// const { gql } = require('apollo-server-express');


// const typeDefs = gql`
// type Query {
//     me: User
// }
// type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//     saveBook(bookSet: BookSets!): User
//     removeBook(bookId: ID!): User
// }
// input BookSets{
//     authors: [String]
//     description: String
//     title: String
//     bookId: String
//     image: String
//     link: String
// }
// type User {
//     _id: ID!
//     username: String
//     email: String
//     bookCount: Int
//     savedBooks: [Book]
// }
// type Book {
//     bookId: String!
//     authors: [String]
//     description: String
//     title: String
//     image: String
//     link: String
// }
// type Auth {
//     token: ID!
//     user: User
// }
// `;

// module.exports = typeDefs;






// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String 
  }
  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    title: String
    link: String
}
  type Auth {
      token: ID!
      user: User
  }
  
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;