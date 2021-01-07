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
      Server.belongsToMany(models.User, {
        as: "b",
        through: models.UserServer,
        foreignKey: "owner_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });

      Server.hasMany(models.Channels, {
        foreignKey: "channel_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Server.init(
    {
      server: DataTypes.STRING,
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
