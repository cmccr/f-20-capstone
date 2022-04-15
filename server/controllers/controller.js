const homes = [
    {
        id: 1,
        address: "4608 S 2675 W Roy, UT 84067",
        price: "$380,000",
        squareFeet: 1808,
        lotSize: ".19 acres",
        bedrooms: 4,
        bathrooms: 2
    },

    {
        id: 2,
        address: "1047 Boston Ct. North Salt Lake City, UT 84054",
        price: "$675,000",
        squareFeet: 2738,
        lotSize: ".33 acres",
        bedrooms: 5,
        bathrooms: 3
    },

    {
        id: 3,
        address: "1408 Binford St. Ogden, UT 84401",
        price: "$595,000",
        squareFeet: 2376,
        lotSize: ".95 acres",
        bedrooms: 5,
        bathrooms: 3
    },

    {
        id: 4,
        address: "5121 S 1950 W Roy, UT 84067",
        price: "$385,000",
        squareFeet: 2104,
        lotSize: ".21 acres",
        bedrooms: 5,
        bathrooms: 2
    },

    {
        id: 5,
        address: "66 W 200 N American Fork, UT 84003",
        price: "$340,000",
        squareFeet: 1124,
        lotSize: ".26 acres",
        bedrooms: 2,
        bathrooms: 1.5
    }
]

let globalHomeId = 6

module.exports = {

    getAgentHandler: (req, res) => {
        res.status(200).send(agents)
    },

    getHome: (req, res) => {
        res.status(200).send(homes)
    },
    postHomeHandler: (req, res) => {
        let newHome = req.body
        newHome.id = globalHomeId
        if (!("address" in newHome) || newHome.address == "") {
            res.status(400).send()
            return
        }
        homes.push(newHome)
        globalHomeId += 1
        res.status(200).send(homes)
    },

    deletHomeHandler: (req, res) => {
        const home = homes.filter(e => {
            return e.id === req.params.id
        })
        homes.splice(home, 1)
        res.status(200).send(homes)
    }
}