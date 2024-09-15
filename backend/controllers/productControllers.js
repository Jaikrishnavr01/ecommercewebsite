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