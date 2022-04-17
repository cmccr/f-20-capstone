const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const { getHome, postHomeHandler, deletHomeHandler } = require('./controllers/homesController.js')
const { getAgentHandler } = require('./controllers/agentController.js')

app.use(cors());
app.use(express.json());

app.use(express.static("public"))
app.use(express.static("files"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/'))
})

app.get('/api/home', getHome)
app.get('/api/agent', getAgentHandler)
app.post('/api/home', postHomeHandler)
app.delete('/api/home', deletHomeHandler)

const PORT = process.env.PORT || 4005

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})