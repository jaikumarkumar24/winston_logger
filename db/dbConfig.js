const mongoose = require('mongoose');
const express = require('express');
var router = express.Router();

var bookmodel = require('../models/book');
var StudentModel = require('../models/student');

var mongoDB = 'mongodb://localhost:27017/demo';
const db = mongoose.connect(mongoDB,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{ console.log("connected"); })
.catch((err)=>{ console.log(err); });

//hardcode insert
router.get('/save',(req,res)=>{
    var newStudent = new StudentModel({StudentId:101, 
        Name:"Jai", Roll:2, Birthday:2001-09-08});

        newStudent.save(function(err,data){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Data inserted");
        }
    })
});

router.post('/book_save',(req,res)=>{

     var newStudent = new StudentModel();
    newStudent.StudentId = req.body.StudentId;
    newStudent.Name = req.body.Name;
    newStudent.Roll=req.body.Roll;
    newStudent.Birthday=req.body.Birthday;

    newStudent.save(function(err,data){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Data inserted");
        }
    }) 
    
})

module.exports = router;