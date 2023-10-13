const { v4: uuid4 } = require('uuid')
require('dotenv').config()


const convertToUpperCase = (str) => {
  return str.toUpperCase()
}

const convertToLowerCase = (str) => {
  return str.toLowerCase()
}

const generateUuidV4 = () => {
  return uuid4()
}

const generateCurrentDate = () => {
  const now = new Date()

  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const date = String(now.getDate()).padStart(2, '0')

  return `${year}-${month}-${date}`
}

module.exports = {
  convertToUpperCase,
  convertToLowerCase,
  generateUuidV4,
  generateCurrentDate
}