var newToDO=new ToDo(
{  text:'my first mongoose todo',
  completed:true,
  completeAt:8.25
});

newToDO.save().then((doc)=>{
    console.log('saved to mToDo',doc);
},(err)=>{
  console.log('unable to add to mToDo');
});*/



var secToDo=new secToDOModel({
  name:'  O.G.Samarasinghe',
  email:'oshadhi.15@cse.mrt.ac.lk'
});

secToDo.save().then((doc)=>{
  console.log(JSON.stringify(doc,undefined,2));
},(error)=>{
  console.log('unable to add todo');
});
