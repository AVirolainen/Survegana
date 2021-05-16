const {Router} = require('express')
const Survey = require("../models/Survey")
const User = require("../models/User")
const Answer = require("../models/Answer")
const router = Router()



router.post("/*", async(req, res)=>{
    try{
        const {info} = req.body
        console.log(info)
        const answer = new Answer({
            surveyId: info.id,
            answers: info
        })
        await answer.save()

        res.status(201).json({ answer })
    }
    catch (e) {
        res.status(500).json({message : "Something is wrong "})
    }
})

/**
 * Router (Get) that makes request to database to get available surveys
 * @name GetRouter
 * @function
 * @global
 */
router.get("/", async(req, res)=>{
    try{
        const surveys = await Survey.find()
        res.json(surveys)
    }
    catch (e) {
        res.status(500).json({message : "Something is wrong "})
    }
})

module.exports = router;