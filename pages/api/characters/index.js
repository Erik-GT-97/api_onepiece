import connectDB from '@database'
import CharacterController from './characters.controller'
const characterController = new CharacterController()

const handler = async (req,res) => {

    if(req.method === 'GET'){
        const data = await characterController.getCharacters()
        return res.status(200).json(data)
    }
    if(req.method === 'POST'){
        return res.status(201).json({
            message : 'prueba character'
        })
    }
}

export default connectDB(handler)