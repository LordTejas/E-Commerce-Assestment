const Joi = require("joi");
const { objectId } = require("./custom.validation");

const getSalesBanners = {

}

const getSalesBannerById = {
    params: Joi.object().keys({
        salesBannerId: Joi.string().custom(objectId),
    }),
}

module.exports = {
    getSalesBanners,
    getSalesBannerById
}