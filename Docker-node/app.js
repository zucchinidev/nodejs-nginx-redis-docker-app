'use strict'

const express = require('express')
const app = express()
const redis = require('redis')
const client = redis.createClient('6379', 'redis')
client.on('error', (err) => {
  console.log('Error ' + err)
})

client.on('connect', () => {
  console.log('connect ')
})

app.get('/', (req, res) => {
  res.json({
    healthy: true
  })
})

app.get('/clients', (req, res) => {
  client.incr('clients', function (err, clients, next) {
    if (err) return next(err)
    res.send('This page has been viewed ' + clients + ' times!')
  })
})

const port = 3030
app.listen(port, () => {
  console.log(`server listen port: ${port}`)
})