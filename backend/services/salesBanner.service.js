const { SalesBanner } = require("../models");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const getAll = async () => {
  const salesBanners = await SalesBanner.find();
  return salesBanners;
};

const getById = async (pk) => {
  const salesBanner = await SalesBanner.findById(pk);
  if (!salesBanner) {
    throw new ApiError(httpStatus.NOT_FOUND, "Sales Banner not found!");
  }
  return salesBanner;
};

module.exports = {
  getAll,
  getById,
};
