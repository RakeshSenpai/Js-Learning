const buttons = document.querySelectorAll('#button')
const body = document.querySelector('body')

buttons.forEach((b) => {
    b.addEventListener('click' , (e) => {
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
    })
})