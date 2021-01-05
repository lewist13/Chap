const { Server } = require("../models");
const { Op, literal, fn, col } = require("sequelize");

const GetServerById = async (req, res) => {
  try {
    let id = parseInt(req.params.server_id);
    let server = await Server.findAll({ where: { server_id: id } });
    res.send(server);
  } catch (error) {
    throw error;
  }
};

const CreateServer = async (req, res) => {
  try {
    const server = await Server.create(req.body);
    res.send(server);
  } catch (error) {
    throw error;
  }
};

const UpdateServer = async (req, res) => {
  try {
    let serverId = parseInt(req.params.server_id);
    let updatedServer = await Server.update(req.body, {
      where: {
        id: serverId,
      },
      returning: true,
    });
    res.send(updatedServer);
  } catch (error) {
    throw error;
  }
};

const DeleteServer = async (req, res) => {
  try {
    await Server.destroy({
      where: {
        id: req.params.server_id,
      },
    });
    res.send({
      message: `Server with id of ${req.params.server_id} deleted`,
      data: {
        id: req.params.server_id,
      },
    });
  } catch (error) {
    console.log("ID", server_id);
    throw error;
  }
};

module.exports = {
  DeleteServer,
  UpdateServer,
  GetServerById,
  CreateServer,
};
