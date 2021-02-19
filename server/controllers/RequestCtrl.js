let importDetails = require("../models/pickupDetail.js")

async function pickupDetails(req,res) {
    try {
        let pickupList = await importDetails.find({})
        res.json(pickupList)
    } catch {
        res.json({error: err})
    }
}

async function seed(req,res) {
    try {
        await importDetails.create({
            when: 'now',
            pickupType: 'retail',
            itemType: 'groceries',  
            itemDesc: 'Cheese,Milk,Eggs',
            date: '2021-03-15'
        })
        res.json({message: "added a pickup detail"})
    } catch(error) {
        res.json({error: 'error seeding'})
    }
}

module.exports = {
    pickupDetails,
    seed
}