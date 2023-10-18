function tablaPiramide() {
    let num1 = prompt("Ingresa el valor"); // Establecer el tamaño de la pirámide

    let taula = document.createElement("table");
    let cuerpo = document.createElement("tbody");

    for (let i = 0; i < num1; i++) {
        let fila = document.createElement("tr");

        // Calcular la cantidad de espacios en blanco antes de la primera celda
        let numEspacios = num1 - i - 1;

        for (let n = 0; n < numEspacios; n++) {
            let columna = document.createElement("td");
            columna.style.width = "20px"; // Establecer el ancho de la celda en 20 píxeles
            columna.style.height = "20px"; // Establecer la altura de la celda en 20 píxeles
            fila.appendChild(columna);
        }

        // Calcular la cantidad de celdas en la fila
        let numCeldas = 2 * i + 1;

        for (let n = 0; n < numCeldas; n++) {
            let columna = document.createElement("td");
            columna.style.width = "20px"; // Establecer el ancho de la celda en 20 píxeles
            columna.style.height = "20px"; // Establecer la altura de la celda en 20 píxeles
            columna.style.border = "1px solid black"; // Agregar un borde a las celdas
            columna.style.backgroundColor = "red";  // Color del fondo de las celdas
            fila.appendChild(columna);
        }
        taula.appendChild(fila);
    }

    cuerpo.appendChild(taula);
    document.body.appendChild(cuerpo); // Agregar el cuerpo de la tabla al documento
}




