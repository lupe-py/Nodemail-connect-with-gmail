const express = require("express");
const ejs = require("ejs");
const path = require('path');
const nodemailer = require("nodemailer");
const app  = express();

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.post('/ad',(req,res)=>{
    var output = `
    <p>You have a new Request</p>
    <h2>Contact Details</h2>
    <ul>
      <li>${req.body.Firstname}</li>
      <li>${req.body.Lastname}</li>
      <li>${req.body.Email}</li>
      <li>${req.body.Number}</li>
      <li>${req.body.Textarea}</li>
      <li>${req.body.Startup}</li>
      <li>${req.body.Expandingbusiness}</li>
      <li>${req.body.Successfulcompany}</li>
      <li>${req.body.CEO}</li>
      <li>${req.body.Headofsupport}</li>
      <li>${req.body.Keyassociatemanager}</li>
    </li>
    `
    const transporter = nodemailer.createTransport({
        service : "gmail",
        tls : {
            rejectUnauthorized : false
        },
        auth : {
            user : "mondizhurkes123@gmail.com",
            pass : "lketbecskxhrvkpa"
        }
    })
    transporter.sendMail({
        from : 'mondizhurkes123@gmail.com',
        to :"mondizhurkes123@gmail.com",
        subject : 'New Message',
        html : output
    },(err,response)=>{
            if(err){
                console.log('err',err)
            }else{
                console.log('server starter',response)
            }
            res.redirect("/")
       })
    })


app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/whoweare',(req,res)=>{
    res.render('whoweare');
})
app.get('/careers',(req,res)=>{
    res.render('careers');
})
app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/photo'));

app.listen(3000,()=>{
    console.log("port is 3000");
})