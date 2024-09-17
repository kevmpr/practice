// Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:
// Nota: Intentarlo hacer sin el método Math.max de JavaScript.

// escribe tu función acá
// main function (by me) ===> ganadora
const max = array => {
    let maxNum = 0

    for(let i = 0; i < array.length; i++){
        if (maxNum < array[i]){
            maxNum = array[i]
        }
    }

    return maxNum
}

// main function (by ia)
const max2 = array => Math.max(...array)

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9