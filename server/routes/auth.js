const express = require('express')

const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUserByName,
  createUser } = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})


// TODO: create POST routes for /auth/signin and /auth/register

module.exports = router
