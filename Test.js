const person = {
    name: 'Testing',
    age: 29,
    greet() {
        console.log('Hi, I am '+this.name+' and my age is '+this.age);
    } 
}

const person2 = {
    name: 'Testing',
    age: 29,
    greet: () => { return 4; 
    } 
}
const copiedPerson = {...person}; //spread operator
//console.log('Printing copiedPerson...');
//console.log(copiedPerson);
console.log('Printing copiedPerson.greet()');
console.log("Test "+person2.greet());

//person.greet();
//console.log(person2.greet());
