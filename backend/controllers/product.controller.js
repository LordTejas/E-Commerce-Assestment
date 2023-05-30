const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { productService } = require('../services');

const getProducts = catchAsync(async (req, res) => {

    const {search, limit} = req.query;

    if (!search) {
        const products = await productService.getProducts((!!limit) && limit || null);

        if (products.length === 0) {
            throw new ApiError(httpStatus.NOT_FOUND, "No Products Found!");
        } else {
            res.status(httpStatus.OK).send({products: products});
        }
    }

    const products = await productService.searchProducts(search, (!!limit) ? limit : 10);

    if (products.length === 0) {
        throw new ApiError(httpStatus.NOT_FOUND, "No Products Found!");
    } else {
        res.status(httpStatus.OK).send({products: products});
    }

})

const getProductById = catchAsync(async (req, res) => {
    const productId = req.params.productId;

    const product = await productService.getProductById(productId);

    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, "Product Not Found!");
    } else {
        res.status(httpStatus.OK).send(product);
    }
})

const postProduct = catchAsync(async (req, res) => {
    
    const data = req.body;

    const savedProduct = await productService.createProduct(data);

    res.status(httpStatus.CREATED).send(savedProduct);
})

const patchProductRating = catchAsync(async (req, res) => {
    const productId = req.params.productId;
    const { rating } = req.body;

    // Updaes video via service
    await productService.patchProductRating(productId, rating);

    res.status(httpStatus.NO_CONTENT).send();
})


module.exports = {
    getProducts,
    getProductById,
    postProduct,
    patchProductRating,
}