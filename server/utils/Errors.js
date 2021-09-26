
const nullError = (result, res) => {
    try {
    if (!result) {
     throw new Error(
      "the result equal to null or undefined Please check that you are sending the required details in the correct format"
    );
  }else {
        res
          .status(200)
          .json({ massage: "success!", data: result });
      }      
    } catch (err) {
    res
      .status(500)
      .json({ massage: "filed", data: err.message });
    }
};

const isEmptyId = (req) => {
if (req.body.id === "" || req.params.id === "" || req.body._id === "" || req.params._id === "") {
   throw new Error("The id field is empty, you are required to pass a 24-character entry");
};

};

const nullVariable = (data) => {
  if (!data) {
    throw new Error("Failed to find information, please make sure you provide existing data in the appropriate format");
  };
};
  

module.exports = {
  nullError,
  isEmptyId,
  nullVariable,
};
