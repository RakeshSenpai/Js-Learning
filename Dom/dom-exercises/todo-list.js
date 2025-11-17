let todoItem = [
    { name : 'Watching Youtube'},
    {name : 'Watching tutorial'}
]

renderTodo()

function renderTodo(){
    let todoHtml = ''
    todoItem.forEach((value , index) => {
        const {name} = value
        let html = `
        <div>${name}
        
        <button class="remove-btn">Remove</button>
        </div>
        `
        todoHtml += html
    })


    const div = document.querySelector('.js-todo-items')
    .innerHTML = todoHtml


const removeBtn = document.querySelectorAll('.remove-btn')
    removeBtn.forEach((btn) => {
        btn.addEventListener('click' , () => {
            todoItem.forEach((value , index) => {
                value.splice(index, 1)
                renderTodo()
            })
        })
    })
}


document.querySelector('.add').addEventListener('click' , (e) => {
    addTodo()
    e.preventDefault()
}) 

function addTodo(){
    const inputElm = document.querySelector('.js-input')
    let name = inputElm.value

    if(name){
    todoItem.push({
        name
    })
    } else{
        alert('add your todo')
    }

    inputElm.value = ''

    renderTodo()
}