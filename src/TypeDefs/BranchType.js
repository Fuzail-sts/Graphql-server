const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const BranchType = new GraphQLObjectType({
  name: "Branch",
  fields: () => ({
    branch_id: { type: GraphQLInt },
    branch_name: { type: GraphQLString },
    mgr_id: { type: GraphQLInt },
  }),
});

module.exports = BranchType;
