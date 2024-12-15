
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
require('dotenv').config()

const studentRoutes = require('./routes/user-routers');

const app = express()

app.use(cors())
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded)()
app.use('/api', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server run at http://localhost:${PORT}`);
    
})