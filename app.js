const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const spawn = require("child_process").spawn;


let activities = [
    "Restaurants",
    "Bowling alleys",
    "Escape rooms",
    "Cafes",
    "Bakeries",
    "Ice cream shops",
    "Breweries",
    "Wineries",
    "Arcades",
    "Mini golf courses",
    "Pizzerias",
    "Food trucks",
    "Cocktail bars",
    "Comedy clubs",
    "Paint-and-sip studios",
    "Amusement centers (laser tag, go-karts)",
    "Sports bars",
    "Nightclubs",
    "Diners",
    "Rooftop bars"
];

let activity_matrix = [
    // Adventure, Social, Casual, Family-Friendly, Relaxing, Fun, Creative, Interactive, Trendy, Diverse Cuisines, Outdoor Seating, Live Entertainment, Events, Food Pairings, Specialty Drinks, Competitive, Unique Themes, Local, Nightlife, Nostalgic
    [0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1], // Restaurants
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // Bowling alleys
    [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Escape rooms
    [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Cafes
    [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Bakeries
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Ice cream shops
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // Breweries
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // Wineries
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Arcades
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Mini golf courses
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Pizzerias
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Food trucks
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], // Cocktail bars
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // Comedy clubs
    [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Paint-and-sip studios
    [1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Amusement centers (laser tag, go-karts)
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // Sports bars
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // Nightclubs
    [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Diners
    [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // Rooftop bars
];

let interests = [
    "Adventure",
    "Social",
    "Casual",
    "Family-Friendly",
    "Relaxing",
    "Fun",
    "Creative",
    "Interactive",
    "Trendy",
    "Diverse Cuisines",
    "Outdoor Seating",
    "Live Entertainment",
    "Events",
    "Food Pairings",
    "Specialty Drinks",
    "Competitive",
    "Unique Themes",
    "Local",
    "Nightlife",
    "Nostalgic"
]

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
        "Interests": {
            "Adventure": 0,
            "Social": 0,
            "Casual": 0,
            "Family-Friendly": 0,
            "Relaxing": 1,
            "Fun": 0,
            "Creative": 1,
            "Interactive": 1,
            "Trendy": 1,
            "Diverse Cuisines": 1,
            "Outdoor Seating": 1,
            "Live Entertainment": 1,
            "Events": 1,
            "Food Pairings": 1,
            "Specialty Drinks": 1,
            "Competitive": 0,
            "Unique Themes": 1,
            "Local": 1,
            "Nightlife": 1,
            "Nostalgic": 1
        }
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
        "Interests": {
            "Adventure": 0,
            "Social": 0,
            "Casual": 0,
            "Family-Friendly": 0,
            "Relaxing": 1,
            "Fun": 0,
            "Creative": 1,
            "Interactive": 1,
            "Trendy": 1,
            "Diverse Cuisines": 1,
            "Outdoor Seating": 1,
            "Live Entertainment": 1,
            "Events": 1,
            "Food Pairings": 1,
            "Specialty Drinks": 1,
            "Competitive": 0,
            "Unique Themes": 1,
            "Local": 1,
            "Nightlife": 1,
            "Nostalgic": 1
        }
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


function parseStringToArray(inputString) {
    // Remove leading and trailing brackets and split into rows
    let cleanedString = inputString.trim().replace(/^\[|\]$/g, '');
    let rows = cleanedString.split(']\n [').map(row => row.trim());
  
    // Parse each row into an array of numbers
    let result = rows.map(row => {
      return row.split(/\s+/)
                .map(num => parseFloat(num))
                .filter(num => !isNaN(num));
    });
  
    return result;
  }

function topRecs(inputList) {
    let avg = [
        [0, "Restaurants"],
        [0, "Bowling alleys"],
        [0, "Escape rooms"],
        [0, "Cafes"],
        [0, "Bakeries"],
        [0, "Ice cream shops"],
        [0, "Breweries"],
        [0, "Wineries"],
        [0, "Arcades"],
        [0, "Mini golf courses"],
        [0, "Pizzerias"],
        [0, "Food trucks"],
        [0, "Cocktail bars"],
        [0, "Comedy clubs"],
        [0, "Paint-and-sip studios"],
        [0, "Amusement centers (laser tag, go-karts)"],
        [0, "Sports bars"],
        [0, "Nightclubs"],
        [0, "Diners"],
        [0, "Rooftop bars"]
      ]
      
    for(let i = 0; i < inputList.length; i++){
        for(let x = 0; x < activities.length; x++){
            avg[x][0] += inputList[i][x]
        }
    }

    avg.sort((a, b) => a[0] / inputList.length  - b[0] / inputList.length)
    console.log(avg)
};


//Recommend Activities
app.post('/recommend', (req, res) => {
    let interests = [];
    let group = req.body.group;

    // Create a promise to handle the Python process
    const pythonProcess = new Promise((resolve, reject) => {
        const process = spawn('python', ['wrapper.py', JSON.stringify(buildMatrix(group)), JSON.stringify(activity_matrix)]);

        let outputData = '';

        process.stdout.on('data', (data) => {
            outputData += data.toString();
        });

        process.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        process.on('exit', (code) => {
            if (code === 0) {
                resolve(outputData); // Resolve with the output data
            } else {
                reject(new Error(`Python process exited with code ${code}`));
            }
        });
    });

    // Wait for the Python process to complete
    pythonProcess
        .then((output) => {
            topRecs(parseStringToArray(output))
            res.send(parseStringToArray(output))
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('An error occurred while processing your request.');
        });
});

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

})

function buildMatrix(group){
    let matrix = []

    for(let i = 0; i < group.length; i++){
        let row = []

        for(let x = 0; x < interests.length; x++){
            let rating = network[group[i]]["Interests"][interests[x]]
            row.push(rating)
        }

        matrix.push(row)
    }

    return matrix
}

function DotProduct(A, B) {
    const result = [];
    
    for (let i = 0; i < A.length; i++) {
        result[i] = new Array(B[0].length).fill(0);
    }
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < A[0].length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    return result;
}

app.listen(port, () => {
  console.log(`SASEHacks listening on port ${port}`)
})