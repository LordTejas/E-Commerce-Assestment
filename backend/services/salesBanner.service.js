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

const create = async (body) => {

  const {title, description, image} = body;

  const newSalesBanner = await SalesBanner.create({
    title,
    description,
    image,
  });

  return newSalesBanner;
};

module.exports = {
  getAll,
  getById,
  create,
};
