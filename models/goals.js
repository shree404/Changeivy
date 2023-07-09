const mongoose=require('mongoose');

const GoalsSchema=mongoose.Schema({
    goaltopic:String,
     timePerday:Number,
     actionForgoal:String,
     totalTime:Number
});

module.exports=mongoose.model('goals', GoalsSchema);