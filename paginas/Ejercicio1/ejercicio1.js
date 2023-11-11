window.onload = function(){
    const inputs = document.querySelectorAll('input');
    const parrafos = document.querySelectorAll('p');

    inputs[0].addEventListener("change", e=>{
        parrafos[0].innerHTML = validarMayusculas(inputs[0].value);
    });
    inputs[1].addEventListener("change", e=>{
        parrafos[1].innerHTML = validarCaracteresEspeciales(inputs[1].value);
    });
    inputs[2].addEventListener("change", e=>{
        parrafos[2].innerHTML = validarCorreo(inputs[2].value);
    });
    inputs[3].addEventListener("change", e=>{
        parrafos[3].innerHTML = validarTarjetaCredito(inputs[3].value);
    });
    inputs[4].addEventListener("change", e=>{
        parrafos[4].innerHTML = validarLongitud(inputs[4].value);
    });
    inputs[5].addEventListener("change", e=>{
        parrafos[5].innerHTML = validarNumero(inputs[5].value);
    });


    function validarMayusculas(parametro){
        let regex = /[A-Z]/;
        return regex.test(parametro);
    }

    function validarCaracteresEspeciales(parametro){
        let regex= /[!@#$%^&]/;
        return regex.test(parametro)
    }

    function validarCorreo(parametro){
        let regex= /.+\@.+\..+/;
        return regex.test(parametro)
    }

    function validarTarjetaCredito(parametro){
        let regex= /[0-9]{4,4}\-[0-9]{4,4}\-[0-9]{4,4}\-[0-9]{4,4}/;
        return regex.test(parametro)
    }

    function validarLongitud(parametro){
        let regex= /.{8,}/;
        return regex.test(parametro)
    }

    function validarNumero(parametro){
        let regex= /[0-9]+/;
        return regex.test(parametro)
    }
}