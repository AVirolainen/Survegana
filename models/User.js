const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    surveys: [{type: Types.ObjectId, ref:"Surveys"}]

})

module.exports = model("User", schema)