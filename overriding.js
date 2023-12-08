class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`)
    }
}

const dog = new Dog('Buddy')
dog.speak()