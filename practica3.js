function tiempo() {
    let num1 = prompt ("ingrese el primero valor");
    let num2 = prompt ("ingrese el segundo valor");
    let num3 = prompt ("ingrese el tercero valor");
    var data;
    data = new Date(2023,5,7,parseInt(num1),parseInt(num2),parseInt(num3));
    console.log(data);


}

function fechaValida() {
    let any = prompt ("ingrese el primero valor");
    any = parseInt(any)
    let mes = prompt ("ingrese el segundo valor");
    mes = parseInt(mes);
    let dia = prompt ("ingrese el tercero valor");
    dia = parseInt(dia);
    var data;
    data = new Date (any,mes,dia);
    data.getFullYear(any);
    data.getMonth(mes);
    data.getDay(dia);
    
    if (any == getFullYear() && mes == getMonth() && dia == getDay()) {
        console.log("La data es correcta");
    }

}

function cuantosDias(){
    let dias = prompt ("ingrese el numero de dias");
    dias = parseInt(dias);
    let anyos = Math.floor( dias / 365);
    let meses = dias % 365;
    dias = (meses % 360) % 30;
    console.log(anyos, "/", meses, "/", dias)
}

function converFC () {
    let convertir = prompt ("ingrese Fº O Cº");
    let temperatura = parseFloat(prompt ("ingrese la temperatura"));
    //Convertir a celcius
    if (convertir == "Fº") {
        let resultato = (temperatura - 32) / (9.0 / 5.0);
        console.log(resultado);
    }
    //Convertir a farenheit 
    if (convertir == "Cº") {
        let resultato = (temperatura * (9.0 / 5.0)) + 32;
        console.log(resultado);
    }
}







