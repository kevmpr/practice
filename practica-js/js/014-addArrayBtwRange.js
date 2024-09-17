// Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).
// Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

// escribe tu respuesta acá
// main function (by ia)
const sumarArreglo = (array, start, end) => start + end !== 0 ? array.slice(start, end + 1).reduce((total, element) => total + element, 0) : 0

// main function (by me)
const sumarArreglo2 = (array, a, b) => {
    suma = 0;
    
    if (a < b){
        for(let i = a; i <= b; i++){
            suma += array[i]
        }
    } else if(a > b){
        for(let i = b; i <= a; i++){
            suma += array[i]
        }
    } else {
        return a + b
    }

    return suma
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0