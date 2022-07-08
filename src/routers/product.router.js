const express = require('express')
const { check, validationResult } = require('express-validator')
const ctrl = require('../controllers/product.controller')

const router = express.Router()

function validate(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400)
        next(errors.array())
    } else {
        next()
    }
}

router.get('/', ctrl.getProducts)
router.get('/:code', ctrl.getProduct)
router.post(
    '/',
    check('code', 'Code is mandatory').notEmpty(),
    check('description', 'Description is mandatory').notEmpty(),
    check('price', 'Price is mandatory').notEmpty(),
    check('price', 'Price must be a positive number').isFloat({ gt: 0 }),
    validate,
    ctrl.postProduct
)
router.put(
    '/',
    check('code', 'Code is mandatory').notEmpty(),
    check('description', 'Description is mandatory').notEmpty(),
    check('price', 'Price is mandatory and must be a positive number').notEmpty().isFloat({ gt: 0 }),
    validate,
    ctrl.putProduct
)
router.delete('/:code', ctrl.deleteProduct)

module.exports = router