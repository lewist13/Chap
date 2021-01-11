const { UserMessagesPub } = require("../models");
const { Op, literal, fn, col } = require("sequelize");

const GetMessages = async (req, res) => {
  try {
    let id = parseInt(req.params.server_id);
    let message = await UserMessagesPub.findAll({ where: { server_id: id } });
    res.send(message);
  } catch (error) {
    throw error;
  }
};

const CreateMessage = async (req, res) => {
  try {
    const message = await UserMessagesPub.create(req.body);
    res.send(message);
  } catch (error) {
    throw error;
  }
};

const UpdateMessage = async (req, res) => {
  try {
    let messageId = parseInt(req.params.message_id);
    let updatedMessage = await UserMessagesPub.update(req.body, {
      where: {
        id: messageId,
      },
      returning: true,
    });
    res.send(updatedMessage);
  } catch (error) {
    throw error;
  }
};

const DeleteMessage = async (req, res) => {
  try {
    await UserMessagesPub.destroy({
      where: {
        id: req.params.message_id,
      },
    });
    res.send({
      message: `Message deleted`,
      data: {
        id: req.params.message_id,
      },
    });
  } catch (error) {
    console.log("MESSAGE ID", message_id);
    throw error;
  }
};

module.exports = {
  DeleteMessage,
  UpdateMessage,
  GetMessages,
  CreateMessage,
};
