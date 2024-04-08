const { constants } = require("buffer");
const fs = require("fs");


function akshaysReadFile() {
    return new promise(function (resolve) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    })
}

function onDone(data) {
    console.log(data)
    console.log("inside ok done")

}
var a = akshaysReadFile();
a.then(onDone);