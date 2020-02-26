const express = require('express')
const axios = require('axios')
const app = express()

// Middleware to disable CORS
app.get('/*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// Request the data from the url and return it
app.get('/fetch', async ({ query: { url = '' } }, res) => {
  try {
    if (!url) throw new Error('No url param found in query')
    const { data } = await axios.get(url)
    res.json(data)
  } catch (e) {
    console.log(`Error: ${e}`)
  }
})

app.listen(5000, () => console.log('Server running on port 5000'))
