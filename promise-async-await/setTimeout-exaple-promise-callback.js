// call back creates callback hell
setTimeout(function () {
    console.log("first")
    setTimeout(function () {
        console.log("second")
        setTimeout(function () {
            console.log("third")
        }, 3000);
    }, 2000);
}, 1000);



function myOwnSetTimeout(duration) {
    let p = new Promise(function (resolve) {
        setTimeout(() => {
            resolve("timeout done for " + duration + " miliseconds")
        }, duration);
    });
    return p
}

myOwnSetTimeout(1000).then(function(data){
    console.log(data)
});