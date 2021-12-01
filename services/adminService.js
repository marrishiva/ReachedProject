const db = require("../models");
class AdminService {
  constructor() {
    this.db = db;
  }
  async createExamTypes(req){
    try{
    let examType  = await this.db.ExamTypes.create(req.body);
    return examType;
    }catch(e){
        console.log("error createExamTypes",e)
        throw new Error(e);
    }
  }
  async getAllExamTypes(){
    try{
      let examTypes = await this.db.ExamTypes.find({isActive : true});
      return examTypes;
    }catch(e){
        console.log("error getAllExamTypes",e)
        throw new Error(e);
    }
  }
  async getExamTypeById(id){
    try{
        let examType = await this.db.ExamTypes.findOne({_id:id,isActive : true});
        return examType;
      }catch(e){
          console.log("error getAllExamTypes",e)
          throw new Error(e);
      }
  }
  async updateExamType(ExamId,data){
    try{
    let updateExamType = await this.db.ExamTypes.findOneAndUpdate(
        { _id: ExamId },
        { $set: data },
        { new: true }
      );
      return updateExamType;
    }catch(e){
        console.log("error updateExamType",e)
        throw new Error(e);
    }
  }
}
module.exports = new AdminService();