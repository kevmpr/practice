// Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

// Por ejemplo:

// 1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.

// escribe tu respuesta acá

//main function(by kevin and ia) ===> ganadora
const likes = (n) => {
    if(n < 1000){
        return n
    } else if(1000 <= n && n < 1000000){
        return `${Math.floor(n / 1000)}K`
    } else if(1000000 <= n){
        return `${Math.floor(n / 1000000)}M`
    }
}

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"