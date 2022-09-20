const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    name: String,
    roll: String,
    class: String,
    remarks: String
});
const studentModel = mongoose.model("students", DataSchema);
module.exports = studentModel;