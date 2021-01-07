const Router = require("express").Router();
const controller = require("../controllers/ChannelController");

Router.get("/:channel_id", controller.GetChannels);
// http://localhost:3001/api/channels/all

// Router.get("/:channel_id", controller.GetChannelById);
// http://localhost:3001/api/channels/1

Router.post("/add", controller.CreateChannel);
// http://localhost:3001/api/channels/add

Router.put("/update/:channel_id", controller.UpdateChannel);
// http://localhost:3001/api/channels/update/1

Router.delete("/delete/:channel_id", controller.DeleteChannel);
// http://localhost:3001/api/channels/delete/1

module.exports = Router;
