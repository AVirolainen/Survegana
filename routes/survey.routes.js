const {Router} = require('express')
const Survey = require("../models/Survey")
const router = Router()

router.get("/", async(req, res)=>{
    try{
        const tests = await Survey.find()
        res.json(tests)
    }
    catch (e) {
        res.status(500).json({message : "Something is wrong "})
    }
})

router.get("/:id", async (req, res)=>{
    try{
        const surveys = await Survey.find()
        res.json(surveys)
    }
    catch (e) {
        res.status(500).json({message : "Something is wrong "})
    }
})

module.exports = router;