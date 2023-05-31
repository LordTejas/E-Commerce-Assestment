const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { salesBannerService } = require('../services');


const getSalesBanners = catchAsync(async (req, res) => {
    const salesBanners = await salesBannerService.getAll();

    if (!salesBanners || salesBanners.length === 0) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Sales Banners not found!');
    }

    res.satus(200).send(salesBanners);   
});

const getSalesBannerById = catchAsync(async (req, res) => {
    const salesBanners = await salesBannerService.getAll();

    if (!salesBanners) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Sales Banner not found!');
    }

    res.satus(200).send(salesBanners);
});

module.exports = {
    getSalesBanners,
    getSalesBannerById,
}