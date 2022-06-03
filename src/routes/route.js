const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash=require("lodash")

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});
    router.get('/day12', function (req, res) {
        const array =["jan","feb","march","april","may","june","july","august","septemb","oct","nov","dec"]
        console.log(lodash.chunk(array,4))
        console.log(".................1..................")
        const array1 = [1,3,5,7,9,11,13,15,17,19]
        console.log(lodash.tail(array1))
        console.log(".................2..................")
        const a =[50,51]
        const b =[52,53]
        const c =[54,55]
        const d =[56,57]
        const e =[58,59]
        console.log(lodash.union(a,b,c,d,e))
        console.log(".................3..................")
         res.send('Hello User!!')
     });
router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason