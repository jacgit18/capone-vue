const bodyparser = require('body-parser')
var express  = require('express')
var cors = require("cors");


var app = express()


app.use(cors)
app.use(bodyparser.json())


var userData=[]


app.post('/addData',(req, res)=>{

var data = req.body;
console.log('CALLED POST METHOD ')
userData.push(data)
res.send(userData)


})


app.get('/getData',(req, res)=>{
    console.log('CALLED GET METHOD ', userData)

   
    res.send(userData)
})

app.listen(4000,()=>{
    console.log('server is ready')
})


   