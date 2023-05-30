const Joi = require("joi");
const { objectId, isValidRating} = require("./custom.validation");

const postProduct = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        brandName: Joi.string().required(),
        description: Joi.string().required(),
        productId: Joi.string().required(),
        quantity: Joi.string().required(),
        rating: Joi.number(),
        options: Joi.array().items(Joi.string().required()),
        // listOfImages: Joi.array(Joi.string),
    }),

}

const getProducts = {
    query: Joi.object().keys({
        search: Joi.string(),
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