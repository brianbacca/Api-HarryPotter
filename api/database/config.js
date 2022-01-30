const mongoose = require("mongoose");

async function dbConnection() {
  try {
    await mongoose.connect(process.env.BD_CNN);
    console.log("Base de datos online");
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = dbConnection;
