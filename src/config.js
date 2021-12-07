const Sequelize = require("sequelize");
const sequelize = new Sequelize("employee_database", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error");
  });

module.exports = sequelize;
