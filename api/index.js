const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const crewRouter = require('./routes/crews.routes')

dotenv.config()

const app = express()

app.use(bodyParser.json({
    limit: "30mb"
}))
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}))

app.use('/api/crews', crewRouter)

app.use(cors())

app.get('/api', ( req, res) => {
    res.send('Hello API ONEPIECE')
})


const port = process.env.PORT || 5000 

mongoose.connect(process.env.CONNECTION_URL , { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => app.listen(port , () => console.log(`Sever running on port : ${port}`)))
  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)

