// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

// escribe tu respuesta acá

//main function (by me) ==> ganadora
const numeroDeAes = text => text.split('a').length - 1

//main function (by ia)
const numeroDeAes2 = (string) => string.split("a").length - 1

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0