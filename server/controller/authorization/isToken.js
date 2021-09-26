const jwt = require("jsonwebtoken");
const { nullVariable } = require("../../utils/Errors");

// const isToken = (req, res, next) => {
//   const header = req.header("Authorization");
  
//   if(header !== undefined){
//      const [bearer, token] = header.split(" ");

//   if (bearer === "Bearer" && typeof token !== "undefined") {
//     try {
//       let payload = jwt.verify(token, process.env.SECRET_KEY);
//       if (req.body.payload && payload._id !== payload) {
//         res.redirect("./login");
//       } else {
//         req.body = { ...req.body, role:payload.role}
//         next();
//       }
//     } catch (error) {
//       res.status(401).json({ massage: "invalid or expired token", error:error });
//     }
//   }else{
//     res.status(500).json({ massage: "token is undefined"});
//   };

//   }else{
//     res.status(500).json({ massage: "headers is undefined, please make sure you send headers."});
//   };
// };

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
  res.status(401).json({ message: "invalid or expired token", error:err.message });
}
};

module.exports = isToken;
