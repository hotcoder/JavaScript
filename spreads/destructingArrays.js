const names = ['John', 'Jane', 'Mary','jason', 'Michael','dician'];

const [firstName, lastName] = names;

console.log(firstName, lastName);

const [fname,...others] = names;

console.log(fname, others);

const runner = {
    name: 'John',
    age: 25,
    title : 'Programmer',
    skills: ['HTML', 'CSS', 'Javascript']
}

const {name, age, title, skills} = runner;

console.log(name, age, title, skills);

const {name: runnerName, age: runnerAge, title: runnerTitle, skills: runnerSkills} = runner;

console.log(runnerName, runnerAge, runnerTitle, runnerSkills);