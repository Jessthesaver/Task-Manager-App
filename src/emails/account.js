require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function sendWelcomeEmail(email,name){
    sgMail.send({
        to:email,
        from:'jrcarmona@intekglobal.com',
        subject:'Thanks fr joining the app',
        text:`Welcome to the app ${name}!
Let me know how you get along with the app.`
    })
}

function sendCancellationEmail(email,name){
    sgMail.send({
        to:email,
        from:'jrcarmona@intekglobal.com',
        subject:'Good bye',
        text:`Thanks for being part of the app ${name}!
We hope you get back.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}