const metrics = input => {
    const sum = input.reduce((a, b) => a + b, 0);
    const avg = sum/input.length;
    const min = Math.min(...input);
    const max = Math.max(...input);
    return { sum, avg, min, max };
}

//console.log(metrics([1, 2, 3, 4, 5]));

// dynamic properties

const person = "Ramesh"
const role = "Software Architect"

const person1 = "Babu"
const role1 = "Software Engineer"

const team = {
    [person]: role,
    [person1]: role1
}


//team[person] = role
//team[person1] = role1

console.log(team);


// adding new key value

const teams = {
    [person]: role,
    [person1]: role1
}


const addKeyValue = (obj, key, value) => ({...obj, [key]: value })

//console.log(addKeyValue(teams, "new key", "new value"));

console.log(function add(a,b){
    return a+b;
}(1,2));


const calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b
}

const calculator1 = {
    add(a,b) {
        return a+b;
    },
    subtract(a,b) {
        return a-b;
    },
    multiply(a,b) {
        return a*b;
    },
    divide(a,b) {
        return a/b;
    }
}

console.log(calculator.add(10,20));
console.log(calculator1.add(10,20));