const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
const port = 3000;

app.get("/hello", async (req, res) => {
  try {
    console.log("YA");
    console.log(req.body.email);
    let person = req.query.email;
    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: "hi@poojaminna.com",
        pass: "AHSUNA5051r!",
      },
    });
    let info = await transporter.sendMail({
      from: '"Pooja " <hi@poojaminna.com>',
      to: person,
      subject: "Hello From Nodemailer",
      text: "Thank you for registering!",
      html: "<b>Thank you for joining us!!</b>",
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Succefull");
  } catch (error) {
    res.send("Failed");
    console.log(error);
  }
});

app.use("/", express.static("public"));
app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
