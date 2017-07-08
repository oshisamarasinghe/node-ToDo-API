var mongoose=require('mongoose');

var ToDo=mongoose.model('Mtodo',{
  text:{
    type:String
  },
  completed:{
    type:Boolean
  },
  completeAt:{
    type:Number
  }
});

module.exports={ToDo}
