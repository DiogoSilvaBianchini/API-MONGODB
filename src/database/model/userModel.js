const {Schema, model} = require("../../config/mongoConfig")

const user = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
},{timestamps: true})

const userModel = model("User", user)

module.exports = userModel