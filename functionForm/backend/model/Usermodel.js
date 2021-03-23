const mongoose= require("mongoose");
const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
         maxlength: 100
    },
  
    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    address:{
        Type:String,
        
         
        // maxlength:100
    },
    
    password1:{
        type:String,
        required: true,
        minlength:8
    },
    password2:{
        type:String,
        required: true,
        minlength:8

    }
  
});

module.exports=User=mongoose.model('record',userSchema)



