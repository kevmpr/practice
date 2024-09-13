// Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

// escribe tu respuesta acá
//Funcion principal (hecha por mi) ===> Ganadora
const calcularImpuestos = (age, incomes) => 18 <= age && 1000 <= incomes ? incomes * 0.4 : 0

//Funcion secundaria (hecha por mi)
const calcularImpuestos2 = (age, incomes) => {
    if (18 <= age && 1000 <= incomes){
        return incomes * 0.4
    } else {
        return 0
    }
}

//Funcion principal (hecha por la ia)
const calcularImpuestos3 = (edad, ingresos) => {
    if (edad >= 18 && ingresos >= 1000) {
        return (ingresos * 40) / 100
    } else {
        return 0
    }
}

// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0