// Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// escribe tu respuesta acá
//main function (by me) ==> ganadora
const contarRango = (n1, n2) => {
    if (n1 < n2){
        return n2 - n1 - 1
    } else if (n1 < n2){
        return n1 - n2 - 1
    } else {
        return 0
    }
}

//main function (by ia)
const contarRango2 = (num1, num2) => {
    let count = 0
    for (let i = num1 + 1; i < num2; i++) {
        count++
    }
    return count
}

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0