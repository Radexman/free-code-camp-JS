let anyName = 'Emilia';

function getRandomChar(name) {
    let randomChar = name.charAt(Math.floor(Math.random() * name.length));
    return randomChar;
}

console.log(getRandomChar(anyName));