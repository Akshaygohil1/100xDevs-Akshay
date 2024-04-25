// go to terminal do npm init -y 
// npm install express
// type node index.js
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