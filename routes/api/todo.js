const express = require("express");
const route = express.Router()
const securepost = require("../../middleware/securepost");
const balnckinput = require("../../helpers/blanckinput.js");
const createTodoSchema = require("../../model/createTodoSchema.js")



route.post("/todo", securepost, (req,res)=>{
  const {name,priority} = req.body
  // console.log(name,priority)

  
//  res.send(balnckinput(name,priority))

 console.log("database a data gaca");
  
  // console.log("database a ");
  
  // console.log(Boolean(balnckinput(name,priority)), balnckinput(name,priority))
  // console.log(Boolean(balnckinput(name,priority).name), balnckinput(name,priority))

  if(balnckinput(name,priority).name || balnckinput(name,priority).priority){
    res.send(balnckinput(name,priority))
  }else{
    let ct = new createTodoSchema({
      name: name,
      priroty: priority
    })

    ct.save()
    res.send(ct)

  }

  // if(balnckinput(name)){
  //   if(balnckinput(priority)){
  //     res.send("prioraty aca")
  //   }else{
  //     res.send("proratiy nai")
  //   }
  // }else{
  //   res.send("Please nam nai kano")
  // }


  // if(balnckinput(name) && balnckinput(priority)){
  //   res.send("data aca")
  // }else{
  //   res.send( "Please fill the all fild")
  // }


})



module.exports = route