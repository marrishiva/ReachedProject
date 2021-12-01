class Models {
    constructor() {
      this.collection = this.init();
    }
  
    init() {
      return {
        ExamTypes:require("./ExamTypes")
      };
    }
  }
  
  module.exports = new Models().collection;