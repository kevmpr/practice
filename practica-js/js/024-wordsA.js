// Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

// escribe tu función acá
// main function (by ia) ===> ganadora
const empiezanConA = array => array.filter(word => word[0] === 'a' || word[0] === 'A')

// main function (by me)
const empiezanConA2 = array => array.filter(word => word.charAt(0).includes('a') || word.charAt(0).includes('A'))

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []