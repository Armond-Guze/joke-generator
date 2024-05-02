const jokeContianer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = "https://v2.jokeapi.dev/joke/Dark?type=single"

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => jokeContianer.textContent = `${item.joke}`)
}

btn.addEventListener('click' , getJoke)

getJoke()