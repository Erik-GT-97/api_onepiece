import Character from './characters.model'

class CharacterController {
    constructor(){}

    async getCharacters(){
        return Character.find({})
    }

    async createCharacter(character){
        return new Character(character).save()
    }
}

export default CharacterController