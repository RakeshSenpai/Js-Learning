/*

const popUpShow = document.getElementById('popUp')
const submitBtn = document.getElementById('btn')
let hideTimeOutId = null

submitBtn.addEventListener('click' , () => {
    popUpShow.style.display = 'block'
    if(hideTimeOutId) clearTimeout(hideTimeOutId)

        hideTimeOutId = setTimeout(() => {
            popUpShow.style.display = 'none'
            hideTimeOutId = null
        }, 3000)
}) 
*/

/*
let timer;

const loadingShow = document.getElementById('loading')
function searchHandler (){
     clearTimeout(timer); 
    timer = setTimeout(() => {
    loadingShow.innerText = 'Searching..'
    } , 500)
}

document.querySelector('.search-btn').addEventListener('click' , () => searchHandler() )
*/

/*
const clock = document.querySelector('.clock')

function updateClock(){
    let now = new Date()
    clock.innerText = now.toLocaleTimeString()
}

const intervalId = setInterval(updateClock , 1000)

*/

let images = [
    'https://plus.unsplash.com/premium_photo-1763378519176-eaa8c8e41233?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1762240722645-f467cfc01187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
    'https://akcdn.detik.net.id/visual/2024/08/23/ella-gross-meovvfoto-instagram-ellagross-1_43.jpeg?w=720&q=90'

]

let index = 0
const banner = document.getElementById('banner')
banner.src = images[index]

  setInterval(() => {
     index = (index + 1 ) % images.length
     banner.src = images[index]
} , 3000)