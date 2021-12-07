module.exports = (sequelize, DataTypes) => {
    const Branch = sequelize.define("branch", {
        branch_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      branch_name: DataTypes.STRING,
      mgr_id: DataTypes.INTEGER
          });
    return Branch;
  };
  