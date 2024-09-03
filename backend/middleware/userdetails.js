const jwt = require("jsonwebtoken");
const JWT_SECRET = "";

const userdetails = async (req, res, next) => {
  const token = req.header("authtoken");
  if (!token) {
    return res.status(401).send({ error: "Access Denied" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = userdetails;
