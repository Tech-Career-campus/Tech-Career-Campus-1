const nullError = (result, res) => {
    try {
    if (result === null || result === undefined) {
     throw new Error(
      "the result equal to null or undefined Please check that you are sending the required details in the correct format"
    );
  }else {
        res
          .status(200)
          .json({ massage: "success!", data: result });
      }      
    } catch (error) {
    res
      .status(500)
      .json({ massage: "filed", data: error.message });
    }


};

module.exports = {
  nullError,
};
