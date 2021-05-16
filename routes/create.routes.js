const {Router} = require('express')
const Survey = require("../models/Survey")
const User = require("../models/User")
const Answer = require("../models/Answer")
const router = Router()

/**
 * Router (POST) that makes request to database to create survey
 * @name CreateRouter
 * @function
 * @global
 * @param {object} survey - survey
 */
router.post("/create", async(req, res)=>{
    try{
        const {info} = req.body
        console.log(info)
        const answer = new Survey(info)
        await answer.save()

        res.status(201).json({ answer })
    }
    catch (e) {
        res.status(500).json({message : "Something is wrong "})
    }
})


module.exports = router;