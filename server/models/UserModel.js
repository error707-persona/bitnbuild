const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    
    username:{
        type: String,
        required:true 
    },
    password: {
            type: password,
            required:true 
    }
    
});

module.exports = mongoose.model('User', dataSchema); //change according to schema name 

