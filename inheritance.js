class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Bird extends Animal{}

const tweety = new Bird('Tweety')
tweety.speak()

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`)
    }
}

const dog = new Dog('Buddy')
dog.speak()