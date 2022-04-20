const contactYourAgentBtn = document.querySelector("#contact")
const buyerBtn = document.querySelector("#buy")
const listBtn = document.querySelector("#sell")
const displayContainer = document.querySelector("#display-container")
const sellerForm = document.querySelector('#seller-form')
const baseURL = 'http://localhost:4005'


function getAgentInfo () {
    axios.get(`${baseURL}/api/agent`)
    .then(res => {
        displayContainer.innerHTML = ""
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
        displayContainer.innerHTML = ""
        res.data.map(home => {
            let displayDiv = document.createElement('div')
            displayDiv.classList.add('card');
            displayDiv.style.width = '20rem';
            displayDiv.innerHTML = `
            <div class = 'card-body bg light'>
            <h7 class = 'card-title'>Listed Homes</h7>
            <img src = ${home.img} style="height: 10rem;" class = 'home-photo-top' alt = "home photo"/>
            <h8 class = 'card-subtitle'>${home.address}</h8>
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
    evt.preventDefault()
    console.log("hit")
    let homeSeller = document.querySelector('#home-seller-name')
    let homePhone = document.querySelector('#hoome-seller-phone')
    let homeAddress = document.querySelector('#home-address')
    let homePrice = document.querySelector('#home-price')
    let homeImg = document.querySelector('#home-image')
    let homeSqFt = document.querySelector('#home-sqft')
    let homeLs = document.querySelector('#home-ls')
    let homeBeds = document.querySelector('#home-beds')
    let homeBaths = document.querySelector('#home-baths')
    let body = {
        img: homeImg.value,
        address: homeAddress.value,
        price: homePrice.value,
        squareFeet: homeSqFt.value,
        lotSize: homeLs.value,
        bedrooms: homeBeds.value,
        bathrooms: homeBaths.value
    }
    axios.post(`${baseURL}/api/home`,body)
    .then(res => {
        img: homeImg.value = ""
        address: homeAddress.value = ""
        price: homePrice.value = ""
        squareFeet: homeSqFt.value = ""
        lotSize: homeLs.value = ""
        bedrooms: homeBeds.value = ""
        bathrooms: homeBaths.value = ""
        console.log(res.data)
        alert(res.data)
    })
}
if(sellerForm) {
    sellerForm.addEventListener('submit', listHome)
}
if(contactYourAgentBtn) {
    contactYourAgentBtn.addEventListener('click', getAgentInfo)
}
if(buyerBtn) {
    buyerBtn.addEventListener('click', buyHome)
}
