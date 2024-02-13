const express = require("express");
const route = express.Router();
const createTodoSchema = require("../../model/createTodoSchema");

route.post("/todo", async function (req,res){
  const {id,name} = req.body

  await createTodoSchema.findByIdAndUpdate({_id:id},{name:name}) 

  res.send("Update data successful")

})

module.exports = route