const catchAsync = require('../utils/CatchAsync');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { salesBannerService } = require('../services');


const getSalesBanners = catchAsync(async (req, res) => {
    const salesBanners = await salesBannerService.getAll();

    if (!salesBanners || salesBanners.length === 0) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Sales Banners not found!');
    }

    res.status(httpStatus.OK).send(salesBanners);   
});

const getSalesBannerById = catchAsync(async (req, res) => {

    const salesBannerId = req.params.salesBannerId;

    const salesBanners = await salesBannerService.getById(salesBannerId);

    if (!salesBanners) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Sales Banner not found!');
    }

    res.status(httpStatus.OK).send(salesBanners);
});

const createSalesBanner = catchAsync(async (req, res) => {

    const newSalesBanner = await salesBannerService.create(req.body);

    if (!newSalesBanner) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Error!');
    }

    res.status(httpStatus.CREATED).send(newSalesBanner);;

});

module.exports = {
    getSalesBanners,
    getSalesBannerById,
    createSalesBanner,
}