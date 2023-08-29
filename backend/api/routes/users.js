const express = require('express')
const router = express.Router()
const fs = require("fs")
const https = require('https')
const { json } = require('body-parser');

const User = require('../models/user');

router.get('/user', (req, res) => {
     let userId = req.query.id
     console.log(userId)
     User.find().exec().then(result => {
          // result is an array of users
          res.json({ status: "success", users: result })
     })
          .catch(err => {
               res.json({ status: "fail", message: err })
          })

})
router.post('/user', (req, res) => {
     console.log(req.body.id)
})





module.exports = router;