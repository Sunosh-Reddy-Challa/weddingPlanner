const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    paymentmode: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Earnings = mongoose.model("Earnings", userSchema);
module.exports = Earnings;
