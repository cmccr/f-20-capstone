const homes = [
    {
        id: 1,
        img: "https://mail.google.com/mail/u/0?ui=2&ik=47aeb768ad&attid=0.3&permmsgid=msg-f:1730489360480050533&th=1803eee7a3019d65&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-xPEwS4znFEa-I7sclmmU_yJ59_80w3dzKXZU6QnHESvogbc90lnS6XqykRBZsfkepc8G3OxsN3b-kgYq-8CYIXL5nDdMPxbbOUcVI9-6ylLAEotfVkYJIxow&disp=emb&realattid=ii_l25bs5sr2",
        address: "4608 S 2675 W Roy, UT 84067",
        price: "$380,000",
        squareFeet: 1808,
        lotSize: ".19 acres",
        bedrooms: 4,
        bathrooms: 2
    },

    {
        id: 2,
        img: "https://mail.google.com/mail/u/0?ui=2&ik=47aeb768ad&attid=0.2&permmsgid=msg-f:1730489360480050533&th=1803eee7a3019d65&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ83u62owv58LKuYBgQaE9IkmoNHXcIiT8STJMJ8bcC_DCySACVR74sd1x3DFmn3v5g9tSVI3Zx-yFs_dEF7gVpHpLHomtfSmF-5Oa_MVDS-Yr6H18AuGyUyNiY&disp=emb&realattid=ii_l25brbch1",
        address: "1047 Boston Ct. North Salt Lake City, UT 84054",
        price: "$675,000",
        squareFeet: 2738,
        lotSize: ".33 acres",
        bedrooms: 5,
        bathrooms: 3
    },

    {
        id: 3,
        img: "https://mail.google.com/mail/u/0?ui=2&ik=47aeb768ad&attid=0.1&permmsgid=msg-f:1730489360480050533&th=1803eee7a3019d65&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_84f8LHkypUbRlc3skQtUzM3QG7gc22aUyisdyJ90BQA9bw0XaXJHn9MkC99EsloF77OvE-NumBPMEA6kpu3yBgCYeTSLJXBau1RgywzXuVHxkojd-FB2l-fE&disp=emb&realattid=ii_l25bqo8d0",
        address: "1408 Binford St. Ogden, UT 84401",
        price: "$595,000",
        squareFeet: 2376,
        lotSize: ".95 acres",
        bedrooms: 5,
        bathrooms: 3
    },

    {
        id: 4,
        img: "https://mail.google.com/mail/u/0?ui=2&ik=47aeb768ad&attid=0.5&permmsgid=msg-f:1730489473741295469&th=1803ef0201e70f6d&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-R4DnV9YW9wifmb8KwpZTk4H2mwg2RSRIXPp5Ft8emYcng2NwJhKwysW_Yhzvpn2O4jwfKvc8ZdpG2kk3XO_n3iUwEzLYVdOfubkJb8j-pLOXndO-ayS4k5DY&disp=emb&realattid=ii_l25bwsxp4",
        address: "5121 S 1950 W Roy, UT 84067",
        price: "$385,000",
        squareFeet: 2104,
        lotSize: ".21 acres",
        bedrooms: 5,
        bathrooms: 2
    },

    {
        id: 5,
        img: "https://mail.google.com/mail/u/0?ui=2&ik=47aeb768ad&attid=0.4&permmsgid=msg-f:1730489360480050533&th=1803eee7a3019d65&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9cARIcTnC43DwnwHebcQ5QU9wRjnSuUW9R9iIcjVYCNYGH9_bIAQhQE8Np7CWKPcYsAzSa47uRSgINxi5S36Nh3tNR6iMcDepLPS7D-4IOpuxMLhrKjMQ-3C4&disp=emb&realattid=ii_l25buia53",
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