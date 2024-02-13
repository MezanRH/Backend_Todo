const express = require("express");
const route = express.Router();
const createTodoSchema = require("../../model/createTodoSchema.js");

route.get("/todo", async function (req,res){
  let data = await createTodoSchema.find({})

  res.send(data)

})

module.exports = route