const Router = require("express").Router();

const UserRouter = require("./UserRouter");
const ServerRouter = require("./ServerRouter");
const ChannelRouter = require("./ChannelRouter");
const UserMessagesPubRouter = require("./UserMessagesPubRouter");

Router.use("/users", UserRouter);
Router.use("/servers", ServerRouter);
Router.use("/channels", ChannelRouter);
Router.use("/messages", UserMessagesPubRouter);

module.exports = Router;
