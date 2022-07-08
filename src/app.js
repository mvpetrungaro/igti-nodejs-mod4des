require('dotenv').config()
const express = require('express')
const db = require('./db')
const productRouter = require('./routers/product.router')

const app = express()

app.use(express.json())

app.get('/', async (_req, res, _next) => {
  res.status(200).send('Working properly')
})

app.use('/products', productRouter)

app.use(async (err, _req, res, _next) => {

  console.log(err)

  if (!res.statusCode && !res.status) {
    res.status(500)
  }

  res.json({ error: err })
})

db.sync().then(() => {
  console.log('Connected to the DB!')
})

app.listen(3000, () => {
  console.log('API Started!')
})

module.exports = app