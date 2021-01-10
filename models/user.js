"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Server, {
        as: "servers",
        through: models.UserServer,
        foreignKey: "user_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      User.hasMany(models.UserMessagesPub, { foreignKey: "user_id" });
      // User.belongsToMany(models.Channel, {
      //   as: "c",
      //   through: models.UserMessagesPub,
      //   foreignKey: "",
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      // });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      passwordDigest: {
        type: DataTypes.STRING,
        field: "password_digest",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
