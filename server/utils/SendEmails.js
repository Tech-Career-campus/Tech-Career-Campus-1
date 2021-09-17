const path = require("path");
const nodemailer = require("nodemailer");

const SendEmails = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${firstName} ${lastName}</li>
        <li>Email: ${email}</li>
        <li>password: ${password}</li>
      </ul>
      <h3>Message</h3>
      <h3> אינך יכול לשלוח מייל בחזרה למשתמש זה</h3>
    `;

  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "Tech_Career@outlook.com",
      pass: "TC123456@!",
    },
  });

  const options = {
    from: '"Tech_Career" Tech_Career@outlook.com', 
    to: `${email}`, 
    subject: "Tech_Career Request", 
    text: "Hello world?", 
    html: output, 
  };


  try {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.send("success");
    });
  } catch (error) {
    res.send("filed" + error.message);
  }
};

module.exports = {
  SendEmails,
};
