function añoEnMiercoles() {
    var anyoUno = parseInt(prompt("Ingresa un año que esté dentro de 2000 y 2050"));
    var anyoDos = parseInt(prompt("Ingresa otro año que esté dentro de 2000 y 2050"));

    var encontrado = false; // Una variable para rastrear si se ha encontrado un año que comience un miércoles

    for (let i = anyoUno; i <= anyoDos; i++) {
        var data = new Date(i, 0, 1);    
        var dia = data.getDay(); // Obtenemos el día de la semana (0: Domingo, 1: Lunes, ..., 6: Sábado)
        if (dia === 3) { // 3 corresponde a miércoles
            alert(i + " empieza un miércoles.");
            encontrado = true;
            break; // Salimos del bucle ya que hemos encontrado un año que comienza un miércoles
        }
    }

    if (!encontrado) {
        alert("No hay ningún año que empiece un miércoles en el rango especificado.");
    }
}


