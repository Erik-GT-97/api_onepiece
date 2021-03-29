import connectDB from '@database'
import CrewController from './crews.controller'
const crewController = new CrewController()

const handler = async (req,res) => {
    
    console.log(req.method)
    if(req.method === 'GET'){
        const data = await crewController.getCrews()
        return res.status(200).json(data)
    }
    if(req.method === 'POST'){
        return res.status(201).json({
            message : "prueba"
        })
    }
}

export default connectDB(handler)
