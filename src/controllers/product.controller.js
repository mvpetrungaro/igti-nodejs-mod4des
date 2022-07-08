const serv = require('../services/product.service')
const { validationResult } = require('express-validator')

async function getProducts(_req, res, next) {
    try {
        const products = await serv.getProducts()
        res.send(products)
    } catch (err) {
        next(err)
    }
}

async function getProduct(req, res, next) {
    try {
        const product = await serv.getProduct(req.params.code)
        res.send(product)
    } catch (err) {
        next(err)
    }
}

async function postProduct(req, res, next) {
    try {
        const product = await serv.setProduct(req.body)

        if (product) {
            res.status(201)
        }

        res.send(product)
    } catch(err) {
        next(err)
    }
}

async function putProduct(req, res, next) {
    try {
        await serv.updateProduct(req.body)
        res.end()
    } catch(err) {
        if (err.name === 'ProductNotFound') {
            res.status(405)
            next(err.message)
        } else {
            next(err)
        }
    }
}

async function deleteProduct(req, res, next) {
    try {
        await serv.deleteProduct(req.params.code)
        res.end()
    } catch(err) {
        if (err.name === 'ProductNotFound') {
            res.status(405)
            next(err.message)
        } else {
            next(err)
        }
    }
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}