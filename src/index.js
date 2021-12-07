const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema } = graphql;
const { ROOT_QUERY_TYPE, MUTATION } = require("./constants/constant");
const { Employee_LIST,Employee_DETAILS,Branch_LIST } = require("./schema/Query.graphql");
const { Employee_ADD,Employee_UPDATE,Employee_DELETE } = require("./schema/Mutation.graphql");


const RootQuery = new GraphQLObjectType({
  name: ROOT_QUERY_TYPE,
  fields: {
    employeeList: Employee_LIST,
    branchList: Branch_LIST,
    employeeDetail:Employee_DETAILS
  },
});

const Mutation = new GraphQLObjectType({
    name: MUTATION,
    fields: {
     createEmployee:Employee_ADD,
     updateEmployee:Employee_UPDATE,
     deleteEmployee:Employee_DELETE
    },
  });


console.log(ROOT_QUERY_TYPE, RootQuery);
module.exports = new GraphQLSchema({ query: RootQuery,mutation:Mutation });
