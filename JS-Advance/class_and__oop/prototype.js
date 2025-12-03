/*

let superHeros = ['Spiderman' , 'Jinwoo']

const Heropowers = {
    Spiderman: 'sling',
    Jinwoo: 'shadow',

    dark: function(){
        console.log(`This the power of shadow-monarch which power is ${this.Jinwoo}`)
    }
}

Object.prototype.power = function(){
    console.log('This is the first power')
}
Array.prototype.heros = function(){
    console.log('There is two superHeros')
}

superHeros.heros()

// Heropowers.heros()

Heropowers.dark()
Heropowers.power()

*/

//Inheritance

const user = {
    username: 'Rakesh',
    email: 'rakesh@gmail.com'
}

const teacher = {
    teachingUs: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    __proto__: teachingSupport
}

teacher.__proto__ = user

Object.setPrototypeOf(teachingSupport , teacher)

const anotherUserName = 'Rhynamo    '

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`the true length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
