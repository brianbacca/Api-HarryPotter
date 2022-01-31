const House = require("../models/house");
const { totalRegister, findAll, findById } = require("../services/common");
const { paginationInfo } = require("../services/pagination");
const all = async (req, res) => {
  const data = await findAll(House, req.query.page);
  const info = await paginationInfo({ req, Model: House });

  res.json({ data, info });
};
const single = async (req, res) => {
  const { id } = req.params;
  const data = await findById(House, id);
  res.json(data);
};

const create = async (req, res) => {
  try {
    const house = new House(req.body);
    const { name } = await house.save();
    res.json({ msg: "House Created", name });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { all, single, create };
