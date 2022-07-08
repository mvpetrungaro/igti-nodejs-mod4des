const repo = require('../repositories/product.repository')

async function getProducts() {
    return await repo.findProducts()
}

async function getProduct(code) {
    return await repo.findProduct(code)
}

async function setProduct(product) {
    const exists = await repo.findProduct(product.code)

    if (exists) {
        await repo.updateProduct(product)
    } else {
        return await repo.createProduct(product)
    }
}

async function updateProduct(product) {
    const exists = await repo.findProduct(product.code)

    if (!exists) {
        throw { name: 'ProductNotFound', message: 'Product not found' }
    }

    await repo.updateProduct(product)
}

async function deleteProduct(code) {
    const exists = await repo.findProduct(code)

    if (!exists) {
        throw { name: 'ProductNotFound', message: 'Product not found' }
    }

    await repo.deleteProduct(code)
}

module.exports = {
    getProducts,
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct
}