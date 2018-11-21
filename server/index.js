const express = require('express')
const path = require('path')
const chalk = require('chalk')
const api = require('./api/index')

const app = express()
const port = process.env.PORT || 5000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use('/api', api)

app.listen(port, () => {
  console.log(chalk.green('API Server is up and running on'), chalk.underline.bgRed(`localhost:${port}`))
})
