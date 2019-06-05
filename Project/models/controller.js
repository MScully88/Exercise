
const Product = require('./product');

async function getAllProducts(req, res){
    try{
        const products = await Product.find();
        res.json(products);
    } catch(error){
        console.log(error);
    }

};


module.exports = getAllProducts; 