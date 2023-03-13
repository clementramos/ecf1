import axios from 'axios';

const nodemailer = require("nodemailer");

// Config
const mailConfig = {
    host: "smtp.gmail.com",
    port: 465, // or 587
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER, // your gmail account
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS // your gmail app password
    }
}

const adminEmail = 'The Webmaster <ramos.clementskype@gmail.com>';

// Function for grabbing template files
async function getPubFile(file) {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${file}`);
    return res.data;
}

export default async function handler(req, res) {
    sendEmails(req, res);
}

async function sendEmails(req, res) {
    // Create our Nodemailer transport handler
    let transporter = nodemailer.createTransport(mailConfig);

    // Fetch our template files
    const template = await getPubFile("/email-templates/template.html");
    const custHtml = await getPubFile("/email-templates/customer.html");
    const adminHtml = await getPubFile("/email-templates/admin.html");
    const custTxt = await getPubFile("/email-templates/customer.txt");
    const adminTxt = await getPubFile("/email-templates/admin.txt");

    // Format our recipient email address
    const recipEmail = `${req.body.name} <${req.body.email}>`;

    // Format our customer-bound email from received form data
    let sendHtml = template.replace("%BODY%", custHtml)
        .replace("%NAME%", req.body.name)
        .replace("%EMAIL%", req.body.email)
        .replace("%DATE%", req.body.date)
        .replace("%HOUR%", req.body.hour)
        .replace("%COUVERTS%", req.body.couverts)
        .replace("%ALLERGIES%", req.body.radioGroup);

    let sendTxt = custTxt
        .replace("%NAME%", req.body.name)
        .replace("%EMAIL%", req.body.email)
        .replace("%DATE%", req.body.date)
        .replace("%HOUR%", req.body.hour)
        .replace("%COUVERTS%", req.body.couverts)
        .replace("%ALLERGIES%", req.body.radioGroup);

    // Send our customer-bound email
    let info = await transporter.sendMail({
        from: adminEmail,
        to: recipEmail, // list of receivers
        subject: "Message Received ✔", // Subject line
        text: sendTxt, // plain text body
        html: sendHtml, // html body
    });

    if (!info.messageId) {
        res.status(200).json({ status: 0, message: "Failed to send message!" });
        return false;
    }

    sendHtml = template.replace("%BODY%", adminHtml)
        .replace("%NAME%", req.body.name)
        .replace("%EMAIL%", req.body.email)
        .replace("%DATE%", req.body.date)
        .replace("%HOUR%", req.body.hour)
        .replace("%COUVERTS%", req.body.couverts)
        .replace("%ALLERGIES%", req.body.radioGroup);

    sendTxt = adminTxt
        .replace("%NAME%", req.body.name)
        .replace("%EMAIL%", req.body.email)
        .replace("%DATE%", req.body.date)
        .replace("%HOUR%", req.body.hour)
        .replace("%COUVERTS%", req.body.couverts)
        .replace("%ALLERGIES%", req.body.radioGroup);

    info = await transporter.sendMail({
        from: recipEmail,
        to: adminEmail, // list of receivers
        subject: req.body.subject ? req.body.subject : "New Message From Website ✔", // Subject line
        text: sendTxt, // plain text body
        html: sendHtml, // html body
    });

    if (info.messageId) {
        res.status(200).json({ status: 1 });
    } else {
        res.status(200).json({ status: 0, message: "Failed to send message!" });
    }
}
