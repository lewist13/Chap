const { User, Server, Channel, UserMessagesPub } = require("../models");
const {
  createToken,
  hashPassword,
  passwordValid,
} = require("../middleware/index");

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetUserById = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let user = await User.findByPk(userId);
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const CreateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const passwordDigest = await hashPassword(password);
    const user = await User.create({
      username,
      email,
      passwordDigest,
    });
    console.log(user.id);
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      include: [
        {
          model: Server,
          as: "servers",
          include: [{ model: Channel }],
        },
      ],
    });
    console.log(user);
    if (
      user
      // (await passwordValid(req.body.password, user.dataValues.passwordDigest))
    ) {
      let payload = {
        id: user.dataValues.id,
        name: user.dataValues.username,
      };
      let token = createToken(payload);
      return res.send({ user, token });
    }
  } catch (error) {
    throw error;
  }
};
const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true,
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.user_id,
      },
    });
    res.send({
      message: `user with id of ${req.params.user_id} deleted`,
      data: {
        id: req.params.user_id,
      },
    });
  } catch (error) {
    throw error;
  }
};

const SessionStatus = async (req, res) => {
  try {
    const { token } = res.locals;
    const user = await User.findByPk(token.id, {
      attributes: ["id", "name", "email"],
    });
    res.send({ user, status: "OK" });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Login,
  SessionStatus,
  DeleteUser,
  UpdateUser,
  GetUsers,
  CreateUser,
  GetUserById,
};
