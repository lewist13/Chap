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
      // Channel.belongsToMany(models.User, {
      //   as: "d",
      //   through: models.UserMessagesPub,
      //   foreignKey: "user_id",
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      // });
      Channel.hasMany(models.UserMessagesPub, { foreignKey: "channel_id" });
      Channel.belongsTo(models.Server, { foreignKey: "server_id" });
    }
  }
  Channel.init(
    {
      channel: DataTypes.STRING,
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
      modelName: "Channel",
      tableName: "channels",
    }
  );
  return Channel;
};
