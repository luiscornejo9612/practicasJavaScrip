// Opcion uno
/*function pideArxiu() {
    var nom = prompt("ingrese  nom de arxiu");
    var separador = "."
    separador = nom.split(separador);
    var tamaño = separador.pop();
    console.log(tamaño);
}*/


// Opcion dos
function pideArxiu() {
    var nom = prompt("ingrese  nom de arxiu");
    var separador = "."
    separador = nom.split(separador);
    var tamaño = separador.length;
    console.log(separador[tamaño-1]);
}

function mismoNum() {
    var tex = prompt("ingrese  un texto");
    
    for (let i = 0; i <= tex.length; i++) {
        var contador = 0;
        if (i === tex.charAt(i) && i === tex.charAt(i)) {
            contador++
            console.log("hay la misma cantidad de a" + contador + "que de b" + contador);
        }
        else {
            console.log("no hay la misma cantidad");
        }
    }
}

/*Obtener un numero al azar entre (0 - 100) Se trata de que el usuario lo adivine si lo acierta se le mostrara 
"obtenido en intentos" si introduce un 0 se pintara "Game over" y saldrá, si falla ser le dirá "mayor" o "menor", 
si introduce algún valor invalido no pasa nada se sigue pero se cuenta un intento mas 
*/

function encuentraNumero() { 
    var numeroAleatorio = Math.floor((Math.random() * 100 + 1));
    var contador = 0;
    do {
        var num = prompt("Ingrese un valor");
        if (isFinite(num) && num > 0) {
            if (num < numeroAleatorio) {
                alert("Mayor");
                contador++;
            }
            else if(num > numeroAleatorio){
                alert("Menor");
                contador++;
            }
            else{
                alert("Haz acertado el numero es " +numeroAleatorio+ " numero de intentos "+ contador);
                break;
            }         
        }
        else if (num < 1){
            alert("GAME OVER");
            break;
        }
        else{
            alert("valor incorrecto");
            contador++;
        }
    } while (num != numeroAleatorio); 
}