setTimeout(() => {
    // once 5 second are over then below code will be put into call stack 
    // then web api will be called for settimeout 
    // then it goes to callback queue 
    // then event loop will put it into callstack once main therad is free 
    console.log("first set timeout done ");
    setTimeout(() => {
        console.log("second timeout ")
    }, 10000);
}, 5000);