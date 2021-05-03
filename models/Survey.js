const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    title: {type: String, required: true, unique:true},
    pages: {type: Array, required: true},
    answers: {type: Array}
    
})

module.exports = model("Survey", schema)