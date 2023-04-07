const user = require("./User")
const mongoose = require("mongoose");
var crypto = require("crypto");
const WorkerSchema = new mongoose.Schema({
    entreprise: {
      type: String,
      required: false
    }
  });
var Worker = user.discriminator("Worker", WorkerSchema)
if (mongoose.models.Worker) {
    Worker = mongoose.model("Worker");
  } else {
    Worker = mongoose.model("Worker", WorkerSchema);
  }
  
  module.exports = Worker;
  