const nodemailer = require("nodemailer");

require('dotenv').config();

export const sendMail = async (email, token) => {

    console.log("EMAIL from env:", process.env.EMAIL_USER);
    console.log("PASSWORD from env:", process.env.PASSWORD_USER ? '✅ Present' : '❌ MISSING');
    // pxvx xlqt vuyn agev
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
            subject: 'Password Reset Link',
            html: `
                <h1>Hello,</h1>
                <p>Click the link below to reset your password:</p>
                <a href="http://localhost:${process.env.APP_PORT}/api/${process.env.API_VERSION}/users/forget_password/${token}">
                    Reset Password
                </a>
            `,
        });

        console.log("Message sent: " + info.messageId);
    } catch (error) {
        console.error("Error sending email: ", error);
    }


}