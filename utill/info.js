const info = (message) => {
  const call = message.content.split(' ')[0]
  const command = message.content.split(' ').slice(1)
  let msg = ''
  if (call === '!joy') {
    if (command == 'Hi') {
      msg = 'Hello!'
    } else if (command == 'Hello') {
      msg = 'Hi!'
    } else if (command == 'Joy') {
      msg = 'Unlucky!'
    } else {
      msg = "I don't know what you mean!"
    }
  }
  return msg
}

module.exports = info
