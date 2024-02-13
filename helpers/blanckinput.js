let balnckinput = (text1="",text2="")=>{
  let error = {}
  console.log(text1,text2);

  if(!text1){
    error.name = "nam nai"
  }  
  if(!text2){
    error.priority = "priority nai"
  }

  console.log(error)

  return error


}

// let balnckinput = (text)=>{
//   if(text){
//     return true
//   }else{
//     return false
//   }
// }

module.exports = balnckinput