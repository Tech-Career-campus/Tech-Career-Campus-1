const authUser = (req, res, next) => {
  if (req.body == null) {
    res
      .status(403)
      .json({ screen: false, massage: "you have to login or register" });
  }
  next();
};

const authRole = (Role) => {
    return (req, res, next) => { 
      
    try {
      if (req.body.role !== Role) {
        throw error;
      } else {   
        next();
      }
    } catch (error) {
        res
          .status(401)
          .json({ success: false, massage: "you don't have access", error: error });
      }
    };

};
module.exports = {
  authUser,
  authRole,
};
