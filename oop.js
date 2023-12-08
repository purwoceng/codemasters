const person = {
    name : 'John',
    age : 30,

    greet(){
        console.log(`Hello , My name is ${this.name}.`);
        console.log(`Hello , My name is ${this.age}.`);
    },
   
}
console.log(person.name);
person.greet()

