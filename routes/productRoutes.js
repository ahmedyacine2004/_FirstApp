const express = require("express");
// create an instance from express router
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", (req, res) => {
res.send("<h1>First Express App</h1>");
});

// Add routes to handle product requests
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.get('/products/name/:name', productController.getProductByName);
router.post("/products", productController.createProduct);
router.put("/products", productController.updateProduct);

// Export the router instance
module.exports = router;
