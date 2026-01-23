const messageInput = document.querySelector('.message-input')
const chatBody = document.querySelector('.chat-body')
const sendButton = document.querySelector('.send')

// handle Enter key press for sending message

const createMessageElm = (content , classes) => {
    const div = document.createElement('div')
    div.classList.add('message' , classes)
   div.innerHTML = content 
   return div
}

const userData = {
    message : null
}

function handleOutGoingMessage(e){
    e.preventDefault()
    userData.message = messageInput.value.trim()
    const messageContent = `<div class="message-text">${userData.message}</div>`
    const outGoingMessageDiv = createMessageElm(messageContent, 'user-message')
    chatBody.appendChild(outGoingMessageDiv)
}

messageInput.addEventListener('keydown', (e) => {
    const userMessage = e.target.value.trim()
    if(e.key === 'Enter' && userMessage){
    handleOutGoingMessage(e)
    }
})

sendButton.addEventListener('click' , (e) => handleOutGoingMessage(e))