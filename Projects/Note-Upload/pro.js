const noteContainer = document.querySelector('.note-container')
const createElm = document.querySelector('.btn')

createElm.addEventListener('click' , () => {
    let para = document.createElement('p')
    let img = document.createElement('img')
    para.className = ('input-box')
    para.setAttribute('contenteditable' , 'true')
    img.src = '../images/delete.png'
    noteContainer.appendChild(para).appendChild(img)
})