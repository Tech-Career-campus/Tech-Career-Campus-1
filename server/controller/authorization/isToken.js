const jwt = require("jsonwebtoken");

const isToken = (req, res, next) => {
  const header = req.header("Authorization");

  if (header !== undefined) {
    const [bearer, token] = header.split(" ");

    if (bearer === "Bearer" && typeof token !== "undefined") {
      try {
        let payload = jwt.verify(token, process.env.SECRET_KEY);
        if (req.body.payload && payload._id !== payload) {
          res.redirect("./login");
        } else {
          req.body = { ...req.body, role: payload.role }
          next();
        }
      } catch (err) {
        res
          .status(401)
          .json({
            success: false,
            message: "invalid or expired token",
            error: err
          });
      }
    } else {
      res
        .status(500)
        .json({
          success: false,
          message: "token is undefined"
        });
    };

  } else {
    res
      .status(500)
      .json({
        success: false,
        message: "headers is undefined, please make sure you send headers."
      });
  };
};

module.exports = isToken;
