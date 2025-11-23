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

