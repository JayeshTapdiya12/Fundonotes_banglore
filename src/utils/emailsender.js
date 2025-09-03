const nodemailer = require("nodemailer");

require('dotenv').config();

export const sendMail = async (email, subject, body) => {

    console.log("EMAIL from env:", process.env.EMAIL_USER);
    console.log("PASSWORD from env:", process.env.PASSWORD_USER ? '✅ Present' : '❌ MISSING');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.PASSWORD_USER,
        },
        debug: true,
        logger: true
    })

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            html: body,
        });

        console.log("Message sent: " + info.messageId);
    } catch (error) {
        console.error("Error sending email: ", error);
    }


}