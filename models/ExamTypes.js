const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamTypes = new Schema({	
    ExamName:{ type:String, required:true }, 
    description:{ type:String},   
    isActive:{ type:Boolean, default:true },
    isDelete:{type:Boolean, default:false},
    createDate:{ type:Date, default:Date.now },
    modifiedDate:{ type:Date, default:Date.now }
});
module.exports = mongoose.model("examtypes",ExamTypes);

