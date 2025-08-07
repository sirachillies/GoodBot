// models/buttonRoleConfig.js
module.exports = (client, Sequelize) => {
  return client.sequelize.define('ButtonRoleConfig', {
    buttonId: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    roleId: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
};
