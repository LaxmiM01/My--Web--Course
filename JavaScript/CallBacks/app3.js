// Classes and Objectes

class person{
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
        
    }

    walk(){
        console.log("walking")
    }

    run(){
        console.log("Running")
    }
    eat(){
        console.log("eating")
    }
}

let person1 = new person('laxmi', '22','female')
console.log(person1.name)
console.log(person1.age)
console.log(person1.gender)