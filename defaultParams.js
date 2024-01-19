function multiply(a,b){
    return a*b;
}

//console.log(multiply(2,3));

//console.log(multiply(2));


function multiply1(a,b){
    console.log(typeof b);

    if(typeof b === 'undefined'){
        b = 1;
    }
    return a*b;
}

//console.log(multiply1(2));
//console.log(multiply1(2,3));


const greet = (personName , greeting='hi') => {
    return `${greeting} ${personName} `;
}

console.log(greet('John'));

console.log(greet('John', 'hello'));