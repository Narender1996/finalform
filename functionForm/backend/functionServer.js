var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
const path = require('path')
const cors=require('cors')
const User=require('./model/Usermodel');


var app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

//mongodb connection
url='mongodb+srv://narenderbisht:narender1996@cluster0.skonu.mongodb.net/Data?retryWrites=true&w=majority';
 mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex:true})
    .then(()=>{console.log('Database is connected')})
    .catch(err=>{console.error('Eror',err.message)})

//post call
app.post('/sign_up', async function (req, res) {

    const newUser= new User({
        name:req.body.Name,
        email:req.body.Email,
        address:req.body.Address,
        password1:req.body.Password1,
        password2:req.body.Password2
    })
    console.log(newUser)

    await User.findOne({name:newUser.name})
    .then(async profile=>{
        if(!profile){
            await newUser.save()
            .then(()=>{res.status(200)
                .send({status:200,msg:newUser})
            })
            .catch(error=>{res.status(404).send(error)})
        }
    else{
        console.log("user already exixts")
        res.send("user already exixts")      
    }  
})
.catch(error=>{res.static(404).send(error.message)
});
});
 
//login call
app.post('/login', async (req, res) => {
    console.log(req.body)
  const newUser= new User({
      email:req.body.email,
      password1:req.body.password1
  })
  console.log(newUser)
  await User.findOne({email:newUser.email})
  .then(profile=>{
      if(!profile){
          console.log("user not found")
          res.status(404).send({status:404,msg:"user not found"})
      }
      else{
          if(profile.password1==newUser.password1){
              console.log("user match")
              res.status(200).send({status:200,msg:"user found"})
          }
          else{
              console.log("user not match")
              res.status(404).send({status:404,msg:"user not found"})
          }
      }
  })
  .catch(error=>{res.send(error.message)})
})


//react call

app.get('/formdata/sign_up', (req,res)=>{
    console.log("hsdfhsdfhjklsd called===")
    User.find()
    .then(result=>{
        console.log("data send",result)
        res.status(200).send({formdata:result, msg:"data recived" })

    })
    .catch((err)=>{
        console.log("data failed")
        res.status(404).send({status:404,msg:"data failed"})
    })
    })

app.listen(3001,() => { console.log("start port") })
