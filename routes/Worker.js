const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const Worker = require("../controllers/Worker")


 router.post("/addWorker",Worker.addWorker)
 router.get("/getWorker", Worker.getAllWorkers);

 
module.exports = router;