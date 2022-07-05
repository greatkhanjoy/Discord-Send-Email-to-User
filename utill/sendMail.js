let sgMail = require('@sendgrid/mail')

const sendEmail = async (message) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    from: message.author.username + '<' + process.env.EMAIL_SENDER_USER + '>',
    to: 'greatkhanjoy@gmail.com',
    subject: 'From Discord',
    html: `message: ${message.content}<br> author: ${message.author.username} <br> Server: ${message.guild} <br> Channel: ${message.channel.name}`,
  }

  await sgMail.send(msg)
}

module.exports = { sendEmail }
