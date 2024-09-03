const mongoose = require("mongoose");
const { Schema } = mongoose;

const assignmentSchema = new Schema({
  employeename: {
    type: String,
    required: true,
  },
  employeeemail: {
    type: String,
    required: true,
  },
  clientname: {
    type: String,
    required: true,
  },
  clientemail: {
    type: String,
    required: true,
  },
  clientnumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status:{
    type: String,
    default: "Pending",
  },
  dateassigned: {
    type: Date,
    default: Date.now,
  },
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;
