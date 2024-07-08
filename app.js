'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
   res.send('Hello! ini saya Yayi Diana Dewi-S1SI220344-UAS-projek-komdat\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)