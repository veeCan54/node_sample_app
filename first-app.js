// const fs = require('fs')
// console.log("Hello from Node");
// fs.writeFileSync("notes.txt", "I am here");

const name ='Vidya';
let age = 40;
const hasHobbies = true;

age = 45;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is '+ userName +
        ' Age is ' + userAge +
        ' Has Hobbies ' + userHasHobby 
    );
}

const b = (a, b) => {
    return a + b;
}

const mply = (c, d) => c * d;

const p = (m, n) => console.log(m+n);

p(9,10);

const m = () => 2 + 90;

console.log(m()); // this is invocation --> returns 92

console.log(m) // this just prints the method - you are not invoking it!

console.log("Add "+b(3,6));
console.log("Mply "+mply(3,6));
console.log(summarizeUser(name, age, hasHobbies));