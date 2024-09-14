// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:
// Nota: Intentarlo hacer sin el método Math.min de JavaScript.

// escribe tu función acá
// main function (by me)
const min = array => {
    let minNum = 0, flag = 0

    for(let i = 0; i < array.length; i++){
        if (flag === 0){
            minNum = array[i]
            flag = 1
        }

        if (minNum > array[i]){
            minNum = array[i]
        }
    }

    return minNum
}

// main function (by ia)
const min2 = array => Math.min(... array)

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2