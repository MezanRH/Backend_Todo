const express = require("express");
const route = express.Router();
const createTodoSchema = require("../../model/createTodoSchema.js")

route.post("/todo", async function (req,res){
  const {id} = req.body

  await createTodoSchema.findByIdAndDelete({_id:id})

  res.send("delete successful")
})

module.exports = route