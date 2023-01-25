const express = require('express')
const app = express()
const blog = require("./seed")
app.use(express.json())

app.get('/', (req, res) => {
  res.json(blog)
})

app.get('/:id', (res,req) => {
  res.json(blog.find(post => post.id == req.params.id))
})

app.post('/', (req, res) => {
  blog.push(req.body)
  res.json(req.body)
})

app.listen(3005, () => {
  console.log(`Running on 3005`)
})