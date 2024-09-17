// Determinar si un año dado es bisiesto.

// main function (by me) ===> ganadora
const anoBisiesto = (year) =>
    year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0;

// main function (by ia)
const anoBisiesto2 = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(anoBisiesto(1996)); //false
console.log(anoBisiesto(2001)); //false
console.log(anoBisiesto(2004)); //true
console.log(anoBisiesto(2100)); //false
console.log(anoBisiesto(2431)); //false
