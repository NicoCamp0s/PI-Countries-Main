export function Validate(input) {
    var errors = {};

    if (!input.name) {
        errors.name = "enter a valid name";

    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
        errors.name = "Numbers and equal characters are not allowed";
    }

    else if (input.difficulty < 1 || input.difficulty > 5) { 
        errors.difficulty = "enter value between 1 and 5";

    } else if (input.duration < 0 || input.duration > 300) {
        errors.duration = "enter a time between 1 and 300, it is expressed in minutes";
        
    } else if(!input.season) {
        errors.season = "please enter a valid season between winter, summer, autumn and spring"
    }

    return errors;
}

