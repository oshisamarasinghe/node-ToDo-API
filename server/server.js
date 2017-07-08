//library imports
var express = require('express');
var bodyParser= require('body-parser');

//local imports
var {mongoose} = require('./db/mongoose.js');
var {ToDo} =require('./models/todo.js');
var {secToDo} =require('./models/secToDo.js');

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var user =new secToDo({
    name:req.body.name ,
    email:req.body.email
  });

  user.save().then((doc)=>{
    res.send(doc);
  },(error)=>{
    res.status(400).send(error);
  })
});

app.listen(3000,()=>{
  console.log('started on port 3000');
})
