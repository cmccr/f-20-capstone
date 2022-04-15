const express = require('express')
const cors = require('cors')
const app = express()
const { getHome, postHomeHandler, deletHomeHandler } = require('./controllers/controller.js')
const { getAgentHandler } = require('./controllers/agentController')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/api/home', getHome)
app.get('/api/agent', getAgentHandler)
app.post('/api/home', postHomeHandler)
app.delete('/api/home', deletHomeHandler)





app.listen(4004, () => console.log("Up on port 4004"))