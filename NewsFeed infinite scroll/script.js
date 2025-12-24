async function example() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/{id}/comments')
    const data = await res.json()
    console.log(data)
}
example()
