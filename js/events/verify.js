export function verifyStarted() {
    const gameStarted = localStorage.getItem('gameStarted')

    if (gameStarted !== 'true') return false;
    return true
}