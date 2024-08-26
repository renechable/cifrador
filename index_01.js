function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3; // Desplazamiento para el cifrado César
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);
        // Encriptar solo letras
        if (char >= 65 && char <= 90) {
            encryptedText += String.fromCharCode((char - 65 + shift) % 26 + 65);
        } else if (char >= 97 && char <= 122) {
            encryptedText += String.fromCharCode((char - 97 + shift) % 26 + 97);
        } else {
            encryptedText += inputText[i]; // No encriptar otros caracteres
        }
    }
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3; // Desplazamiento para el cifrado César
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);
        // Desencriptar solo letras
        if (char >= 65 && char <= 90) {
            decryptedText += String.fromCharCode((char - 65 - shift + 26) % 26 + 65);
        } else if (char >= 97 && char <= 122) {
            decryptedText += String.fromCharCode((char - 97 - shift + 26) % 26 + 97);
        } else {
            decryptedText += inputText[i]; // No desencriptar otros caracteres
        }
    }
    document.getElementById('outputText').value = decryptedText;
}
