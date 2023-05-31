const router = require('express').Router();
const salesBannerController = require('../../controllers/salesBanner.controller');
const { salesBannerValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

router.get(
    '/',
    validate(salesBannerValidation.getSalesBanners),
    salesBannerController.getSalesBanners);

router.get(
    '/:salesBannerId', 
    validate(salesBannerValidation.getSalesBannerById),
    salesBannerController.getSalesBannerById);

module.exports = router;