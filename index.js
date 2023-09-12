const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: false,
    auth:{

    }
});

transport.sendMail({
    from: "dicuper@gmail.com",
    to: "",
    subject: "",
    text: "",
})

