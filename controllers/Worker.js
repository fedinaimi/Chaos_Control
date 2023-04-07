const User = require("../models/User");
const Worker = require("../models/Worker");
const toWorker = require("./user")


exports.addWorker = (req, res) => {
    const { firstName, lastName, email, password, address, mobileNumber, image, entreprise } = req.body;
  
    Worker.findOne({ email }).then(existingWorker => {
      if (existingWorker) {
        return res.status(400).json({ error: "Worker already exists" });
      } else {
        const newWorker = new Worker({
          firstName,
          lastName,
          email,
          address,
          mobileNumber,
          image,
          entreprise
        });
  
        newWorker.setPassword("azerty123");
        newWorker.save()
          .then(() => {
            res.status(200).json({ message: "Worker created !" });
          })
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
};


    exports.getAllWorkers = (req, res) => {
        Worker.find()
          .then((worker) => {
            res.status(200).json({ massage: "sucsses", worker });
          })
          .catch((error) => {
            res.status(400).json({
              error: "worker dosen't exist",
            });
          });
      };