const mongoose = require('mongoose');
const faker = require('faker');
const Product = require('../models/product.js');


// Seed Data

const products = [];
let i = 0;

while(i <= 20) {
    products.push({
        name: faker.commerce.product(),
        description: faker.lorem.paragraph(),
        imgUrl: faker.image.imageUrl(),
        price: faker.commerce.price(),
    });

    i++;
}

mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true});
Product.insertMany(products);