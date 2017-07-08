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


db.collection('Users').findOneAndUpdate({
  _id:'150551K'
},{
  $set:{
    name:'O.G.Samarasinghe'
  },
    $inc :{
      age:1
    }
  
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});








  //db.close();
});
