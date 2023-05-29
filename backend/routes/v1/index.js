const express = require("express");
const videosRoute = require("./products.routes");

const router = express.Router();

router.use('/products', videosRoute);

module.exports = router;
