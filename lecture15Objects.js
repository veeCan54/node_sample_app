const person = {
    name: 'Vidya',
    age: 29,
 
}
console.log(person);

//inside arrow function - when you use this keyword you are talking about the global context.
//there is no name variable globally (only locally in person object)
const person1 = {
    name: 'Vidya',
    age: 29,
    greet: () => {
        console.log('Hi, I am '+this.name+' and my age is '+this.age);
    }
 
}
person1.greet();

//In order to refer to local variable use actual function keyword not () =>
const person2 = {
    name: 'Vidya',
    age: 29,
    greet: function () { // different form line 13 
        console.log('Hi, I am '+this.name+' and my age is '+this.age);
    }
 
}
person2.greet();

//In order to refer to local variable use actual function keyword not () =>
const person3 = {
    name: 'Vidya',
    age: 29,
    greet() { // different form line 13 
        console.log('Hi, I am '+this.name+' and my age is '+this.age);
    }
 
}
person3.greet();
