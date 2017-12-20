const mongoose = require('mongoose')
// const Mongolass = require('mongolass')
var config = require('config-lite')(__dirname).mongodb

// const mongolass = new Mongolass()
// mongolass.connect(config.url)
mongoose.connect(config.url, function(err) {
  if (err) {
    console.error('connect to %s error: ', config.url, err.message)
    process.exit(1)
  }
})

exports.User = require('./user')
exports.Topic = require('./topic')
exports.Comment = require('./comment')
