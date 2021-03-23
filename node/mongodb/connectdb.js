// const mongoose= require("mongoose");

// url='mongodb+srv://narenderbisht:narender1996@cluster0.skonu.mongodb.net/employee?retryWrites=true&w=majority';


// const createConnection= async()=>{
//     await mongoose.connect(url,{useNewUrlParser,useCreateIndex})
//     .then(()=>{console.log('connect')})
//     .catch(err=>{console.error('not connect',err)})
// }

// const userSchema=mongoose.Schema({
//     firstname:{
//         type: String,
//         required: true,
//         // maxlength: 100
//     },
  
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         unique: 1
//     },
//     address:{
//         Type:String,
//         required:true,
//         maxlength:100
//     },
    
//     password:{
//         type:String,
//         required: true,
//         minlength:8
//     },
//     password2:{
//         type:String,
//         required: true,
//         minlength:8

//     }
  
// });

// const Data=mongoose.model('record',userSchema)
// async function createrecord(){
//     const data=new Data({
//         name:'narender',
//         email:'narenbder007bisht@gmail.com ',
//         address:'hn0 27 mdu',
//         password:'121232121',
//         conform_password:'213232112'
//     });
//     const result= await data.save();
//     console.log(result)
// }

// createrecord();


