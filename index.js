require('dotenv').config()
const Discord = require('discord.js')
const info = require('./utill/info')
const { setUser, users } = require('./utill/users')
const { sendEmail } = require('./utill/sendMail')
const client = new Discord.Client({ intents: 32767 })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('messageCreate', (message) => {
  if (message.content.startsWith('!joy-add-email')) {
    const userData = message.content.split(' ')
    if (userData.length < 3 || userData.length > 3) {
      return message.channel.send(
        'Invalid! Please use !joy-add-email <space> @user <space> me@mail.com'
      )
    }
    const user = setUser(userData)
    return message.reply(
      `${user.email} has been set as contact email for ${user.id}`
    )
  }

  if (message.content.startsWith('!joybhai')) {
    sendEmail(message)
    message.channel.send('Email sent. Thank you. ')
  }

  //   const msg = info(message)
  //   if (msg) {
  //     message.reply(msg)
  //     message.channel.send(msg)
  //   }
})

client.login(process.env.DISCORD_TOKEN)
