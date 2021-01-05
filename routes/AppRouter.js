const Router = require("express").Router();

const UserRouter = require("./UserRouter");
const ServerRouter = require("./ServerRouter");
const ChannelRouter = require("./ChannelRouter");

Router.use("/users", UserRouter);
Router.use("/servers", ServerRouter);
Router.use("/channels", ChannelRouter);

module.exports = Router;
