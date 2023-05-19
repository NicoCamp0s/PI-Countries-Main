export function Validate(input) {
    var errors = {};

    if (!input.name) {
        errors.name = "ingrese un nombre valido";

    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
        errors.name = "no se permiten numeros ni caracteres iguales";
    }

    else if (input.difficulty < 1 || input.difficulty > 5) { 
        errors.difficulty = "ingrese valor entre 1 y 5";

    } else if (input.duration < 0 || input.duration > 300) {
        errors.duration = "ingrese un tiempo entre 1 y 300, esta expresado en minutos";
    } else if(!input.season) {
        errors.season = "porfavor ingrese una temporada valida"
    }

    return errors;
}

