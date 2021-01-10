const { Channel } = require("../models/channel");
const { Op, literal, fn, col } = require("sequelize");

const GetChannels = async (req, res) => {
  try {
    let id = parseInt(req.params.channel_id);
    let channel = await Channel.findAll({ where: { channel_id: id } });
    // hit endpoint for messages when channel is selected
    res.send(channel);
  } catch (error) {
    throw error;
  }
};

const CreateChannel = async (req, res) => {
  try {
    const channel = await Channel.create(req.body);
    res.send(channel);
  } catch (error) {
    throw error;
  }
};

const UpdateChannel = async (req, res) => {
  try {
    let channelId = parseInt(req.params.channel_id);
    let updatedChannel = await Channel.update(req.body, {
      where: {
        id: channelId,
      },
      returning: true,
    });
    res.send(updatedChannel);
  } catch (error) {
    throw error;
  }
};

const DeleteChannel = async (req, res) => {
  try {
    await Channel.destroy({
      where: {
        id: req.params.channel_id,
      },
    });
    res.send({
      message: `Channel with id of ${req.params.channel_id} deleted`,
      data: {
        id: req.params.channel_id,
      },
    });
  } catch (error) {
    console.log("ID", channel_id);
    throw error;
  }
};

module.exports = {
  DeleteChannel,
  UpdateChannel,
  GetChannels,
  CreateChannel,
};
