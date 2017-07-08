var mongoose=require('mongoose');


var secToDo= mongoose.model('Mtodo2',{
  name:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  completed:{
    type:Boolean,
  default:false
},
completeAt:{
  type:Boolean,
  default:null
}
});

module.exports={secToDo}
