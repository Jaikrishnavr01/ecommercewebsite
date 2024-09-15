* to Intiliaze backend package.json file
- npm init  

* create app.js and install -  npm i nodemon and after that in package.json set the entrie point as app js and add this in script   "start": "nodemon app.js", 

- npm express
# app.js
const express = require("express")
const app = express();
app.listen(8000, () => {
    console.log("server listening to port 8000 in production");
    
}) 

## enviroment variable configuration

- npm i dotenv

# app.js
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

app.listen(process.env.PORT, () => {
    console.log(`server listening to ${process.env.PORT}  in ${process.env.NODE_ENV}`);
})

# Creating Routes & Controllers
--> create route folder and add products.js

## products.js
const express = require('express');
const router = express.Router();

router.route('/products').get()

--> create contollers folder and create "productControllers.js" to manage the product route functionality.

## productControllers.js

exports.getProducts=(req, res, next) => {
    res.json({
        success:true,
        message: 'Get products working!'
    })
}

exports.getSingleProducts=(req, res, next) => {
    res.json({
        success:true,
        message: 'Get Single products working!'
    })
}

## product.js
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProducts);

module.exports = router;


# create order.js
## order.js
const express = require('express');
const { createOrder } = require('../controllers/orderControllers');
const router = express.Router();

router.route('/order').post(createOrder);

module.exports = router;

## orderController.js
exports.createOrder = (req,res, next) => {
    res.json(
        {
            success:true,
            message: "order works!"
        }
    )
}


# Testing Api routes with THUNDERCLIENT / POSTMAN 


## app.js
const products  = require('./routes/products');
const orders =require('./routes/order');

app.use('/api/v1/', products);
app.use('/api/v1/', orders);


# connecting to database

* monogoDB connection string - mongodb://localhost:27017/

- install mongoose ---> npm i mongoose

## connectDatabase.js
const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con)=> {
        console.log('MongoDB connected to host: '+ con.connection.host)
    })
};

module.exports = connectDatabase;

## app.js
const connectDatabase = require('./config/connectDatabase')

connectDatabase();


# creating product model

### models --> productModel.js
## productModel.js
const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    name:String,
    price:String,
    description: String,
    ratings: String,
    image: [
        {
            image:String        
        }
    ],
    category: String,
    seller:String,
    stock:String, 
    numOfReviews: String,
    createdAt:Date
})

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel

# building get product api 

const ProductModel = require('../models/productModel')

exports.getProducts = async(req, res, next) => {

  const products = await ProductModel.find({});

    res.json({
        success:true,
        products,
        message: 'Get products working!'
    })
}

exports.getSingleProducts=(req, res, next) => {
    res.json({
        success:true,
        message: 'Get Single products working!'
    })
}


### -> create data folder inside that create products.json file to store dummy data