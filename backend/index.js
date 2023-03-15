require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = 3600

connectDB()

app.use(cors(corsOptions))

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Credentials', true);
    next();
})

app.use(express.json())

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/users', require('./routes/userRoutes'))
app.use('/dash', require('./routes/dashRoutes'))

app.all('*', (req, res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }
    else if(req.accepts('json')){
        res.json({message: '404 Not Found'})
    }
    else{
        res.type('txt'.send('404 Not Found'))
    }
})
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
})
app.listen(PORT, () => console.log(`Server running: ${PORT}`))