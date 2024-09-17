// Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).
// Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

// escribe tu función acá
// main function (by me) ===> ganadora
const distancia = (string1, string2) => {
    let diff = 0;
    
    if (string1.length < string2.length){
        for (let i = 0; i < string2.length; i++){
            if (string1[i] !== string2[i]){
                diff++
            }
        }
    } else {
        for (let i = 0; i < string1.length; i++){
            if (string1[i] !== string2[i]){
                diff++
            }
        }
    }

    return diff
}

// main function (by ia)
const distancia2 = (str1, str2) => str1.split('').filter(letter => !str2.includes(letter)).length

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
console.log(distancia("sol", "soledad")) // 4