const express = require("express");
const UserController = require("../controllers/userController")
const router = express.Router();

router.get("/", UserController.showAllUser);
router.get("/:id", UserController.findUserById);
router.post("/", UserController.addUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
