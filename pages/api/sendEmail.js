
import sgMail from '@sendgrid/mail'

const SENDGRID_API_KEY = "Your sendgrid api key"
sgMail.setApiKey(SENDGRID_API_KEY)

  let sendEmail = async ({ name, email, phone, category, subject, message }) => {
    
  let msg = {};
  if (!message && !subject){
    msg = {
      to: 'info@ask.kg', // Change to your recipient
      from: 'info@ask.kg', // Change to your verified sender
      subject: `Consultation request from ${name}`,
      html: `<h4>
                Contact Details:
            </h4> </br>
            <b>Name:</b> ${name}</br>
            <b>Email:</b> ${email} </br>
            <b>Phone:</b> ${phone} </br>
            <b>Category:</b> ${category} </br>
      `,
    }
  }
  else{
    msg = {
      to: 'info@ask.kg', 
      from: 'info@ask.kg', 
      subject: `Contact request: "${subject}"`,
      html: `<b>NAME: </b> ${name}</br>
            <b>FROM EMAIL: </b> ${email} </br>
            <b>MESSAGE: </b> ${message} </br>
      `,
    }
  }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
}

export {sendEmail};