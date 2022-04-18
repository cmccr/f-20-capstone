const { default: axios } = require("axios")

const contactYourAgentBtn = document.querySelector("#contact")
const buyerBtn = document.querySelector("#buy")
const listBtn = document.querySelector("#sell")

const baseURL = 'http://localhost:4005/api/agent'

function getAgentInfo () {
    axios.get(`${baseURL}/`)
    .then(res => {
        
    })
}

function buyHome () {
    axios.get(`${baseURL}/`)
    .then(res => {

    })
}

function listHome () {
    axios.post(`${baseURL}/`)
    .then(res => {

    })
}


contactYourAgentBtn.addEventListener('click', getAgentInfo)
// buyerBtn.addEventListener('click', buyHome)
// listBtn.addEventListener('click', listHome)