class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password}123`
    }
}

const anotherUser = new User('Rakesh' , 'awrg@google.com' , 'abcd')


console.log(anotherUser)
console.log(anotherUser.encryptPass())
