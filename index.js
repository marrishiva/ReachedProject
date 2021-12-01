require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

mongoose.connect(
    process.env.MONGODB_DEV_URL,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`mongo connected sucessfully`);
        require("./config/routes")(app, express);
      }
    }
  );
  
  app.listen(process.env.PORT, () => {
    console.log(`server listening on ${process.env.PORT}`);
  });