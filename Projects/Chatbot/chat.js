const messageInput = document.querySelector('.message-input')
const chatBody = document.querySelector('.chat-body')

// handle Enter key press for sending message

const createMessageElm = (content , classes) => {
    const div = document.createElement('div')
    div.classList.add('message' , classes)
   div.innerHTML = content 
   return div
}

function handleOutGoingMessage(userMessage){
    const messageContent = `<div class="message-text">${userMessage}</div>`
    const outGoingMessageDiv = createMessageElm(messageContent, 'user-message')
    chatBody.appendChild(outGoingMessageDiv)
}

messageInput.addEventListener('keydown', (e) => {
    const userMessage = e.target.value.trim()
    if(e.key === 'Enter' && userMessage){
    handleOutGoingMessage(userMessage)
    }
})