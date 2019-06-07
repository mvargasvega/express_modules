const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//MIDDLEWARE
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

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
let cities = [
    {
        "name":"Watsonville",
        "description": "City in the 95076"
    },
    {
        "name": "Stockton",
        "description":"City in the Stockton"
    }
]

//routes

app.get("/api/cities", (req, res) => {
    res.json(cities);
})
app.get('/api/cities/:id', (req, res) => {
    let index = req.params.id;
    let selection = cities[index];
    res.json(selection);
});

app.post('/api/cities', function citiesCreate(request, response) {
    let name = request.body.name;
    let desc = request.body.description;
    console.log("this is the " + name);
    console.log(desc);
    let newCity = { name: name, description: desc };
    // if we have a cities array in our app (pre-database):
    console.log(newCity);
    cities.push(newCity);
    response.json(cities);
});

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

app.get("/api/tacos/:id", (req, res) => {
    console.log(req.params.id);
    let index = req.params.id;
    let selection = tacos[index]
    console.log(selection);
    res.json(selection);
})

app.get("/greetings/:name", (req, res) => {
    res.send("Hello, " + req.params.name);
});

app.get("/pick-a-color/:color", (req, res) => {
    res.send("You picked: " + req.params.color);
});

app.get("/thank", (req, res) => {
    console.log(req.query);
    let name = req.query.name;
    res.send("Thank you, " + name + "!");
});

app.get("/multiply", (req, res) => {
    console.log(req.query);
    let x = req.query.x;
    let y = req.query.y;
    let result = parseInt(x) * parseInt(y);
    res.send(result + " is the result");
});

app.get("/add", (req, res) => {
    console.log(req.query);
    let x = req.query.x;
    let y = req.query.y;
    let result = parseInt(x) + parseInt(y);
    res.send(result + " is the result")
})

app.get("/", (req, res) => {
    //send back a  response
    console.log("I got hit");
    res.send("Hello Martin");
});

//server start
app.listen(3000, () => {
    console.log("HTTP server listening at localhost:3000");
});