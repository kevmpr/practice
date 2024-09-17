// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).
// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

// escribe tu respuesta acá
//main function (by ia) ==> ganadora
const sumarRango2 = (num1, num2) => {
    let suma = 0
    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            suma += i
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            suma += i
        }
    }
    return suma
}

//main function (by me)
const sumarRango = (a, b) => {
    let totalSuma = 0
    if(a < b){
        for(let i = a; i <= b; i++){
            totalSuma += i;
        }
        return totalSuma
    } else if(a > b){
        for(let i = b; i <= a; i++){
            totalSuma += i;
        }
        return totalSuma
    } else {
        return 0
    }
}

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0