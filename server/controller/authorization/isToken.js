const jwt = require("jsonwebtoken");
const { nullVariable } = require("../../utils/Errors");

const isToken = (req, res, next) => {
  const header = req.header("Authorization");
  try {
  nullVariable(header);
  const [bearer, token] = header.split(" ");
  nullVariable(token);
  if (bearer === "Bearer") {
    let payload = jwt.verify(token, process.env.SECRET_KEY);
  if (req.body.payload && payload._id !== payload) {
      res.redirect("./login");
  } else {
    req.body = { ...req.body, role:payload.role}
    next();
  }
}
} catch (err) {
  res
  .status(400)
  .json({
    success:false,
    message: "invalid or expired token",
    error:err.message 
  });
}
};

module.exports = isToken;