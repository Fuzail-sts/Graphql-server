var db = require("../models");
const Employee = db.employee;
const resolve = (parent, args) => {
  Employee.create({
    emp_id: args.emp_id,
    first_name: args.first_name,
    last_name: args.last_name,
    sex: args.sex,
    salary: args.salary,
    branch_id: args.branch_id,
  });
  console.log(args);
  return args;
};
const updates=(parent, args)=>{
  console.log(args,parent)
  Employee.update(
    {
      emp_id: args.emp_id,
      first_name: args.first_name,
      last_name: args.last_name,
      salary: args.salary,
      branch_id: args.branch_id,
    },
    {
      where: {
        emp_id: args.emp_id,
      },
    }
  );
  console.log(args);
  return args;
}
module.exports = { resolve , updates };
