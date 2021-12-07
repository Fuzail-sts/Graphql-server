const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
} = graphql;

const StatusType = new GraphQLObjectType({
  name: "Status",
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    error: { type: GraphQLString },
   
  }),
});

module.exports = StatusType;