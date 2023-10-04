function mult () {
    let multiplicar = prompt ("ingrese aqui el numero a multiplicar",0);
    for (let num = 0; num <= 10; num++) {
        let result = multiplicar * num;
        console.log(`${multiplicar} * ${num} = ${result}`);
        
    }
}

function fibo() {
    let fibonacci = prompt("ingrese el numero");
    let a = 1;
    let b = 1;
    console.log(a);
    console.log(a);
    for (let i = 3; i <= fibonacci; i++){
        let result = a + b;
        console.log(result);
        a = b;
        b = result;
    
    }
}