const express = require('express');
const app = express();

var users = [{
    name: "akshay",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }, {
        healthy: true
    }
]
}];
console.log(users[0]);

app.get("/", function (req, res) {
    const myKidneys = users[0].kidneys;  // Corrected the reference to kidneys
    const numberOfKidneys = myKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < myKidneys.length; i++) {
        if (myKidneys[i].healthy) {
            numberOfHealthyKidneys++;  // Corrected the increment operation
        }
    }
    let numerOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

    res.json({

        numberOfKidneys,
        numberOfHealthyKidneys,
        numerOfUnhealthyKidneys

    });
});

// updating adding new healthy kidneys 
app.use(express.json());
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({ healthy: isHealthy })
    res.json({ msg: "Done!" })
})

// making all kidneys healthy 
app.put("/", function (req, res) {

    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({ msg: "put done!" })
})

// removing all the unhealthy kidneys 
app.delete("/", function (req, res) {
    let newKidneyArr = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneyArr.push({ healthy: true })
        }

    }
    users[0].kidneys = newKidneyArr
    res.json({ msg: newKidneyArr })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
