const mongoose = require('mongoose')

const crewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    quantity: {
        type: Number,
        min: 0,
        required: [ true,'La cantidad es requeridad']
    },
    image: {
        type: String,
        minlength: 1,
        required : [true, 'La imagen es requerida']
    },
    ship_name: {
        type: String,
        minlength: 1,
    },
    ship_image: {
        type: String,
        minlength: 1
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
})

module.exports = mongoose.model('crews', crewSchema)