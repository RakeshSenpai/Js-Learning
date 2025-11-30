function User(username, logInCount, isLoggin){
    this.username = username
    this.logInCount = logInCount
    this.isLoggin = isLoggin
    this.greetings = function(){
        console.log(`Hey there: ${username}`)
    }
    return this
}

const userOne = new User('Rakesh' , 4 , true)
const userTwo = new User('New user' , 3 , false)
console.log(userOne)
console.log(userTwo)
