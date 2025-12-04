/*

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password}123`
    }

    changerPass(){
        return `${this.password.toUpperCase()}123`
    }
}

const anotherUser = new User('Rakesh' , 'awrg@google.com' , 'abcd')


console.log(anotherUser)
console.log(anotherUser.encryptPass())
console.log(anotherUser.changerPass())


*/

/*

// behind the scene

function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password
}

Object.prototype.encryptPass = function (){
        return `${this.password}123`  
}

Object.prototype.changerPass = function (){
        return `${this.password.toUpperCase()}123`   
}


const anotherUser = new User('Rakesh' , 'awrg@google.com' , 'abcd')


console.log(anotherUser)
console.log(anotherUser.encryptPass())
console.log(anotherUser.changerPass())
*/

// Inheritence

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username , email, pass){
        super(username) // super(), it's allow us to access to User classes username
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`Another username is ${this.username}`)
    }
}

const first = new User('Rakesh')
const second = new Teacher('Rhynamo' , 'Rhynamo@gmail.com', '123')

second.logMe()
second.addCourse()
// first.addCourse()// this will throw error, because it doesnot Inheritence from Teacher class
console.log(second instanceof User)
console.log(first instanceof Teacher)