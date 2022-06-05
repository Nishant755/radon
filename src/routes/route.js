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

router.get('/movies:indexnumber', function (req, res) {
     let array=["‘Rang de basanti, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’"]
  let  funct=req.params.indexnumber
       
let final=""
        if(funct<array.length){
            final =array[funct]
            }
            else{
            final=("Does not Exist")}
    console.log(array.length)
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movie name is '+req.params.indexnumber)
    console.log(".........2 and 3........")
    res.send(final)
});


   
router.get('/film', function(req, res){
    // Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
let a=[ {
    id:"1",
    name: "“The Shining”"
   }, {
    id:" 2",
    name: "Incendies"
   }, {
    id:" 3",
    name: "“Rang de Basanti”"
   }, {
    id: 4,
    name: "“Finding Nemo”"
   }]
   
res.send(a)   
    
})

router.get(' /films/:filmId', function(req, res){
    // Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
    // {
    //  “id”: 3,
    //  “name”: “Rang de Basanti”
    // }
    // Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
    let a=[ {
        id:"1",
        name: "“The Shining”"
       }, {
        id:" 2",
        name: "Incendies"
       }, {
        id:" 3",
        name: "“Rang de Basanti”"
       }, {
        id: 4,
        name: "“Finding Nemo”"
       }]
     let  funct=req.params.filmId
       
let final=""
        if(funct<a.length){
            final =a[funct]
            }
            else{
            final=("Does not Exist")}
    console.log(a.length)
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movie name is '+req.params.filmId)
    console.log(".........5........")
    res.send(final)
});



module.exports = router;
// adding this comment for no reason