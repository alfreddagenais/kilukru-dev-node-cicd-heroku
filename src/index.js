require('dotenv').config()
const PORT = process.env.PORT || 8015

const bodyParser = require('body-parser')
const cors = require('cors')
const app = require('./app')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

// Default routes
app.get('/', (_req, res) => {
  res.status(200).sendFile('./index.html', { root: __dirname })
})

app.use((req, res) => {
  res.status(404).send('404 not found')
})

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`The app listening at http://localhost:${PORT}`)
)
