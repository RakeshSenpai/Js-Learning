async function jokeGenerator() {
    const firstDiv = document.querySelector('.punch-line')
    const secondDiv = document.querySelector('.setup-joke')
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random')

    try {
        if(!response.ok){
            throw new Error("Data couldnot fetch");            
        }
            const data = await response.json()
            const punchLine = data.punchline
            const jokes = data.setup
            firstDiv.style.padding = '1.2rem'
            secondDiv.style.padding = '1.2rem'
            firstDiv.innerText = punchLine
            secondDiv.innerText = jokes

    } catch (error) {
        console.log(error)
    }

}

document.getElementById('btn')
.addEventListener('click' , () => {
    jokeGenerator()
})
