const express = require('express')
const cors = require('cors')
const app = express()
const port =

app.use(cors());
app.use(express.json());

app.get(,getHome)
app.post(,listHome)




app.listen(4004, () => console.log("Up on port 4004"))