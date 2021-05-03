const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    surveyId: {type: String},
    answers: {type: Object}
    
})

module.exports = model("Answer", schema)