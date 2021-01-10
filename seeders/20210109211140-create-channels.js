"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const channels = [...Array(20)].map((_, i) => ({
      channel: `Channel-${i}`,
      server_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return await queryInterface.bulkInsert("channels", channels);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("channels");
  },
};
