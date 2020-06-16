const express = require('express')
const router = express.Router()

router.get('/',(req,res, next)=>{

    const data = {}

    res.render('home', data)
})

module.exports = router