const express = require("express");
const route = express.Router()
const todo = require("./todo")
const deleteData = require("../api/deleteData")
const GetData = require("./getData");
const UpdateData = require("./updateData");
 


route.use("/create",todo)
route.use("/get",GetData)
route.use("/delete",deleteData)
route.use("/update",UpdateData)

module.exports = route