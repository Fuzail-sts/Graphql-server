var db = require("../models");
const Employee = db.employee;
const resolve = (parent, args) => {
  let data = Employee.findAll({ where: { emp_id: args.emp_id } });
  console.log("data-", data);
  return data;
};

module.exports = { resolve };
