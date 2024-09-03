const express = require("express");
const cors = require("cors");
const app = express();
const connectToMongo = require('./db');
connectToMongo();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
});

app.use("/api/auth/", require("./routes/auth"));

app.listen(4000, () => {
    console.log("listening on port 4000");
});
