const contactYourAgentBtn = document.querySelector("#contact")
const buyerBtn = document.querySelector("#buy")
const listBtn = document.querySelector("#sell")
const displayContainer = document.querySelector("#display-container")
const baseURL = 'http://localhost:4005'


function getAgentInfo () {
    axios.get(`${baseURL}/api/agent`)
    .then(res => {
        res.data.map(agent => {
           let displayDiv = document.createElement('div');
           displayDiv.classList.add('card');
           displayDiv.style.width = '20rem';
           displayDiv.innerHTML = `
           <img src='${agent.img}' class = 'card-img-top' alt = 'agents photo'/>
           <div class = 'card-body bg-light'>
           <h3 class = 'card-title'>${agent.name}</h3>
           <h6 class = 'card-subtitle mb-2 text-muted'>${agent.email}</h6>
           <p class = 'card-text'> ${agent.phoneNumber}</p>
           <p class = 'card-text'>${agent.hours}</p>
           <p class = 'card-text'>${agent.bio}</p>
           </div>
           `
           displayContainer.appendChild(displayDiv)
        })
    })
    .catch(err => {
        console.log(err)
    })
}

function buyHome (evt) {
    axios.get(`${baseURL}/api/home`)
    .then(res => {
        res.data.map(home => {
            let displayDiv = document.createElement('div')
            displayDiv.classList.add('card');
            displayDiv.style.width = '20rem';
            displayDiv.innerHTML = `
            <div class = 'card-body bg light'>
            <h7 class = 'card-title'>Listed Homes</h7>
            <img src = ${home.img} class = 'home-photo-top' alt = "home photo"/>
            <h8 class = 'card-subtitle'>${home.address}</h8
            <p class = 'card-text'>Price - ${home.price}</p>
            <p class = 'card-text'>Squ-Ft - ${home.squareFeet}</p>
            <p class = 'card-text'>Lot-Size - ${home.lotSize}</p>
            <p class = 'card-text'>Beds - ${home.bedrooms}</p>
            <p class = 'card-text'>Baths - ${home.bathrooms}</p>
            `
            displayContainer.appendChild(displayDiv)
        })
    })
    .catch(err => {
        console.log(err)
    })
}

function listHome (evt) {
    axios.post(`${baseURL}`)
    .then(res => {
        res.data.map(sellHome => {
            let displayDiv = document.createElement('div');
            displayDiv.classList.add('card');
            displayDiv.style.width = '100vh';
            displayDiv.innerHTML = `
            
            `
        })
    })
    .catch(err => {
        console.log(err)
    })
}


contactYourAgentBtn.addEventListener('click', getAgentInfo)
buyerBtn.addEventListener('click', buyHome)
// listBtn.addEventListener('click', listHome)