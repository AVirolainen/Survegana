const {Schema, model, Types} = require("mongoose")


/**
 * Answer model for integration with mongodb
 * @name AnswerModel
 * @const
 * @global
 */

const schema = new Schema({
    surveyId: {type: String},
    answers: {type: Object}
    
})

module.exports = model("Answer", schema)