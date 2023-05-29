const router = require('express').Router();
const productController = require('../../controllers/product.controller');
const { productValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

router.get(
    '/',
    validate(productValidation.getProducts),
    productController.getProducts);

router.get(
    '/:productId', 
    validate(productValidation.addProductById),
    productController.getProductById);

router.post(
    '/', 
    validate(productValidation.postProduct),
    productController.postProduct);

router.patch(
    '/:productId/rating', 
    validate(productValidation.patchProductRating),
    productController.patchProductRating);

module.exports = router;
