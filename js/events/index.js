import { verifyStarted } from "./verify.js"

function buildWord(event) {
    console.log(verifyStarted())
    console.log(event.key)
}

export function startListening() {
    document.addEventListener('keydown', (event) => buildWord(event))
}

