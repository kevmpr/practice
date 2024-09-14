// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).
// Los complementos son los siguientes:
// G -> C
// C -> G
// T -> A
// A -> U

// escribe tu función acá
//main function (by me and ia) ===> ganadora
const transcribir = (adn) => {
    let arn = "";
    for (let i = 0; i < adn.length; i++) {
        switch (adn[i]) {
            case "G":
                arn += "C";
                break;
            case "C":
                arn += "G";
                break;
            case "T":
                arn += "A";
                break;
            case "A":
                arn += "U";
                break;
        }
    }
    return arn
}

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"