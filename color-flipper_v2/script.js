const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const colourCode = document.querySelector('.colour')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let hexColor = '#'
    for (i = 0; i < 6; ++i) {
        hexColor += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor
    colourCode.textContent = hexColor
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}