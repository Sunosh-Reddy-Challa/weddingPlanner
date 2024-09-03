const mongoose = require("mongoose");
const { boolean } = require("yup");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String
    }
})
const Contactus = mongoose.model("Contactus", userSchema);
module.exports = Contactus;