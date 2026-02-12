const express = require('express');
const cors = require("cors");
const app = express()

require("dotenv").config();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

const router = require('./router/counterRoute')

app.use('/api/counter',router)

app.listen(PORT,()=>{
    console.log('server is runnig')
})

const mongoDB = require('./config/database')

mongoDB()