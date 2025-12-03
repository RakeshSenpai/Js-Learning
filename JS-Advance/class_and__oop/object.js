function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
    console.log(`price is increased: ${this.score}`)
}

createUser.prototype.printMe = function(){
    console.log(`the price is ${this.score}`)
}

const firstPrice = new createUser('Apple' , 100)
const secondPrice = new createUser('Mango' , 80)

firstPrice.printMe()
secondPrice.increment()
