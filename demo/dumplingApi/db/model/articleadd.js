const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  articles=new Schema({
    // editorContent: {type:String,required:true},
    // Title: {type:String,required:true},
    title: {type:String,required:true},
    nei: {type:String,required:true},
    // ctime: { type: Date, default: Date.now }

 })

 let articleModel=mongoose.model('article',articles)
 module.exports=articleModel