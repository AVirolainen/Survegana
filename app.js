const express = require('express')
const config = require("config")
const mongoose = require("mongoose")

const app = express()
const PORT = config.get("port") || 5000

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/survey', require('./routes/survey.routes'))
app.use('/api/create', require('./routes/create.routes'))
app.use('/api/answers', require('./routes/answer.routes'))


/** This function starts the server and connect database */
  async function start(){
    try{
      await mongoose.connect(config.get("mongoUri"), {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
      })
      app.listen(PORT, () => { console.log(`Example app listening at http://localhost:${PORT}`)})
    }catch(e){
      console.log("Server error", e.message)
      process.exit(1)
    }
  }

 start()



module.exports = app;

