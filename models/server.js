"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  server.init(
    {
      server_name: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
          model: "user",
          key: "id",
        },
      },
      ownerId: {
        type: DataTypes.INTEGER,
        field: "owner_id",
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Server",
      tableName: "servers",
    }
  );
  return Server;
};
