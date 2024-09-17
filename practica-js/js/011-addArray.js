// Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

// escribe tu respuesta acá
//main function (by ia) ===> ganadora
const sumarArreglo = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}

//main function (by me)
const sumarArreglo2 = (arrayNums) => {
    return arrayNums.length !== 0 ? arrayNums.reduce((total, num) => total + num) : 0;
}

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0