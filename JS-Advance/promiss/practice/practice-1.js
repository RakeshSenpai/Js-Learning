const task =  new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve()
    } , 2000)
})

task.then(() => {
    console.log('Task Completed')
})

console.log(task)