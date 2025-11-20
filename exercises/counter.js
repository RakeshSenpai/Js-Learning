const plusBtn = document.getElementById('plus')
const resetBtn = document.getElementById('reset')
const minusBtn = document.getElementById('minus')
const numbers = document.getElementById('numbers')

let count = 0

function addNumber(){
    count++
    numbers.innerText = count
}
function decreaseNumber(){
    count--
    if(count < 0) return alert('Cannot be minus')
    numbers.innerText = count
}

function resetNumber(){
    count = 0
    numbers.innerText = count
}

plusBtn.addEventListener('click' , addNumber)
minusBtn.addEventListener('click' , decreaseNumber)
resetBtn.addEventListener('click' , resetNumber)