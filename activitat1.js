//1
function comparaNumeros(a, b) {
    // Escriu la teva solució aquí
    if (a > b) {
        console.log(`${a} és mayor que ${b}`);
    } else if (a < b) {
        console.log(`${b} és menor que ${a}`);
    } else {
        console.log(`${a} és igual a ${b}`);
    }
}

//2
function suma1a100() {
    // Escriu la teva solució aquí
    let suma = 0;
    for (let i = 1; i < 100; i++) {
        suma += i;
    }
    console.log(suma);
}

//3
function PedraPaper() {
    // Escriu la teva solució aquí
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Tisores");
        } else if (i % 3 === 0) {
            console.log("Pedra");
        } else if (i % 5 === 0) {
            console.log("Paper");
        } else {
            console.log(i);
        }
    }
}


//4
function esParell(num) {
    // Escriu la teva solució aquí
    if (num % 2 == 0) {
        console.log("true")
    } else console.log("false");
}

//5
function revertirCadena(cadena) {
    // Escriu la teva solució aquí
    var cadenaInvertida = cadena.split("").reverse().join("");
    console.log(cadenaInvertida);

}

//6
function factorial(n) {
    // Escriu la teva solució aquí
    if (n < 0) {
        console.log("Error!");
    } else if (n == 0) {
        console.log(1);
    } else {
        let result = 1;
        for (var i = n; i >= 1; i--) {
            result *= i;
        }
        console.log(result);
    }

}

//7
function filtrarPositius(array) {
    // Escriu la teva solució aquí
    var positius = []; 
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positius.push(array[i]); 
        }
    }
    return positius; 
}

function exercici7() {
    var numeros = [-2, -1, 0, 1, 2, 3]; 
    var positius = filtrarPositius(numeros);
    console.log(positius); 
}


function filtrarPositiusBoton() {
    exercici7(); 
}






