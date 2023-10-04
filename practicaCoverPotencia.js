function convertiBinario() {
    numero = prompt("ingrese un numero");
    if (numero === 0) {
        console.log("0");
    }

    var binario = '';
    
    while (numero > 0) {
      var residuo = numero % 2;
      binario = residuo + binario;
      numero = Math.floor(numero / 2);
    }
    
    console.log(binario);
}


function convertirOctal() {
    numero = prompt("ingrese un numero");
    if (numero === 0) {
        console.log("0");
    }

    var octal = '';
    
    while (numero > 0) {
      var residuo = numero % 8;
      octal = residuo + octal;
      numero = Math.floor(numero / 8);
    }
    
    console.log(octal);
}



function convertihexadecimal() {
    numero = prompt("ingrese un numero");
    let lsta = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    if (numero === 0) {
        console.log("0");
    }

    var hexadecimal = '';
    
    while (numero > 0) {
      var residuo = numero % 16;
      hexadecimal = lsta[residuo] + hexadecimal;
      numero = Math.floor(numero / 16);
    }
    
    console.log(hexadecimal);
}