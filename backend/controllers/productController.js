const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// Add a new product
const addProduct = async (req, res, next) => {
  try {
    const { name, price, category, image } = req.body;
    const product = new Product({ name, price, category, image });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, addProduct };

