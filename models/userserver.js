"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserServer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserServer.init(
    {
      user_id: DataTypes.INTEGER,
      server_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserServer",
      tableName: "userservers",
    }
  );
  return UserServer;
};
