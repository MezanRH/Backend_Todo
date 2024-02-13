const mongoose = require("mongoose")
const {Schema} = mongoose

const createTodoSchema = new Schema({
  name: {
    type: String
  },
  priroty: {
    type: String
  }
})

module.exports = mongoose.model("Task",createTodoSchema)