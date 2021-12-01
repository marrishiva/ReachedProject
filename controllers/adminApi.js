let AdminService = require("../services/adminService");
const constants = require("../config/constants");
module.exports = function (express) {

    let api = express.Router();
    api.post("/examtype",async (req,res)=>{
        if(!req.body.ExamName){
            res.status(constants.STATUS_400).send({statusCode: constants.STATUS_400, message: constants.STATUS_MSG_400, status: constants.STATUS_FALSE})
        }else{
            try{
            let data = await AdminService.createExamTypes(req);
            res.status(constants.STATUS_201).send({statusCode: constants.STATUS_201, message: constants.STATUS_MSG_201, data : data,status: constants.STATUS_TRUE})
            }catch(e){
                return res.status(constants.STATUS_500).send({ statusCode: constants.STATUS_500, message: constants.STATUS_MSG_500, status: constants.STATUS_FALSE });
            }
        }
    })
    api.get("/examtype",async (req,res)=>{
        try{
            let data = await AdminService.getAllExamTypes();
            res.status(constants.STATUS_200).send({statusCode: constants.STATUS_200, message: constants.STATUS_MSG_200, data : data,status: constants.STATUS_TRUE})
        }catch(e){
            return res.status(constants.STATUS_500).send({ statusCode: constants.STATUS_500, message: constants.STATUS_MSG_500, status: constants.STATUS_FALSE });
        }
    });
    api.get("/examtype/:id",async (req,res)=>{
        try{
            let data = await AdminService.getExamTypeById(req.params.id);
            res.status(constants.STATUS_200).send({statusCode: constants.STATUS_200, message: constants.STATUS_MSG_200, data : data,status: constants.STATUS_TRUE})
        }catch(e){
            return res.status(constants.STATUS_500).send({ statusCode: constants.STATUS_500, message: constants.STATUS_MSG_500, status: constants.STATUS_FALSE });
        }
    });
    api.put("/examtype/:id",async (req,res)=>{
        try{
            req.body.modifiedDate = new Date();
            let data = await AdminService.updateExamType(req.params.id,req.body);
            res.status(constants.STATUS_201).send({statusCode: constants.STATUS_201, message: constants.STATUS_MSG_201_U, data : data,status: constants.STATUS_TRUE})
        }catch(e){
            return res.status(constants.STATUS_500).send({ statusCode: constants.STATUS_500, message: constants.STATUS_MSG_500, status: constants.STATUS_FALSE });
        }
    })
    return api
}