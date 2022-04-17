const agents = [
    {
        id: 1,
        name: "Hannah McCrory",
        email: "hannahmccrory@kw.com",
        phoneNumber: 8016088518,
        hours: "9:00am-5:30pm MTN"
    },

    {
        id: 2,
        name: "Shane Polevoi",
        email: "shanepolevoi@kw.com",
        phoneNumber: 8016319954,
        hours: "9:00am-5:30pm MTN"
    },

]

let globalHomeId = 3

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
    }
}