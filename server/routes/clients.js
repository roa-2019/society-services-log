const express = require('express')

const { decodeToken } = require('authenticare/server')

const db = require('../db/db')

const router = express.Router()

module.exports = router

// GET /api/v1/clients
router.get('/', (req, res) => {

  return db.getClients()
  .then(clients => {
    res.json({ clients })
  })
    .catch ((err) => {
    res.status(500).send(err.message)
  })
})

// POST /api/v1/clients
router.post('/', (req, res) => {
  const newClient = req.body
  console.log(newClient)

    .then(result => res.json({ result }))


})


// // PUT /api/v1/clients
// router.put('/', (req, res) => {
//   const newClient = req.body
//   try {
//     const clients = db.updateClient(newClient)
//     res.json({ clients })
//   } catch (err) {
//     res.status(500).send(err.message)
//   }
// })

