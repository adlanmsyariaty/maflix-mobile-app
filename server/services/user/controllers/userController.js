const { getDb } = require("../config/mongoConnection");
const { User } = require("../models/User");

class ViewerController {
  static async addUser(req, res) {
    try {
      const { username, email, password, role, phoneNumber, address } =
        req.body;
      const newUser = await User.create({
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });
      res.status(201).json(newUser);
    } catch (error) {
      if (Array.isArray(error.message)) {
        res.status(400).json({
          message: error.message
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error"
        });
      }
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = req.params.id;
      await User.destroy(id);
      res.status(200).json({
        message: "User data has been deleted",
      });
    } catch (error) {
      if (error.message === "USER_NOT_FOUND") {
        res.status(404).json(error);
      } else {
        res.status(500).json({
          message: "Internal Server Error"
        });
      }
    }
  }

  static async showAllUser(req, res) {
    try {
      const users = await User.showAllUser();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      });
    }
  }

  static async findUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findUserById(id);

      if (!user) throw { message: "USER_NOT_FOUND" };

      res.status(200).json(user);
    } catch (error) {
      if (error.message === "USER_NOT_FOUND") {
        res.status(404).json(error);
      } else {
        res.status(500).json({
          message: "Internal Server Error"
        });
      }
    }
  }
}

module.exports = ViewerController;
