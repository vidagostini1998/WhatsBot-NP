import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("Users", "isRemoveTags", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "enabled"
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Users", "isRemoveTags");
  }
};
