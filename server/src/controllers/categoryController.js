import Category from "../models/Category.js";
import Product from "../models/Product.js";

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategoryProducts = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};