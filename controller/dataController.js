const Blog = require('../seed')


const dataController = {
  // index
  index (req, res, next) {
    Blog.find(req.body, (err, foundBlogs) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.blogs = foundBlogs
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    Blog.create(req.body, (err, createdBlog) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.blog = createdBlog
        next()
      }
    })
  },
  // Show
  show (req, res, next) {
    Blog.findById(req.params.id, (err, foundBlog) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a Blog with that ID'
        })
      } else {
        res.locals.data.blog = foundBlog
        next()
      }
    })
  }
}

module.exports = dataController