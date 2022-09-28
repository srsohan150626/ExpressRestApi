const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    name: String,
    roll: {type: Number, required: true, unique: true
       },
    class: String,
    mobile: {
        type:String,
        validate:{
            validator: function (value) {
                return /^(?:\+88|88)?(01[3-9]\d{8})$/.test(value)
            },
            message:"Invalid Bangladeshi mobile number"
        }
    },
    remarks: {type: String, default: "No Remarks"}
}, {versionKey:false});
const studentModel = mongoose.model("students", DataSchema);
module.exports = studentModel;