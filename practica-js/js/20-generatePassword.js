// Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:
// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter “a” por “4”.
// Reemplaza el caracter “e” por “3”.
// Reemplaza el caracter “i” por “1”.
// Reemplaza el carater “o” por “0”.

// escribe tu función acá
// main function (by me) ===> ganadora
const password = text => {
    return text
                .toLowerCase()
                .replaceAll(' ', '')
                .replaceAll('a', 4)
                .replaceAll('e', 3)
                .replaceAll('i', 1)
                .replaceAll('o', 0)
}

// main function (by ia)
const password2 = text => {
    return text 
                .toLowerCase() 
                .replace(/ /g, '')
                .replace(/a/g, '4') 
                .replace(/e/g, '3') 
                .replace(/i/g, '1') 
                .replace(/o/g, '0') 
}

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""