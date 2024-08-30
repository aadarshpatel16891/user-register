const mongoose = require('mongoose');
const userschema=new mongoose.Schema({
    name:[{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }],
    email:[{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }],
    password:[{
        type:String,
        required:true,
        minlength:[5,"min length should be 5"],
        maxlength:50,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    }],
   
});

module.exports = mongoose.model('User',userschema);