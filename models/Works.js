const { number } = require("joi");
const mongoose = require("mongoose");

const workShcema = new mongoose.Schema({
    positionname: {
        type: String,
        required: true,
      },
      society:{
        type: String,
        required: true,
    },
    
    details:{
    
        type: String,
        required: true,
      },
      
      numberOfposition:{
    
        type: Number,
        default: 1,
        required : false,
      },
      image: {
        type:String,
       required : false,
      },
      candidate: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "applicationsforms",
        required: false
      }],
      user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
      }
    
     
    
});

module.exports = mongoose.model("work", workShcema);