const hobbies = ['Sports', 'Cooking', 'Painting'];

const copiedHobbies = [...hobbies]; // this is the spreadOperator
const slicedHobbies = hobbies.slice(1,2);

console.log(hobbies);
console.log(copiedHobbies);
console.log(slicedHobbies);

const person = {
    name: 'Vidya',
    age: 29,
    greet() {
        console.log('Hi, I am '+this.name+' and my age is '+this.age);
    }
 
}
const copiedPerson = {...person}; //spread operator
//const slicedPerson = person.slice(); // no such function for object
console.log(copiedPerson);
console.log("hello ")
console.log(copiedPerson.greet());

const arr2 = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}
console.log("Hello2");
console.log(arr2(2,3,4, 5));

const rest = (...arr) => { // this is rest operator. You can pass as many parameters as you want
    return arr;
}

console.log('This is rest ' +rest(2,3));
console.log(rest(2,3,4,5,6,7,8,9)); // no need to change method signature ...will take care of it
