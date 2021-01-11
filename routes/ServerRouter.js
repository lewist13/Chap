const Router = require("express").Router();
const controller = require("../controllers/ServerController");

// Routes
Router.get("/:server_id/", controller.GetServerById);
// http://localhost:3001/api/servers/1

Router.get("/:server_id/channels", controller.GetChannelsByServerId);

Router.post("/add", controller.CreateServer);
// http://localhost:3001/api/servers/add

Router.put("/update/:server_id", controller.UpdateServer);
// http://localhost:3001/api/servers/update/1

Router.delete("/delete/:server_id", controller.DeleteServer);
// http://localhost:3001/api/servers/delete/1

module.exports = Router;
