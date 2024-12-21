const mongoose = require('mongoose');

// I added here more constrains for the schema
const productSchema = new mongoose.Schema({
    name: {type:String , require:true} ,
    price:{type:String , require:true}  , 
    stock:{type:String , require:true}  , 
    categories: Array ,
});

// here i match the collection in mongoDb with the schema
const _Product = mongoose.model('products', productSchema);

// Here i exported the document as a module for the reusability
module.exports = _Product;