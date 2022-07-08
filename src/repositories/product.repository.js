const model = require('../models/product.model')

async function findProducts() {
    return await model.findAll()
}

async function findProduct(code) {
    return await model.findByPk(code)
}

async function createProduct(product) {
    return await model.create(product)
}

async function updateProduct(product) {
    await model.update(product, {
        where: {
            code: product.code
        }
    })
}

async function deleteProduct(code) {
    await model.destroy({
        where: {
            code
        }
    })
}

module.exports = {
    findProducts,
    findProduct,
    createProduct,
    updateProduct,
    deleteProduct
}