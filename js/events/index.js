import { verifyStarted } from "./verify.js"

function buildWord(event) {
    console.log(verifyStarted())
    console.log(event.key)

    // testing
    const letterTile = document.createElement('div')
    letterTile.classList.add('letterTile')
    const letterTileText = document.createElement('p')
    letterTileText.innerText = event.key;

    letterTile.appendChild(letterTileText)
    document.querySelector('body').appendChild(letterTile)
    console.log('Finished creating tiles')
    console.log(letterTile)
    letterTile.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
}

export function startListening() {
    document.addEventListener('keydown', (event) => buildWord(event))
}

