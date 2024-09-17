// Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

// escribe tu función acá
// main function (by me) ===> ganadora
const numAsteriscos = array => array.reduce((total, element) => total += element.filter(element => element === '*').length, 0)

// main function (by ia)
const numAsteriscos2 = array => {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === '*') total++
        }
    }
    return total
}

// código de prueba
console.log(
    numAsteriscos([
        ["*", "", "*"],
        ["", "*", ""],
        ["*", "", "*"],
    ])
);
// 5
