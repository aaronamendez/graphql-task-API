import graphql, {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} from 'graphql'

const UserType = require('./TypeDefs/UserType')

const data: object[] = []

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      description: 'Get All Users',
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return data
      },
    },
    getUser: {
      type: UserType,
      description: 'Get A Single User',
      args: { id: { type: GraphQLInt } },
      resolve: (parent, args) => {
        return data[args.id]
      },
    },
  },
})

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, args) {
        const obj = {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
        }
        data.push(obj)
        return args
      },
    },
  },
})

export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})
