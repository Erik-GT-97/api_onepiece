import Crew from './crews.model.js'

class CrewController{
    constructor(){}

    async getCrews(){
        return Crew.find({})
    }

    async createCrew(crew){
        return new Crew(crew).save()
    }
}

export default CrewController