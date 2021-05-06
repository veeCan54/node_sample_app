const person = {
    name: 'Vidya',
    age: 29,
    greet() {
        console.log('Hi, I am '+this.name+' and my age is '+this.age);
    },
    ability: 'Many' 
}

const person2 = {
    name: 'Vidya',
    age: 29,
    greet: (num) => { return 'Hi, I am '+num; },
    ability: 'Many' 
}

const {name, age, greet, ability} = person2; // as a result of destructuring, local variables will be created with corrseponding values 
                                          // from person object
console.log(ability);
console.log(greet(8));

const Hobbies = ['Sports', 'Cooking'];
const [ab1, ab2] = Hobbies;            // notice the [] for array versus {} for object in line 17
console.log(ab1, ab2);


