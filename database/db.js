import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = handler =>  async (req,res) => {
    if(mongoose.connections[0].readyState){
        //Use current db connection 
        return handler(req,res)
    }
    //Use new db connection
    await mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useNewUrlParser: true
    })

    return handler(req,res)
}

export default connectDB