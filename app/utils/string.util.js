const { v4: uuid4 } = require('uuid')
const crypto = require('crypto')
require('dotenv').config()

const convertToUpperCase = (str) => {
  return str.toUpperCase()
}

const convertToLowerCase = (str) => {
  return str.toLowerCase()
}

const convertToFormatDate = (inputDate) => {
  if (!inputDate) return null

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const date = new Date(inputDate)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

const convertTimeStampToFormatDate = (timestamp) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'Oktober', 'November', 'December'
  ]

  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]

  const dateObj = new Date(timestamp)
  const day = days[dateObj.getUTCDay()]
  const date = dateObj.getUTCDate()
  const month = months[dateObj.getUTCMonth()]
  const year = dateObj.getUTCFullYear()

  return `${day}, ${date} ${month} ${year}`
}

const convertToDefaultFormatDate = (dateString) => {
  if (!dateString) return ''

  const months = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04', 'May': '05', 'June': '06',
    'July': '07', 'August': '08', 'September': '09', 'October': '10', 'November': '11', 'December': '12'
  }

  const parts = dateString.split(' ')

  const day = parts[0]
  const month = months[parts[1]]
  const year = parts[2]

  return `${year}-${month}-${day}`
}

const generateUuidV4 = () => {
  return uuid4()
}

const generateRandomCharacter = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let randomCharacter = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length)
    randomCharacter += charset[randomIndex]
  }

  return randomCharacter
}

const generateUsernameFromName = (name) => {
  return name.trim().replace(/\s+/g, '_').toLowerCase() + '_' + generateRandomCharacter(5)
}

const generateRandomPassword = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
  let password = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length)
    password += charset[randomIndex]
  }

  return password
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
  convertToFormatDate,
  convertTimeStampToFormatDate,
  convertToDefaultFormatDate,
  generateUuidV4,
  generateUsernameFromName,
  generateRandomPassword,
  generateCurrentDate
}