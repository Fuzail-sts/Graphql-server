module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("employee", {
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    sex: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    branch_id: DataTypes.INTEGER
  });
  return Employee;
};
