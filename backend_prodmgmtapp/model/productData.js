const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    productTitle:String,
    price:String,
    category:String,
    image:String
})
const ProductData = mongoose.model('product',productSchema);
module.exports=ProductData