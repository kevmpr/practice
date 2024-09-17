// Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

// escribe tu función acá
// main function (by me) ==> ganadora
const imprimirMatriz = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].length; k++) {
            console.log(array[i][k]);
        }
    }
};

// main function (by ia)
const imprimirMatriz2 = array => array.forEach(element => console.log(element))

// código de prueba
console.log(
    imprimirMatriz([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
