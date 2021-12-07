const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql;

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    emp_id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    sex: { type: GraphQLString },
    salary: { type: GraphQLInt },
    branch_id: { type: GraphQLInt },
  }),
});

module.exports = EmployeeType;
