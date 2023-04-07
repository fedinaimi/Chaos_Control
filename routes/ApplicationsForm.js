const express = require("express")
const userController=require("../controllers/ApplicationsForm")
const multer = require('../middlewares/multer-config')
const { check } = require("express-validator");
const { sign } = require("crypto");
const auth = require("../middlewares/auth");
const router = express.Router();


router.post("/addApplication",multer.single('Cv'), userController.addApplication);

module.exports = router ;