const Crew = require('../models/crews.model')

function createCrew(crew){
    return new Crew(crew).save()
}

function getCrews(){
    return Crew.find({})
}

module.exports = {
    createCrew,
    getCrews
}