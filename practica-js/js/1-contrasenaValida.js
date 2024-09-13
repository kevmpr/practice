// Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

// escribe tu respuesta acá

//Funcion principal (hecha por mi) ==> ganadora
const contrasenaValida = password => password === '2Fj(jjbFsuj' || password === 'eoZiugBf&g9';

//Funcion principal (hecha por ia)
const contrasenaValida2 = contrasena => contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9";

//Funcion secundaria (hecha por mi)
const contrasenaValida3 = (password) => {
    if(password === '2Fj(jjbFsuj' || password === 'eoZiugBf&g9'){
        return true
    } else {
        return false
    }
}

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false