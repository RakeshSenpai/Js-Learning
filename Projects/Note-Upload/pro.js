const noteContainer = document.querySelector('.note-container')
const createElm = document.querySelector('.btn')
const notes = document.querySelectorAll('.input-box')

createElm.addEventListener('click' , () => {
    let para = document.createElement('p')
    let img = document.createElement('img')
    para.className = ('input-box')
    para.setAttribute('contenteditable' , 'true')
    img.src = '../images/delete.png'
    noteContainer.appendChild(para).appendChild(img)
})

function saveToLocalStorage(){
    localStorage.setItem('notes' , noteContainer.innerHTML)
}

noteContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        saveToLocalStorage()
    }
    else if(e.target.tagName === 'P'){
        notes.forEach(nt => {
            nt.onkeyup = function(){
                saveToLocalStorage()
            }
        })
    }
})