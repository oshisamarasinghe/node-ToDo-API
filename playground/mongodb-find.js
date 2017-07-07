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
  /*db.collection('ToDos').find({completed: false}).toArray().then((docs)=>{
    console.log('ToDos');
    console.log(JSON.stringify(docs,undefined,2));

  },(err)=>{
    console.log('unable to find',err);
  });*/
  db.collection('Users').find().count().then((count)=>{
    console.log('Users in count :'+count);
    //console.log(JSON.stringify(count,undefined,2));

  },(err)=>{
    console.log('unable to find',err);
  });

/* find using toArray()
  db.collection('Users').find(
  { _id:'150314M'

  }).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));

  },(err)=>{
    console.log('unable to find',err);
  });*/
 db.collection('Users').find({age: 21}).toArray().then((docs)=>{
   console.log('users with age 21 :');
   console.log(JSON.stringify(docs,undefined,2));
 },(err)=>{
   console.log('unable to find');
 });





  //db.close();
});
