const Validator = require("validator");
const isEmpty = require("is-empty");

const nullError = (result, res) => {
    try {
    if (!result) {
     throw new Error(
      "the result equal to null or undefined Please check that you are sending the required details in the correct format"
    );
  }else {
    res
    .status(200)
    .json({
        success: true,
        message: "success",
        data: result
    })
  }   
    } catch (err) {
      res
      .status(400)
      .json({
          success: false,
          message: "failing",
          error: err.message
      })
    }
};

const isEmptyId = (data) => {
// if (req.body.id === "" || req.params.id === "" || req.body._id === "" || req.params._id === "") {
//    throw new Error("The id field is empty, you are required to pass a 24-character entry");
// };

data = !isEmpty(data) ? data : "";
if (Validator.isEmpty(data, {ignore_whitespace:false})) {
  throw new Error("The id field is empty");
}
if (!Validator.isLength(data, { min: 24, max: 24 })) {
  throw new Error("The id field is lest then 24-character, you are required to pass a 24-character entry");
}

};

const nullVariable = (data) => {
  if (!data) {
    throw new Error("failed to find information, please make sure you provide existing data in the appropriate format");
  };
};
  

module.exports = {
  nullError,
  isEmptyId,
  nullVariable,
};
