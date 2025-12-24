const category = document.querySelector('.categories')
const startBtn = document.getElementById('quiz-btn')
const level = document.querySelector('.difficulty')
const question = document.querySelector('.questions')
const api = 'https://opentdb.com/api.php?amount=50'

async function apiFetch() {
    const res = await fetch(api)
    const data = await res.json()
    console.log(data)
}

apiFetch()


function renderApi(){
    
}