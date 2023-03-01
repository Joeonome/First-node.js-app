//jshint esversion:6
 
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (request, response) => response.sendFile(__dirname + '/index.html'));

app.get("/callme", (req, res) => res.send("call me baby"));

app.post("/", (req, res) => {
    let a = Number(req.body.num1);
    let b = Number(req.body.num2);
    let c = a + b;
    res.send(`The result is ${c}`)
});


//BMI Calculator
app.get("/bmi-calculator", (req, res) => res.sendFile(__dirname + '/BMI-Calculator.html'));
app.post("/bmi-calculator", (req, res) => {
    let a = parseFloat(req.body.weight);
    let b = parseFloat(req.body.height);
    let c = a / (b*b);
    res.send(`Your BMI is ${c}`)
});


app.listen(3000, () => console.log("na we dey here"));