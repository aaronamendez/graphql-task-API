import graphql, { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
})

module.exports = UserType
