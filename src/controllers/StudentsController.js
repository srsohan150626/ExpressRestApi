const StudentModel = require('../models/StudentModel')

exports.index = (req, res) => {
    let query = {};
    let projection = "name roll class remarks";
    StudentModel.find(query, projection, (error, data) => {
        if (error) {
            res.status(400).json({success: "false", data: error});
        } else {
            res.status(200).json({success: "true", data: data});
        }
    })
}

exports.insert = (req, res) => {
    let reqBody = req.body;
    StudentModel.create(reqBody, (error, data) => {
        if (error) {
            res.status(400).json({success: "false", data: error});
        } else {
            res.status(201).json({success: "true", data: data});
        }
    })
}

exports.update = (req, res) => {
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    StudentModel.updateOne(query, reqBody, (error, data) => {
        if (error) {
            res.status(400).json({success: "false", data: error});
        } else {
            res.status(201).json({success: "true", data: data});
        }
    })
}

exports.delete = (req, res) => {
    let id = req.params.id;
    let query = {_id: id};
    StudentModel.deleteOne(query, (error, data) => {
        if (error) {
            res.status(400).json({success: "false", data: error});
        } else {
            res.status(200).json({success: "true", data: data});
        }
    })
}