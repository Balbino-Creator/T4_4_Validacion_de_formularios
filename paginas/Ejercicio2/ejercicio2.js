window.onload = function(){
    const inputs = document.querySelectorAll('input');
    const parrafos = document.querySelectorAll('p');

    //Nombre
    inputs[0].addEventListener("blur", e=>{
        if(vacio(inputs[0])){
            parrafos[0].innerHTML = "Es obligatorio rellenar este formulario";
        } else {
            let regex = /[A-Za-z]/;
            if(regex.test(inputs[0].value)){
                parrafos[0].innerHTML = "Correcto";
            } else {
                parrafos[0].innerHTML = "Incorrecto";
            }
        }
    });

    //Apellido 1
    inputs[1].addEventListener("blur", e=>{
        if(vacio(inputs[1])){
            parrafos[1].innerHTML = "Es obligatorio rellenar este formulario";
        } else {
            let regex = /[A-Za-z]/;
            if(regex.test(inputs[1].value)){
                parrafos[1].innerHTML = "Correcto";
            } else {
                parrafos[1].innerHTML = "Incorrecto";
            }
        }
    });

    //Apellido 2
    inputs[2].addEventListener("blur", e=>{
        if(vacio(inputs[0])){
            parrafos[2].innerHTML = "Es obligatorio rellenar este formulario";
        } else {
            let regex = /[A-Za-z]/;
            if(regex.test(inputs[2].value)){
                parrafos[2].innerHTML = "Correcto";
            } else {
                parrafos[2].innerHTML = "Incorrecto";
            }
        }
    });

    //DNI
    inputs[3].addEventListener("blur", e=>{
        if(vacio(inputs[3])){
            parrafos[3].innerHTML = "Es obligatorio rellenar este formulario";
        } else {
            let regex = /[0-9]{8,8}[A-Z]$/;
            if(regex.test(inputs[3].value)){
                parrafos[3].innerHTML = "Correcto";
            } else {
                parrafos[3].innerHTML = "Incorrecto";
            }
        }
    });

    //Telefono
    inputs[4].addEventListener("blur", e=>{
        if(vacio(inputs[4])){
            parrafos[4].innerHTML = "Es obligatorio rellenar este formulario";
        } else {
            let regex = /[0-9]{3,3}\ [0-9]{3,3}\ [0-9]{3,3}/;
            if(regex.test(inputs[4].value)){
                parrafos[4].innerHTML = "Correcto";
            } else {
                parrafos[4].innerHTML = "Incorrecto";
            }
        }
    });

    //Email
    inputs[5].addEventListener("blur", e=>{
        if(vacio(inputs[5])){
            parrafos[5].innerHTML = "Es obligatorio rellenar este formulario";
        } else {
            let regex = /.+\@.+\..+/;
            if(regex.test(inputs[5].value)){
                parrafos[5].innerHTML = "Correcto";
            } else {
                parrafos[5].innerHTML = "Incorrecto";
            }
        }
    });

    //Usuario
    inputs[6].addEventListener("blur", e=>{
        if(vacio(inputs[6])){
            parrafos[6].innerHTML = "Es obligatorio rellenar este formulario";
        } else {
            let regex = /(?=.*[A-Za-z])(?=.*[0-9])(?=.*[.,]){8,}/;
            if(regex.test(inputs[6].value)){
                parrafos[6].innerHTML = "Correcto";
            } else {
                parrafos[6].innerHTML = "Incorrecto";
            }
        }
    });

}

/**
 * Comprueba si el usuario a escrito en el input o no
 * @param {input} Un elemento input del DOM
 * @returns true o false
 */
function vacio(input){
    if(input.value === "" || input.value === null){
        return true;
    }
    return false;
}