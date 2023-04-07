const work = require("../models/Works");
const ApplicationsForm = require("../models/ApplicationsForm");

const ObjectId = require("mongodb").ObjectId;

exports.addNewWork = (req, res) => {
    let addNewWork = new work({ ...req.body , image:req.file.filename});
    console.log(req.file)
    addNewWork.save((erro, addNewWork) => {
      if (erro) {
        return res.status(400).json({
          error: "unable to add work",
        });
      }
      return res.json({
        message: "sucsess",
        addNewWork,
      });
    });
    console.log(addNewWork);
  };
  exports.allworks = async (req, res) => {
    try {
      const wor = await work.find()
      res.json(wor)
  
    } catch (error) {
      res.status(500).json(error)
    }
  }
  exports.update = async (req, res) => {
    try {
      
  console.log("haniji")
  console.log(req.body)
  console.log(req.params)
      const form = {...req.body};
  
      const newApplicationForm = await ApplicationsForm.create(form);
  
      await work.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
             candidate: newApplicationForm._id
            }

        },
        { new: true, useFindAndModify: false }
      );
  
      res.status(200).json({ message: "Update successful" });
                  console.log(newApplicationForm)

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

  exports.getWorkById = async (req, res) => {
    try {
      const userId = req.params.user;
      const works = await work.find({ user: userId });
  
      if (!works) {
        return res.status(404).json({ message: "Work not found" });
      }
  
      res.status(200).json({ massage: "sucsses", works });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };