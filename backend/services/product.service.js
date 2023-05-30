const { Product } = require("../models");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const getProducts = async (limit) => {

    if (!!limit) {
        const products = await Product.find().limit(limit);
        return products;
    }

    const products = await Product.find();
    return products;
};

const getProductById = async (pk) => {
    const product = await Product.findById(pk);
    return product;
};

const createProduct = async (body) => {
    const {name, brandName, description, productId, quantity, rating, options, listOfImages} = body;

    const product = await Product.create({
        name,
        brandName,
        description,
        productId,
        quantity,
        rating,
        options, 
        listOfImages
    });

    return product;
};

/**
 * Search for products in the specified fields and limit the results
 * @param {string} searchQuery The search query
 * @param {number} limit Limit the number of results to be returned (defaults to 10) 
*/
const searchProducts = async (searchQuery, limit=10) => {
    const products = await Product.find({
        $or: [
          { name: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the name field
          { description: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the description field
          { brandName: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the brandName field
        ],}).limit(limit);

    return products;
}

const patchProductRating = async (pk, newRating) => {
    const product = await Product.findById(pk);

    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, "Product not found!");
    }

    product.rating = newRating;
    await product.save();
    return product;
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    searchProducts,
    patchProductRating,
}