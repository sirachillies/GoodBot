// models/buttonRoleConfig.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ButtonRoleConfig', {
    buttonId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    roleId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
