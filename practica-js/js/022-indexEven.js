// Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.

// escribe tu función acá
// main function (by me) ===> ganadora
const posiciones = (array) => {
    let arrayIndexEven = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            arrayIndexEven.push(i)
        }
    }

    return arrayIndexEven
}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []