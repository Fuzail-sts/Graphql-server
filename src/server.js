const express = require("express");
const app = express();
const PORT = 4000;
const { graphqlHTTP } = require("express-graphql");
const { GRAPHQL_URL } = require("./constants/url");

const schema = require("./index");
require("./models");
app.use(express.json());

console.log(GRAPHQL_URL);
app.use(
  GRAPHQL_URL,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
