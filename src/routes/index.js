const express = require("express")
const router = express.Router()

const UserController = require("../controllers/userController")

router.get("/user", UserController.getAllUsers)
router.post("/user", UserController.createNewUser)
router.put("/user", UserController.updateUser)
router.delete("/user", UserController.removeUser)

module.exports = router