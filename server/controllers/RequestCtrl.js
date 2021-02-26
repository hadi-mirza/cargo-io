let importDetails = require("../models/pickupDetail.js")
let importUsers = require("../models/user")
const jwt = require('jsonwebtoken')
let SECRET = process.env.SECRET

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
    let token = req.headers.authorization
    token = token.split(' ')[1]
    let decoded = jwt.verify(token, SECRET)
    req.user = decoded.user._id
    // console.log(req.user)

    try {
        let newRequest = await importDetails.create({
            when: req.body.when,
            pickupType: req.body.pickupType,
            itemType: req.body.itemType,  
            itemDesc: req.body.itemDesc,
            date: req.body.date,
            pickupLocation: req.body.pickupLocation
        })
        let newDoc = await newRequest.save()
        let currentUser = await importUsers.findById(req.user)
        currentUser.requests.push(newRequest._id)
        // console.log(currentUser.requests)
        currentUser.save()
        res.json({message: "added a pickup detail", newDoc} )
    } catch(error) {
        console.log(error)
        res.json({error: 'error adding request'})
    }
    
}

async function show(req,res) {
    console.log('controller hit')
// try {
//     const pickupDetail = await importDetails.findById(req.params.id);
//     res.json(pickupDetail)
// } catch {
//     res.json({error: err})
// }
}

module.exports = {
    allRequests,
    seed,
    addRequest,
    show,
}