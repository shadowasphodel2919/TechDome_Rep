const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Udemy = require('udemy-api')
const careerjet = require('careerjet')

const courses = asyncHandler(async(req, res)=>{
    console.log("Hello"+req.body);
    const {field} = req.body;
    if(!field)
    return res.status(400).json({message: 'All fields required'})
    console.log("Searching courses for"+field);
    const udemyApiClient = new Udemy(process.env.UDEMYUSER_NAME, process.env.UDEMYPASS_WORD);
    udemyApiClient.get(`courses/?page=1&page_size=10&search=${field}`, 
    function(err, res1, body) {
        if(err) return console.error(err);
        // console.log(body);
        res.send(body);
    });
})

const jobs = asyncHandler(async(req, res)=>{
    const {location, field} = req.body

    if(!location || !field)
    return res.status(400).json({message: 'All fields required'})

    console.log("Searching jobs in location"+location);

    const careerjetAPI = new careerjet({locale:'en_GB', affid: process.env.CAREERJET_AFF_ID, user_ip: '127.0.0.1', user_agent: 'internetexplorer'});
  
    careerjetAPI
        .location(location)
        .keywords(field)
        .query(
          function (results) {
            // do something with the success results
            res.send(results);
            console.log(results);
        },
        function (error) {
            // do something with the error results
            console.error(error);
      }
    );
})

module.exports = {
    courses,
    jobs
}