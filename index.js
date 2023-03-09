const express = require('express')
const app = express()
const port = 3333

app.get('/trpc/ping', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})