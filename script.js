const array = ['kennen', 'können', 'müssen', 'kommen', 'leihen', 'lesen', 'nennen', 'schreiben', 
               'sollen', 'stehen', 'steigen', 'sein', 'liegen', 'mögen', 'nehmen', 'schlafen', 'sehen', 
               'sprechen', 'sterben', 'schwimmen', 'singen', 'sitzen', 'scheinen', 'schließen', 'laufen', 
               'lassen', 'backen', 'bieten', 'bitten', 'beginnen', 'bleiben', 'brechen', 'bringen', 'dürfen',
               'fahren', 'fallen', 'fangen', 'finden', 'fliegen', 'haben', 'hängen', 'heben', 
               'heißen', 'helfen', 'gehen', 'geben', 'halten', 'essen', 'denken', 'tragen', 'treffen', 'treiben'
               'treten', 'trinken', 'tun', 'vergessen', 'verlieren', 'wachsen', 'waschen', 'werden', 'werfen', 'wiegen'
               'wissen', 'wollen', 'ziehen', 'schlagen']
// let used = []
let result = document.getElementById('result');

function check() {
    if (array.length === 0) {
        result.textContent = "Brak elementów";
        return;
    }

    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
    array.splice(randomIndex, 1);
    result.textContent = randomElement;
    console.log(array);
}

document.addEventListener('keydown', (event) => {
    if(event.key == 'Enter' || event.code == 'Space') {
        if (array.length === 0) {
            result.textContent = "Brak elementów";
            return;
        }
    
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomElement = array[randomIndex];
        array.splice(randomIndex, 1);
        result.textContent = randomElement;
        console.log(array);
    }
})
