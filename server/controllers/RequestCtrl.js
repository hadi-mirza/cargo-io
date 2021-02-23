let importDetails = require("../models/pickupDetail.js")

async function allRequests(req,res) {
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

async function addRequest(req,res) {
    console.log(req.body)
    console.log(req.body.itemType)
    try {
        await importDetails.create({
            when: req.body.when,
            pickupType: req.body.pickupType,
            itemType: req.body.itemType,  
            itemDesc: req.body.itemDesc,
            date: req.body.date
        })
        res.json({message: "added a pickup detail"})
    } catch(error) {
        console.log(error)
        res.json({error: 'error adding request'})
    }
    
}

module.exports = {
    allRequests,
    seed,
    addRequest,

}