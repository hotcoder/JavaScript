function sayHi(){
    console.log("Hi");
    console.log(this);
}

sayHi();

const person = {
    name: "John",
    age : 20,
    greet(){
        console.log(this);
    }
}

pers