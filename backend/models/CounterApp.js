const mongoose = require('mongoose')

const counterSchema = mongoose.Schema({
    value :{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Counter",counterSchema)