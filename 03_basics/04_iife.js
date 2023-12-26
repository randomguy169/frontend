// Immediately Invoked Function Expression (IIFE)
(function chai() {
    let username = "Chai";
    console.log(username);// this only works in objects and not in functions
})(); // semicolon is important here

((name) => {
    console.log(`DB CONNECTED ${name}`);
})('Amaan');


((name) => {
    console.log(`DB connected ${name}`);
})('Amaan')

