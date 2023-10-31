const nodemailer = require('nodemailer')
const htmlToText = require('nodemailer-html-to-text').htmlToText
const Bull = require('bull')
require('dotenv').config()

const sendEmailMessageQueue = async (job) => {
  const { to, subject, html } = job.data

  const transporter =nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: to,
    subject: subject,
    html: html
  }

  transporter.use('compile', htmlToText())
  await transporter.sendMail(mailOptions)
}

const emailQueue = new Bull('email', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
})

emailQueue.process(sendEmailMessageQueue)

module.exports = { emailQueue }