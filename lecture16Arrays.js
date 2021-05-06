const arr = ['Cooking', 'Fishing', 1, true];

for(let a of arr){
    console.log(a);
}

console.log(arr.map(a => 'Found '+a));
console.log(arr.map(a => {
    return 'I am crazy to be '+a;
}));
console.log(arr);

arr.push('Programming');
//arr just holds the memory location of the Object. This hasn't changed.
//The underlying object changed 

console.log(arr);

const ghee = 89;
ghee = 10; //this will fail
console.log('This is ghee '+ghee);