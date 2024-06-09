const bodyparser = require('body-parser')
var express  = require('express')
var cors = require("cors");


var app = express()


app.use(cors)
app.use(bodyparser.json())
var userData=[]


app.post('/addData',(req, res)=>{

var data = req.body;
userData.push(data)
res.send(userData)


})


app.get('/addData',(req, res)=>{

   
    res.send(userData)
})

app.listen(4000,()=>{
    console.log('server is ready')
})


   