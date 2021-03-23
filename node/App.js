var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
const path = require('path')

var app = express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './Login.html'))
})


//mongodb connection

url = 'mongodb+srv://narenderbisht:narender1996@cluster0.skonu.mongodb.net/record?retryWrites=true&w=majority';



mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

// const userSchema=mongoose.Schema({
//     name:{
//         type: String,
//         required: true,
//         maxlength: 100
//     },

//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         unique: 1
//     },
//     address:{
//         Type:String,
//         //  maxlength:100
//     },

//     password:{
//         type:String,
//         required: true,

//     },
//     password2:{
//         type:String,
//         required: true,
//     }

// });


//post call
app.post('/sign_up', async function (req, res) {
    var pass = req.body.password;
    var cpass = req.body.password2;

    if (pass == cpass) {
        console.log("password match")

        var name = req.body.name;
        var email = req.body.email;
        var address = req.body.address;
        var password = req.body.password;
        var password2 = req.body.password2;

        var data = {
            "name": name,
            "email": email,
            "address": address,
            "password": password,
            "phone": password2
        }

        db.collection('Data').insertOne(data, (err, collection) => {
            if (err) throw err;
            console.log("record insert ")
            console.log(collection)
        });
        return res.sendFile(path.join(__dirname, 'Login.html'))
    }

    else {
        console.log("password not match")
        res.end();
    }
})

//login call
app.post('/login', async (req, res) => {
    try {
        var email = req.body.email;
        var password = req.body.password;
        console.log(`${email} and ${password}`)
        
        var usermail = await db.collection('Data').findOne({ email:email })
        console.log(usermail);
        if (usermail.password === password) {
            res.status(201).send(`  <h1>welcome ${usermail.name}</h1>`)
        } else {
            res.send("password are not same")
        }
    } catch (error) {
        res.status(400).send(error)

    }

})
//get Data
app.get('./getdata',(req,res)=>{
     db.collection('Data').find({},(err,data)=>{
        if(err){
            res.send(err)
        }
        else{console.log(data)}
    })
})


app.listen(3002, () => { console.log("start port") })
