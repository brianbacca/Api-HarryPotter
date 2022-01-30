const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");
const compression = require("compression");

const dotenv = require("dotenv");
dotenv.config();

const dbConnection = require("./database/config");
dbConnection();

//routes
const houses = require("./routes/houses.routes");

const app = express();

//middleware
app.use(cors());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Rutas App
app.use("/api/houses", houses);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.error("ruta no encontrada");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.error(err);
});

module.exports = app;
