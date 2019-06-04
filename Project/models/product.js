const mongoose = require('mongoose');
const {Schema} = mongoose;


const productSchema = new Schema({
    name: {
      type: String,
      trim: true
        },
      description: {
	    type: String,
	},
      imgUrl: {
        type: String,
	    trim: true
    },
      price: Number
}); 


const Product = mongoose.model('Product', productSchema);

module.exports = Product;

