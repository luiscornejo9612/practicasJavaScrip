function convertiRgb() {
    r = parseInt(prompt("Ingrese el primer valor"));
    g = parseInt(prompt("Ingrese el primer valor"));
    b = parseInt(prompt("Ingrese el primer valor"));

    var r = r.toString(16).toUpperCase();
    var g = g.toString(16).toUpperCase();
    var b = b.toString(16).toUpperCase();

    if (r.length === 1) {
        console.log("#0" + r + "0" + g + "0" + b);
    }
    else if (g.length === 1) {
        console.log("#0" + r + "0" + g + "0" + b);
    }
    else if (b.length === 1) {
        console.log("#0" + r + "0" + g + "0" + b);
    } else
        console.log("#" + r + g + b);
    

}

