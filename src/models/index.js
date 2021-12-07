const sequelize = require("../config");
const { Sequelize, DataTypes } = require('sequelize');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync");
});

db.employee = require("./Employee")(sequelize, DataTypes);
console.log('aaaaaaaaaaaaaa', db.employee);
db.branch = require("./Branch")(sequelize, DataTypes);
console.log('aaaaaaaaaaaaaa', db.branch);
module.exports = db;
