const Router = require("express").Router();
const controller = require("../controllers/UserController");
const { readToken, verifyJwt } = require("../middleware/index");

Router.get("/session", readToken, verifyJwt, controller.SessionStatus);

Router.get("/all", controller.GetUsers);
// http://localhost:3001/api/users/all

Router.get("/:user_id", controller.GetUserById);
// http://localhost:3001/api/users/1

Router.post("/add", controller.CreateUser);
// http://localhost:3001/api/users/add

Router.post("/login", controller.Login);
// http://localhost:3001/api/login

Router.put("/update/:user_id", controller.UpdateUser);
// http://localhost:3001/api/users/update/1

Router.delete("/delete/:user_id", controller.DeleteUser);
// http://localhost:3001/api/users/delete/1

module.exports = Router;
