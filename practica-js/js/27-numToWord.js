// Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.

// escribe tu función acá
// main function (by ia) ===> ganadora
const numerosAPalabras = array => array.map(number => {
    switch(number){
        case 0: return 'cero'
        case 1: return 'uno'
        case 2: return 'dos'
        case 3: return 'tres'
        case 4: return 'cuatro'
        case 5: return 'cinco'
        case 6: return 'seis'
        case 7: return 'siete'
        case 8: return 'ocho'
        case 9: return 'nueve'
    }
})

// main function (by me)
const numerosAPalabras2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 0:
                array[i] = "cero";
                break;
            case 1:
                array[i] = "uno";
                break;
            case 2:
                array[i] = "dos";
                break;
            case 3:
                array[i] = "tres";
                break;
            case 4:
                array[i] = "cuatro";
                break;
            case 5:
                array[i] = "cinc6";
                break;
            case 6:
                array[i] = "seis";
                break;
            case 7:
                array[i] = "siete";
                break;
            case 8:
                array[i] = "ocho";
                break;
            case 9:
                array[i] = "nueve";
                break;
        }
    }

    return array
};

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]
