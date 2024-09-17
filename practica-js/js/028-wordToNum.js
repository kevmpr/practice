// Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.

// escribe tu función acá
// main function (by me and ia) ===> ganadora
const palabrasANumeros = array => array.map(element => {
        switch (element) {
            case 'cero': return 0;
            case 'uno': return 1;
            case 'dos': return 2;
            case 'tres': return 3;
            case 'cuatro': return 4;
            case 'cinco': return 5;
            case 'seis': return 6;
            case 'siete': return 7;
            case 'ocho': return 8;
            case 'nueve': return 9;
            default: return -1;
        }
    }
);

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]
