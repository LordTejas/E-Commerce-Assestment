const Joi = require("joi");
const { objectId, isValidRating} = require("./custom.validation");

const postProduct = {
    body: Joi.object().keys({
        // name: Joi.string().required(),
        // brandName: Joi.string().required(),
        // description: Joi.string().required(),
        // productId: Joi.string().required(),
        // quantity: Joi.string().required(),
        // rating: Joi.number().required(),
        // options: Joi.string(), 
        // listOfImages: Joi.array(Joi.string),
    }),

}

const getProducts = {
    body: Joi.object().keys({
        searchQuery: Joi.string().required(),
        limit: Joi.number(),
    }),
};

const getProductById = {
    params: Joi.object().keys({
        productId: Joi.required().custom(objectId),
    }),
};

const patchProductRating = {
    params: Joi.object().keys({
        productId: Joi.required().custom(objectId),
    }),
    body: Joi.object().keys({
        rating: Joi.number().custom(isValidRating).required(),
    }),
};

module.exports = {
    postProduct,
    getProducts,
    getProductById,
    patchProductRating,
};