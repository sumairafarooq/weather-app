const sgMail = require('@sendgrid/mail');

//const sendgridApiKey = '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'

//sgMail.setApiKey(sendgridApiKey)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
     sgMail.send({  
          to: email,
          from: 'nishu88000@gmail.com',
          subject: 'Thanks for joining our team',
          text: `Welcome to the app, ${name}. let me know how r you`
     })
}

const sendCancelEmail = (email, name) => {
     sgMail.send({
          to: email,
          from: 'nishu88000@gmail.com',
          subject: 'Reason for Cancelation',
          text: `${name}, this side. can you share the reason for cancel our service`
     })
}

module.exports = {


     sendWelcomeEmail,
     sendCancelEmail
}