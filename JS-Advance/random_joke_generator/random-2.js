async function  randomDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    const url = data.documentation_url
    console.log(data)
    console.log(url)
}

randomDog()