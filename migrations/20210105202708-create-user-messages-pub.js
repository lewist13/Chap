"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("usermessagespubs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      server_id: {
        type: Sequelize.INTEGER,
        field: "server_id",
        references: {
          model: "servers",
          key: "id",
        },
      },
      messageBody: {
        type: Sequelize.TEXT,
        field: "message_body",
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        field: "user_id",
        references: {
          model: "users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("usermessagespubs");
  },
};
