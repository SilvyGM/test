const sale = require("../controllers/sale");

const salesController = {
  list: async function (req, res) {
    try {
      const sale = await sale.find();
      res.status(200).json({ sale: sale });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  create: async function (req, res) {
    try {
      const sale = new sale(req.body);
      await sale.save();
      res.status(200).json({ sale: sale });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = salesController;
