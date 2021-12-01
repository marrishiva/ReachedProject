module.exports = function (app, express) {
    let adminApi = require("../controllers/adminApi")(express);
    app.use("/admin", adminApi);

}