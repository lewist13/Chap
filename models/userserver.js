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
      user_id: {
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
          model: "users",
          key: "id",
        },
      },
      server_id: {
        type: DataTypes.INTEGER,
        field: "server_id",
        references: {
          model: "servers",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserServer",
      tableName: "userServers",
    }
  );
  return UserServer;
};
