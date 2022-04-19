const agents = [
    {
        id: 1,
        name: "Hannah McCrory",
        email: "hannahmccrory@kw.com",
        phoneNumber: 8016088518,
        hours: "9:00am-5:30pm MTN",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQEVH_c7mCvIWA/profile-displayphoto-shrink_200_200/0/1608063062745?e=1652918400&v=beta&t=Rne43SZy4onxYhb6stxtEVAoY7lt85293fTqz58qfas",
        bio: "My background starts with Property & Casualty Insurance. I wanted to help people protect their biggest asset, yet that wasn't enough. I wanted to make sure my clients were protected from the beginning when looking for their dream home, to owning it and keeping ownership. My clients are so satisfied with my work that they love to let everyone know why you should work with me1 They are happy to take your phone call and answer your questions about how I will be the best real estate agent that you will forever work with. I can't wait to be your realtor for life!"
    },

    {
        id: 2,
        name: "Shane Polevoi",
        email: "shanepolevoi@kw.com",
        phoneNumber: 8016319954,
        hours: "9:00am-5:30pm MTN",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQElN8O8l4-s_w/profile-displayphoto-shrink_200_200/0/1553688822532?e=1652313600&v=beta&t=VXRdiKRPiM6QgWvBHVuMwwsMoA3xpuMCX0kFn6taQvk",
        bio: "Clients come first. I pledge to be in constant comminication with you, keeping you fully informed throughout the entire selling/buying process. I haven't done my job if I haven't left you with an amazing experience. I'm a top producing salesman on our team with over 18 years of experience. Making sure you have a smooth and clean process getting you into your next chapter. Specializing in selling not listing, sold 100% of homes listed in 2015, 2016, 2017, 2018, and 2019. Can't wait to hear from you!"
    },

]

let globalHomeId = 3

module.exports = {

    getAgentHandler: (req, res) => {
        res.status(200).send(agents)
    }
}