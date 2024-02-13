let securepost = (req,res,next)=>{
  console.log(req.headers);
  if(req.headers.authorization == "123456"){
    next()
  }else{
    res.send({error: "Your are not valid user"})
  }
}

module.exports = securepost