const mongoose = require("mongoose")
const { DB_NAME, DB_USER_NAME, DB_PASSWORD, DB_HOST, DB_PORT} = process.env
mongoose.connect(`mongodb://${DB_USER_NAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`)

module.exports = mongoose