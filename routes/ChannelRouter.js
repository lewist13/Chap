const Router = require("express").Router();
const controller = require("../controllers/ChannelController");
const { readToken, verifyJwt } = require("../middleware/index");

Router.get("/session", readToken, verifyJwt, controller.SessionStatus);

Router.get("/all", controller.GetChannels);
// http://localhost:3001/api/channels/all

Router.get("/:user_id", controller.GetChannelById);
// http://localhost:3001/api/channels/1

Router.post("/add", controller.CreateChannel);
// http://localhost:3001/api/channels/add

Router.put("/update/:user_id", controller.UpdateChannel);
// http://localhost:3001/api/channels/update/1

Router.delete("/delete/:user_id", controller.DeleteChannel);
// http://localhost:3001/api/channels/delete/1

module.exports = Router;
