//const MongoDBClient =require('mongodb').MongoClient; //this MongoClient is a must
const {MongoClient,ObjectID} =require('mongodb');

/*var obj=new ObjectID();  //create new _id
console.log(obj);*/

/*var user={name:'oshadhi',age:20};
var{name}=user; //destructuring the object
console.log(name);*/
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to the mongoDB server'); //return out if there is an error no need of else if
  }
  console.log('connected to the mongoDB server');
db.collection('Users').insertMany([{
  _id:'150000A',name:'kasun',age:22},{
  _id:'150405R',name:'kasuni',age:23}]);



  /*db.collection('Users').insertOne({
    //_id:'150902P', //when timestamp uses we cant hrd code id here
    name:'oshadhi',
    location:'galle',
    age:21
  },(err,res)=>{
    if(err){
      return console.log('unable to insert Users');
    }
    //console.log(JSON.stringify(res.ops,undefined,2));
    //console.log(JSON.stringify(res.ops[0]));
    console.log(res.ops[0]._id.getTimestamp());
  });*/
  db.close();
});
