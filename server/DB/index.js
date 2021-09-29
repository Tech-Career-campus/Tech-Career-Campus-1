const dotenv = require("dotenv");
dotenv.config();
const dbConnection = process.env.dbConnection;
<<<<<<< HEAD
const dbConnection_test = process.env.dbConnection_test
=======
const dbConnection_test = process.env.dbConnection_test;
>>>>>>> 6c63f616ee4eb4ab27e84f0b9e14b6ac4d262e21
const mongoose = require("mongoose");
const chalk = require("chalk");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

<<<<<<< HEAD
  if (process.env.TEST_ENV === "test") {
    console.log(dbConnection_test);
     mongoose
      .connect(dbConnection_test, options)
      .then(() => {
        console.log(chalk.green("mongoDB connected"));
      })
      .catch((err) => {
        console.log(chalk.red("Connection error", err.message));
      });
    
    }else{
      console.log(dbConnection);
      mongoose
      .connect(dbConnection, options)
      .then(() => {
        console.log(chalk.green("mongoDB connected"));
      })
      .catch((err) => {
        console.log(chalk.red("Connection error", err.message));
      });
    }
=======
if (process.env.TEST_ENV === "test") {
console.log(dbConnection_test);
 mongoose
  .connect(dbConnection_test, options)
  .then(() => {
    console.log(chalk.green("mongoDB connected"));
  })
  .catch((err) => {
    console.log(chalk.red("Connection error", err.message));
  });

}else{
  console.log(dbConnection);
  mongoose
  .connect(dbConnection, options)
  .then(() => {
    console.log(chalk.green("mongoDB connected"));
  })
  .catch((err) => {
    console.log(chalk.red("Connection error", err.message));
  });
}


>>>>>>> 6c63f616ee4eb4ab27e84f0b9e14b6ac4d262e21

const db = mongoose.connection;
module.exports = db;
