const express = require("express");
const productsRoute = require("./products.routes");
const salesBannersRoute = require("./salesBanner.routes");

const router = express.Router();

router.use('/products', productsRoute);
router.use('/sales-banner', salesBannersRoute);

module.exports = router;
