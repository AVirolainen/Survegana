const {Schema, model, Types} = require("mongoose")

/**
 * User model for integration with mongodb
 * @name UserModel
 * @const
 * @global
 */
const schema = new Schema({
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    surveys: [{type: Types.ObjectId, ref:"Surveys"}]

})

module.exports = model("User", schema)