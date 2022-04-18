const agents = [
    {
        id: 1,
        name: "Hannah McCrory",
        email: "hannahmccrory@kw.com",
        phoneNumber: 8016088518,
        hours: "9:00am-5:30pm MTN",
        img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60",
        bio: ""
    },

    {
        id: 2,
        name: "Shane Polevoi",
        email: "shanepolevoi@kw.com",
        phoneNumber: 8016319954,
        hours: "9:00am-5:30pm MTN",
        img: "https://images.unsplash.com/photo-1599229526921-4f29d42b0b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGllcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        bio: ""
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