class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

export class Bird extends Animal{
    speak(){
        console.log(`${this.name} chirps`);
    }
}

export class Dog extends Animal{
    speak(){
        console.log('Heli')
    }
}
export class Cat extends Animal{
    speak(){
        console.log('HeKiwli')
    }
}
export class Tiger extends Animal{
    speak(){
        console.log('Huhuhu')
    }
}

// const dog = new Dog('Buddy')
// dog.speak()
