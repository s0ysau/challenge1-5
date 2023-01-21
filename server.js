require('dotenv').config()
const express = require('express')
const PORT = 3008

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use('/api/blog', require('./controller/routeContoller'))

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`)
})