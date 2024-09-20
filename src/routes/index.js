const express = require("express")
const router = express.Router()

const UserController = require("../controllers/userController")

router.get("/user", express.json(), UserController.getAllUsers)
router.post("/user", express.json(), UserController.createNewUser)
router.put("/user", express.json(), UserController.updateUser)
router.delete("/user/:id", express.json(), UserController.removeUser)

module.exports = router