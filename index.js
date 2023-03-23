const express = require('express')
const cors = require('cors')
const app = express()
const port = 8081
const data = require('./data/resume.json')

app.use(cors())

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.get('/job/:id', (req, res) => {
  const job = data.items.filter((f) => f.id == req.params.id)
  res.send(job)
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
