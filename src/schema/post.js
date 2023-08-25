const typeDefs = `

  type Post {
    _id: ID!
    title: String!
    content: String!
  }

  type Query {
    getPost(_id: ID!): Post
    getAllPosts: [Post]
  }

  type Mutation {
    createPost(title: String!, content: String!): Post
    updatePost(_id: ID!, title: String!, content: String!): Post
    deletePost(_id: ID!): Boolean
  }
`;

module.exports = typeDefs;
