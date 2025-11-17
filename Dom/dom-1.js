/*
const div = document.createElement('div')
const button = document.createElement('button')
const body = document.querySelector('body')
div.append(button)
body.append(div)
button.textContent = 'click me'

button.addEventListener('click', () => {
    console.log('hello')
})

const fragement = document.createDocumentFragment()

for(let i = 0; i < 10; i++){
    const div = document.createElement('div')
    div.textContent = `item ${i}`
    fragement.appendChild(div)
}

document.body.appendChild(fragement)
*/

// Event addEventListener
//here is i select the document and aslo i give him target so it will click only div.and also i make element and append it into body , if we do that in normal way then the clicks doesnot work on append element.

addGlobalEventListener('click', 'div' ,  e => {
    console.log('Hii')
})

function addGlobalEventListener( a , b , cb){
    document.addEventListener(a , e => {
        if(e.target.matches(b)) cb(e)
    })

}

const newDiv = document.createElement('div')
const body = document.querySelector('body')
newDiv.style.height = '300px'
newDiv.style.width = '300px'
newDiv.style.backgroundColor = '#111'

body.append(newDiv)
