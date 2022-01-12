require('dotenv').config()
const PORT = process.env.PORT || 8015

const bodyParser = require('body-parser')
const cors = require('cors')
const app = require('./app')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`The app listening at http://localhost:${PORT}`)
)
