function printNames(name1 , name2, name3) {
    console.log(name1);
    console.log(name2);
    console.log(name3);
}

printNames('John', 'Doe', 'Smith');

printNames(...['John', 'Doe', 'Smith']);

printNames(...'Ram');


function printElements(...elements) {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        console.log(`${element} - ${index}`);
    }
}

printElements(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// combine arrays 

const odds = [1,3,5,7,9,11];
const evens = [2,4,6,8,10,12];

let combined = odds.concat(evens);

console.log(combined);

combined = [...odds,...evens];

console.log(combined);


console.log([...'ramesh babu']);

console.log([...'ramesh babu','yagnam']);



let student = {
    name: 'Ramesh',
    age: 23,
    city: 'Bangalore'
}

let student2 = {
    name: 'Siva',
    age: 24,
    city: 'Delhi'
}

const students = {...student,...student2};

console.log(students);


let names = ['John', 'Doe', 'Smith'];

console.log({...names});

console.log([...student2]);