"use strict";
const { Server, Channel, UserServer } = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const servers = [...Array(5)].map((_, i) => ({
      server: `Server-${i}`,
      owner_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("servers", servers);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("servers", null, {});
  },
};
