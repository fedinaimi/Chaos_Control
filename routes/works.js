const express = require("express")
const work=require("../controllers/works")
const multer = require('../middlewares/multer-config')
const { check } = require("express-validator");
const { sign } = require("crypto");
const auth = require("../middlewares/auth");
const router = express.Router();
const{
addNewWork,
allworks,
update

  

}=require("../controllers/works");

router.post("/addNewWork",multer.single('image'), work.addNewWork);

router.get("/works", work.allworks);
router.get("/getworks/:user",work.getWorkById);
router.post("/applyNow/:id",update)

module.exports = router ;