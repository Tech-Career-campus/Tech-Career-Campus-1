const jwt = require("jsonwebtoken");


const isToken = (req, res, next) => {
  const header = req.header("Authorization");
 console.log(header);
  const [bearer, token] = header.split(" ");
  // const bearer = header.slice(0, 0);
  // const token = header.slice(0, 2000)
  if (bearer === "Bearer" && typeof token !== "undefined") {
    try {
      let payload = jwt.verify(token, process.env.SECRET_KEY);
      if (req.body.payload && payload._id !== payload) {
        res.redirect('./login')
      } else {
        req.body = { ...req.body, role:payload.role }
        next();
      }
    } catch (error) {
      res.status(401).json({ massage: "invalid or expired token", error });
    }
  }
};

module.exports = isToken
