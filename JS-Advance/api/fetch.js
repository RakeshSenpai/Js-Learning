
const button = document.getElementById('btn')


async function  fetchData() {
    try {
        const input = document.getElementById('inputElm').value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)

        if(!response.ok){
            throw new Error('Data couldnot fetch')
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default
        const image = document.getElementById('pokemonSprite')
        image.src = pokemonSprite

        console.log(data)


        
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener('click' , () => {
    fetchData()
})
