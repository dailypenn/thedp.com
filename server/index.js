const express = require('express')
const axios = require('axios')

const app = express()

app.get('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/fetch', async (req, res) => {
  const { url } = req.query
  if (url) {
    const response = await axios.get(url)
    res.json(response.data)
  }
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})