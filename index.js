const express = require('express')
const app = express()
const dbConfig = require("./mongoConfig/bdConfig.js")
const route = require("./routes")

app.use(express.json())
dbConfig()
app.use(route)

app.post('/', function (req, res) {
  res.send('Hello World')
})

app.listen(7000, ()=>{
  console.log("Port connect");
})

// pass : 7mutaAnl7ivikC8g