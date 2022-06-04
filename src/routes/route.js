const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash=require("lodash")

const router = express.Router();
// Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get('/movies', function (req, res) {
    
    console.log('The request objects is '+ JSON.stringify(req.params))
    array1=["‘Rang de basanti, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’"]
    for(i=0;i<=array1.length;i++){
    console.log(array1[i])
    console.log(".........1........")}
    res.send('Done')
});
// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api
// Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get('/movies/:indexNumber', function (req, res) {
    array1=["‘Rang de basanti, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’"]
    
    for(i=0;i<=array1.length;i++){
        const funct=req.params.indexNumber
let final=""
        if(funct<array[i]){
            final =array1[funct]
            }
            else
            console.log("Does not Exist")
    console.log(array1[i])
    console.log(array1[i].length)}
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movie name is '+req.params.indexNumber)
    console.log(".........2 and 3........")
    res.send('final')
});


   
router.get('/candidates', function(req, res){
    
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason