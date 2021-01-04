"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admin.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
          model: "user",
          key: "id",
        },
      },
      serverId: {
        type: DataTypes.INTEGER,
        field: "server_id",
        references: {
          model: "server",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "admin",
    }
  );
  return admin;
};
