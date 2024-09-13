// Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

// escribe tu respuesta acá

//funcion principal (hecha por mi) ==> ganadora
const imprimirArreglo = (... array) => array.forEach((value) => console.log(value))

//funcion principal (hecha por la ia)
const imprimirArreglo2 = (...array) => array.forEach(element => console.log(element))

// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo