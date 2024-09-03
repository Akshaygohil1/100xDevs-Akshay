// go to terminal do npm init -y 
// npm install express
// type node index.js
// install body-parser to pasrse body and get the body express by default ignores bodty from bytes 
// npx nodemon to automatically restart server everytime you save npx nodemon index.js

// import body parse 
// use this line - app.use(bodyParse.json());
const express = require('express')
const app = express()
const port = 3000

// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

app.post("/conversations", (req, res) => {
    res.send("<b>Hello Akshay</b>");
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})