const {Schema, model, Types} = require("mongoose")

/**
 * Survey model for integration with mongodb
 * @name SurveyModel
 * @const
 * @global
 */
const schema = new Schema({
    title: {type: String, required: true, unique:true},
    pages: {type: Array, required: true},
})

module.exports = model("Survey", schema)