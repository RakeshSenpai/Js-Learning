/*
const firstPromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log('i am print after 1 second')
        resolve()
    } , 1000)

})

firstPromise.then( () => {
    console.log(' I am printed after resovled')
})

//second one we can directly use then

new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log('This is second example')
        resolve()
    } , 1000)
}).then(() => {
    console.log('I am second resolved')
})

*/

//you can pass anything also i can pass strings,arrays.
//and we can access it

/*

const thirdPromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log('Hey there is one is third')
        resolve({name: "rakesh" , id: 2})
    } , 1000)
})

thirdPromise.then((user) => {
    console.log(user)
})

*/

const fourthPromise = new Promise((resolve , reject) => {
    setInterval(() => {
        
    })
})