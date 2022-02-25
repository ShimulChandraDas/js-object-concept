// 1. using object literal
const student = { Name: 'Shakib Al Hasan', Job: 'cricketer' };

//2.  object constractor or bulding constractor
const person = new Object();

//3. syntactical Sugar
//const human = Object.create(null);
const human = Object.create(student);
//console.log(human.Job);

//4. class
class People {
    constructor(Name, age) {
        this.Name = Name;
        this.age = age;
    }
}
const peop = new People("manus", 12);
//console.log(peop);


//5. function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);