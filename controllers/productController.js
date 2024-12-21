const Product = require('../models/productModel');

// Controller function to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err.message });
  }
};

// Controller function to get product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err.message });
  }
};
// Controller function to get product by Name
exports.getProductByName = async (req, res) => {
  const name= req.params.name;
  try {
    const product = await Product.find({name: name});
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err.message });
  }
};
// Controller function to create a new product
exports.createProduct = async (req, res) => {
  const { name, price, stock, categories } = req.body;
  try {
    const newProduct = new Product({ name, price, stock, categories });
    //save function can save a product within mongoDB
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Error creating product", error: err.message });
  }
};

// Controller function to update product
exports.updateProduct = async (req, res) => {
  const { productId, price, stock, categories } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { price, stock, categories },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Error updating product", error: err.message });
  }
};
