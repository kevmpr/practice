// Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

// escribe tu función acá
// main function (by me and ia) ===> ganadora
const terminanConS = array => array.filter(word => word[word.length - 1] === 's' || word[word.length - 1] === 'S')

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []