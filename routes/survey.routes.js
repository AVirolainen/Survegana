const {Router} = require('express')
const Survey = require("../models/Survey")
const User = require("../models/User")
const router = Router()

router.post("/:id", async(req, res)=>{
    try{
        const {info} = req.body
        await Survey.aggregate([
            {$match: {_id: info.id}},
            {$addFields : {$concatArrays : ["$homework", [info]]}}
        ])


    }
    catch (e) {
        res.status(500).json({message : "Something is wrong "})
    }
})

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