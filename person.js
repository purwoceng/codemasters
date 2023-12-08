class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hello, my name is ${this.name}.`)
    }
    getage(){
        console.log(`Hello, my age is ${this.age}.`)
    }
}

const person = new Person('John',30)
person.greet()
person.getage()