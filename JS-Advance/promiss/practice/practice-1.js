const task =  new Promise((resolve , reject) => {
    let isTask = true
    setTimeout(() => {
        if(!isTask){
            resolve('Task Completed')
        } else{
            reject('Something went wrong')
        }
    } , 2000)
})

task.then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})

// console.log(task)