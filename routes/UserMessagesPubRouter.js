const Router = require("express").Router();
const controller = require("../controllers/UserMessagesPubController");

Router.get("/all", controller.GetMessages);
// http://localhost:3001/api/messages/all

Router.post("/add", controller.CreateMessage);
// http://localhost:3001/api/messages/add

Router.put("/update/", controller.UpdateMessage);
// http://localhost:3001/api/messages/update

Router.delete("/delete/", controller.DeleteMessage);
// http://localhost:3001/api/messages/delete

module.exports = Router;
