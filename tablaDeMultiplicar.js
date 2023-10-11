function tablaDeMultiplicar() {
    let num1 = parseInt(prompt("Introdueix un número de files"));
    let num2 = parseInt(prompt("Introdueix un número de columnes"));

    let taula = document.createElement("table");
    let cuerpo = document.createElement("tbody");
    taula.border = 1;
    for (let i = 1; i < num1; i++) {
        let fila = document.createElement("tr");
        for (let n = 1; n < num2; n++) {
            let columna = document.createElement("td");
            let content = document.createTextNode(i * n);
            columna.appendChild(content);
            fila.appendChild(columna);
        }
        taula.appendChild(fila);
    }
    cuerpo.appendChild(taula);
    document.body.appendChild(taula);
}
