const {Router} = require('express')
const Survey = require("../models/Survey")
const User = require("../models/User")
const Answer = require("../models/Answer")
const router = Router()

router.get("/*", async(req, res)=>{
    try{
        const surveys = await Answer.find()
        res.json(surveys)
    }
    catch (e) {
        res.status(500).json({message : "Something is wrong "})
    }
})

/** Get request */
const a = ()=>{
    return 0
}
module.exports = router;