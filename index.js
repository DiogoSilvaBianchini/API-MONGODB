require("dotenv").config()

const mongoose = require("./src/config/mongoConfig")
mongoose.connection.on('error', () => console.error("connection error"))
mongoose.connection.once('open', () => console.log("Banco de dados online"))

const express = require("express")
const morgan = require("morgan")
const router = require("./src/routes")


const app = express()
const PORT = process.env.PORT || 8082

app.use(morgan("dev"))
app.use(router)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))