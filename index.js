const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const model = require('./app/models/index')
const { seed } = require('./app/seeders/seed')
const apiRoute = require('./app/routes/api/api.route')
require('dotenv').config()

app.use(express.static('public'))

morgan.token('body', (req, res) => {
  return JSON.stringify(req.body)
})

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :body'
  )
)

const corsOptions = {
  origin: '*',
  exposedHeaders: ['Content-Disposition'],
  credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', apiRoute)

const port = process.env.APP_PORT || 8080

app.listen(port, () => {
  // model.sequelize.sync({ alter: true })

  // seed()

  console.log(`Server is running on http://localhost:${port}`)
})