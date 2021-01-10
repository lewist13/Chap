"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserMessagesPub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserMessagesPub.belongsTo(models.User, { foreignKey: "user_id" });
      UserMessagesPub.belongsTo(models.Channel, { foreignKey: "channel_id" });
    }
  }
  UserMessagesPub.init(
    {
      channel_id: {
        type: DataTypes.INTEGER,
        field: "channel_id",
        references: {
          model: "channel",
          key: "id",
        },
      },
      messageBody: {
        field: "message_body",
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserMessagesPub",
      tableName: "usermessagespubs",
    }
  );
  return UserMessagesPub;
};
