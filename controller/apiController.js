const apiController = {
  //index
  index(req, res, next){
    res.json(res.locals.data.blogs)
  },
  //show 
  show(req, res, next){
    res.json(res.locals.data.blog)
  }
}

module.exports = apiController