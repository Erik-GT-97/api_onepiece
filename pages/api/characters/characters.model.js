import mongoose from 'mongoose'

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    image: {
        type: String,
        minlength: 1,
        required: [true, 'La imagen es requerida']
    },
    gender: {
        type: String,
        minlength: 1
    },
    reward: {
        type: Number,
        min: 0
    },
    fruit_name: {
        type: String,
        minlength: 1,
    },
    fruit_type: {
        type: String,
        minlength: 1
    },
    race: {
        type: String,
        minlength: 1
    },
    rank :{
        type: String,
        minlength :1 
    },
    status: {
        type: String,
        minlength: 1
    },
    origin: {
        type: String,
        minlength: 1
    },
    occupation : {
        type: String,
        minlength: 1
    },
    description: {
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

const characterModel  =  mongoose.model('characters', characterSchema)

export default characterModel