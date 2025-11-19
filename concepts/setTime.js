// this function is async because it doesnot waits for anyone.

const setTime = setTimeout(() => {
    console.log('i am printing after 3seconds')
},3000)

console.log(setTime)

// const intervalTimer = setInterval(() => {
//     console.log('hey i am setInterval')
// }, 2000)

// console.log(intervalTimer)



// const  timeElement = document.querySelector('.time')

// setInterval(() => {
//   timeElement.innerText = new Date().toLocaleTimeString();
// }, 1000);


/*
document.getElementById('btn').addEventListener('click' ,() => {
    const popUp = document.getElementById('popUp')
    popUp.style.display = 'block'

    setTimeout(() => {
        popUp.style.display = 'none'
    } , 3000)
})

*/

document.getElementById('loadBtn').addEventListener('click' , () => {
    const loadingData = document.getElementById('loading')
    loadingData.innerText = 'Loading....'
    setTimeout(() => {
        loadingData.innerText = 'Done ✅'
    } ,2000)

})