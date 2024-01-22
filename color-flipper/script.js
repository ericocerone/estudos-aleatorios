const colour = ['red', 'green', 'blue', 'yellow']
const btn = document.getElementById('btn')
const colourName = document.querySelector('.colour')

btn.addEventListener('click', () => {
    //console.log(getRandomNumber())
    const randomColour = getRandomNumber()
    document.body.style.backgroundColor = colour[randomColour]
    colourName.textContent = colour[randomColour]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colour.length)
}