
const mongoose = require("mongoose");
const { Schema } = mongoose;

const deletedUserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
    },
    employeerole: {
        type: String,
    },
    reason: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const DeletedUser = mongoose.model("DeletedUser", deletedUserSchema);
module.exports = DeletedUser;
