const express = require('express')
const app = express()
const port = 3000


// * enrutador
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`server listo!`)
  })