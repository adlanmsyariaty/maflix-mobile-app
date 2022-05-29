const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongoConnection");
const { hashPassword } = require("../helpers/bcrypt");

class User {
  static users() {
    const database = getDb();
    return database;
  }

  static async create(newData) {
    try {
      const newUser = await this.users().collection("users").insertOne({
        username: newData.username,
        email: newData.email,
        password: hashPassword(newData.password),
        role: newData.role,
        phoneNumber: newData.phoneNumber,
        address: newData.address
      })
      const newUserData = this.findUserById(String(newUser.insertedId))
      return newUserData;
    } catch (error) {
      throw error;
    }
  }

  static async destroy(id) {
    try {
      await this.users().collection("users").deleteOne({
        _id: ObjectId(id)
      })
      return;
    } catch (error) {
      throw error;
    }
  }

  static async showAllUser() {
    try {
      const users = await this.users().collection("users").find().toArray();
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async findUserById(id) {
    try {
      if (id.length !== 24) return;
      const user = await this.users().collection("users").findOne({
        _id: new ObjectId(id)
      })
      if (user) delete user.password

      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  User,
};
