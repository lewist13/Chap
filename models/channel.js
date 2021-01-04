"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  channel.init(
    {
      channel: DataTypes.STRING,
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
      modelName: "Channel",
      tableName: "channels",
    }
  );
  return Channel;
};
