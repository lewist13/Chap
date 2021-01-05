const Router = require("express").Router();
const controller = require("../controllers/ServerController");
const { readToken, verifyJwt } = require("../middleware/index");

// Routes
Router.get("/session", readToken, verifyJwt, controller.SessionStatus);

Router.get("/:server_id/", controller.GetServers);

Router.post("/add", controller.CreateServer);

Router.put("/update/:server_id", controller.UpdateServer);

Router.delete("/delete/:server_id", controller.DeleteServer);

module.exports = Router;
