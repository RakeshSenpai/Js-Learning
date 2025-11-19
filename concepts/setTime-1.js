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
function handler (){
     clearTimeout(timer); 
    timer = setTimeout(() => {
    loadingShow.innerText = 'Searching..'
    } , 500)
}

document.querySelector('.search-btn').addEventListener('click' , () => handler() )
*/