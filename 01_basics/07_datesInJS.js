//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON);
// console.log(typeof myDate);

let myCreatedDate = new Date();
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));
// const dotw = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']
// const today = new Date().toLocaleDateString('en-US',{ weekday: 'long' });
// const dayName= dotw[today]

// console.log('Today is '+ today);

const number = 10000000;
// console.log(number.toLocaleString('en-IN'));


console.log(
    myCreatedDate.toLocaleString('en-IN', {
        weekday: "long"
    }));