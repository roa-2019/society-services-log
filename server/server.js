const path = require('path')
const express = require('express')

const authRoutes = require('./routes/auth')
const clientRoutes = require('./routes/clients')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/clients', clientRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
