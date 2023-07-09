const mongoose=require('mongoose');

const TaskSchema=mongoose.Schema({
    title:String,
     Time:Number,
     IsCompleted:Boolean
});

module.exports=mongoose.model('Tasks',TaskSchema);