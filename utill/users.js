let users = []
const setUser = (userData) => {
  const uId = userData[1]
  const splitUId = uId.split('@')[1]
  const arrayId = splitUId.split('')
  const filteredId = arrayId.filter((item) => item !== '>')
  const id = filteredId.join('')
  const email = userData[2]
  if (users.includes(id)) {
    const index = users.findIndex((item) => item.id === id)
    users[index].email = email
    return { id, email }
  }
  users.push({ id, email })
  return { id, email }
}

module.exports = { setUser, users }
