// High order functions and Callbacks 

function proccessUser(name, age, cb) {
    console.log('Name :' , name , 'Age:', age )
    cb(name)
}

function welcomeMessage(userName) {
    console.log('Welcome ' + userName + '!!')
}

console.log(proccessUser('Rakesh' , '22', welcomeMessage))


function greet(name){
    console.log('Hey' + name)
}

function runner (callback){
    callback('Rakesh')
}

runner(greet)
