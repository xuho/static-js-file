const express = require('express')
const app = express()
app.use('/static', express.static('public'))
const port = 3080;


app.get('/', (req, res) => {
  res.send('main.js');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
