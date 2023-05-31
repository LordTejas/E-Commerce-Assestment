const Joi = require("joi");
const { objectId } = require("./custom.validation");

const getSalesBanners = {

}

const getSalesBannerById = {
    params: Joi.object().keys({
        salesBannerId: Joi.string().custom(objectId),
    }),
}

const createSalesBanner = {
    body: Joi.object().keys({
        title: Joi.string(),
        description: Joi.string(),
        image: Joi.string().required(),
    }),
}

module.exports = {
    getSalesBanners,
    getSalesBannerById,
    createSalesBanner,
}