"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userPubMessages = [...Array(100)].map((_, i) => ({
      user_id: 5,
      channel_id: 1,
      message_body: `Message-${i + 1}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return await queryInterface.bulkInsert("usermessagespubs", userPubMessages);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("usermessagespubs");
  },
};
