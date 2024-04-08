// let a = new Promise(function (resolve) {
//     let b = "hi there";
//     resolve(b);
// });
// console.log("hello 1")

// a.then(function (data) {
//     console.log(data);
// });
// console.log("hello 2")

function akshayAsyncFn() {
    let a = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hi there");
        }, 3000);
    });

    return a;
}

async function main() {
    // 
    // akshayAsyncFn().then(function(val){
    //     console.log(val);
    // })
    let val = await akshayAsyncFn();
    console.log(val);
}

main()
console.log("after main")