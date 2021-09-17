const path = require("path");
const nodemailer = require("nodemailer");

const SendEmails = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const output = `
      <h3> ברוכה הבאה לטק קריירה ${firstName} ${lastName} </h3>
      <h4>להלן פרטי התתחברות לאתר הלימודים של טק קריירה </h4>
      <ul>  
        <li>Email: ${email}</li>
        <li>password: ${password}</li>
      </ul>
      <h3>!שים לב </h3>
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
    text: "שלום רב", 
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
