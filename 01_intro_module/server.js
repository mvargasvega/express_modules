const express = require('express');
const app = express();

//MIDDLEWARE
// app.use(express.static('public'));

//Data until we use Databases
const burgers = [
    'Hamburger',
    'Cheese Burger',
    'Vegetable Burger'
];

let tacos = [
    'Soft Taco',
    'Crunchy Taco',
    'Super Taco'
];

//routes
app.get("/api/burgers", (req, res) => {
    //send all the burgers
    res.json(burgers);
    console.log("burger party")
});

app.get("/api/tacos", (req, res) => {
    //send all the tacos       
    res.json(tacos);
    console.log("taco party")
});

app.get("/greetings/:name", (req, res) => {
    res.send("Hello, " + req.params.name);
});

app.get("/pick-a-color/:color", (req,res) => {
    res.send("You picked: " + req.params.color);
});

app.get("/thank", (req,res) => {
    console.log(req.query);
    let name = req.query.name;
    res.send("Thank you, " + name + "!");
});

app.get("/", (req, res) => {
    //send back a  response
    console.log("I got hit");
    res.send("Hello Martin");
});

//server start
app.listen(3000, () => {
    console.log("HTTP server listening at localhost:3000");
});