// Cuadrado lleno:
// *****
// *****
// *****
// *****
// *****

const squareFigure = (n) => {
    for (let i = 0; i < n; i++){
        console.log('* '.repeat(n))
    }
}

console.log(squareFigure(2));


// Cuadrado hueco
// *****
// *   *
// *   *
// *   *
// *****

const squareVoidFigure = (n) => {
    for (let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            console.log('* '.repeat(n))
        } else {
            console.log('* ' + '  '.repeat(n-2) + '* ')
        }
    }
}

console.log(squareVoidFigure(4));


// Piramide
// *
// ***
// *****
// *******
// *********

const triangleFigure = (n) => {
    for (let i = 0; i < n; i++){
        console.log('* '.repeat(i+1))
    }
}

console.log(triangleFigure(4));


//Piramide Invertida
// *********
// *******
// *****
// ***
// *

const triangleInvFigure = (n) => {
    for (let i = n; i > 0; i--){
        console.log('* '.repeat(i))
    }
}

console.log(triangleInvFigure(4));


//Diamente
// *
// ***
// *****
// *******
// *********
// *******
// *****
// ***
// *

const diamondFigure = (n) => {
    for (let i = 0; i < n - 1; i++){
        console.log('* '.repeat(i+1))
    }
    for (let i = n; i > 0; i--){
        console.log('* '.repeat(i))
    }
}

console.log(diamondFigure(4));