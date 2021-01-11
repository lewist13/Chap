"use strict";
const { Server } = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const servers = await Server.findAll({ raw: true });

    const userServers = servers.map(({ id }) => ({
      user_id: 1,
      server_id: id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return await queryInterface.bulkInsert("userServers", userServers);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("userServers", null, {});
  },
};
