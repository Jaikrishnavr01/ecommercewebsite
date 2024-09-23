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




### -> create data folder inside that create products.json file to store dummy data


# Building get single product api 

const productModel = require('../models/productModel');
const ProductModel = require('../models/productModel')

//get products api  - /api/v1/products
exports.getProducts = async(req, res, next) => {
  const products = await ProductModel.find({});
    res.json({
        success:true,
        products,
        message: 'Get products working!'
    })
}

//get single products api  - /api/v1/products
exports.getSingleProducts=async(req, res, next) => {
   
try {
    // console.log(req.params.id,'ID');
    const product =  await  productModel.findById(req.params.id);
    res.json({
        success:true,
        product,
        message: 'Get Single products working!'
    })

} catch (error) {
    res.status(404).json({
        success:false,
        message: error.message
    })
}
}

# Building Order Api

## -> orderModel.js

const mongoose = require(mongoose)

const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status:String,
    createdAt: Date
})

const orderModel = mongoose.model('Order', orderSchema);

module.exports =orderModel;



## -> order controller.js

const orderModel = require('../models/orderModel')


// create order  ->  /api/v1/order
exports.createOrder = async (req, res, next) => {

    // console.log(req.body, 'data');
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    console.log(amount, ' Amount');

    const status = "Pending";

    const order = await orderModel.create({ cartItems, amount, status })

    res.json({
        success: true,
        order,
        message: "order works!"
    })
}

# fixing cors error
## install cors

* npm i cors

### app.js
const cors = require('cors')

app.use(cors())



# adding search to get products api 

exports.getProducts = async(req, res, next) => {
   const query =  req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
    }}:{};
  const products = await ProductModel.find(query);
    res.json({
        success:true,
        products,
        message: 'Get products working!'
    })
}


# upadting product Stock

    cartItems.forEach(async(item)=>{
      const product = await productModel.findById(item.product._id);
      product.stock = product.stock - item.qty;
      await product.save();
    })

    res.json({
        success: true,
        order,
        message: "order works!"
    })
}