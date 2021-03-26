const express = require('express')
const crewController = require('../controller/crews.controller')

const crewRouter = express.Router()

crewRouter.get('/', (req, res) => {
    return crewController.getCrews()
       .then(crews => {
           res.json(crews)
       })
})

crewRouter.post('/', (req, res) => {
    return crewController.createCrew({
        ...req.body,
        created_at: Date.now()
    })
    .then(crew => {
        res.status(201).json(crew)
    })
})

module.exports = crewRouter