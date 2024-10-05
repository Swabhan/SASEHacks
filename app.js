const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Sample Database
let network = {
    "12345": {
        "Name": "Chris", 
        "Communities": {
            "School": [],
            "Improve": [],
            "Everyone": []
        },
        "Help Needed": [],
        "Helping": [],
        "Helped": [],
        "Hours": 0,
        "Interests": ["Music", "Food", "Art"]
    },
    "56789": {
        "Name": "John", 
        "Communities": {
            "School": [],
            "Improve": [],
            "Everyone": []
        },
        "Help Needed": [],
        "Helping": [],
        "Helped": [],
        "Hours": 0,
        "Interests": ["Sports", "Video Games"]
    }
};

app.get('/', (req, res) => {
  res.send('Hello World!');
})


//--------------------
//Create Connections
//--------------------
//Connecting with others
app.post('/connect/:userId-:userId2', (req, res) => {
    network[req.params.userId]["Communities"]["Everyone"].push(req.params.userId2)
    network[req.params.userId2]["Communities"]["Everyone"].push(req.params.userId1)

    res.send("End")
})

//Adding to community
app.post('/connect/:userId-:userId2-:community', (req, res) => {
    network[req.params.userId]["Communities"][req.params.community].push(req.params.userId2)

    res.send("End")
})

//Recommend Activities
app.post('/recommend', (req, res) => {
    let interests = [];
    let group = req.body.group;
    print(group)

    for (let i = 0; i < group.length; i++) {
        interests.push(network[group[i]]["Interests"])
    }

    console.log(interests)

    res.send()
})

//-------------------
//Help your community
//-------------------
app.post('/askHelp/:userId', (req, res) => {
    network[req.params.userId]["Help Needed"].push({"Title": req.body.title, "Description": req.body.description, "Estimated Hours": req.body.hours})

    res.send("End")
})

app.post('/help/:userId-:userId2', (req, res) => {
    network[req.params.userId]["Helping"].push({"Title": req.body.title, "Description": req.body.description, "userId": req.params.userId2, "hours": req.body.hours})

    res.send("End")
})

app.post('/helped/:userId-:userId2', (req, res) => {
    network[req.params.userId]["Helped"].push({"Title": req.body.title, "Description": req.body.description, "userId": req.params.userId2, "hours": req.body.hours})
    
    network[req.params.userId]["Hours"] += req.body.hours
    network[req.params.userId2]["Hours"] -= req.body.hours

    res.send("End")
})



app.listen(port, () => {
  console.log(`SASEHacks listening on port ${port}`)
})