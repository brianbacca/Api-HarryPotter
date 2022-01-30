const House = require("../models/house");

const all = (req, res) => {
  res.status(200).send("holis");
};
const single = (req, res) => {
  const { id } = req.params;
};

const create = async (req, res) => {
  try {
    const house = new House(req.body);
    const data = await house.save();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { all, single, create };
