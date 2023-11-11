window.onload = function(){
    const inputs = document.querySelectorAll('input');
    const boton = document.querySelector('#boton');

    boton.addEventListener('click', ()=>{
        if(vacio(inputs[0])){
            inputs[0].style.borderColor = "red";
        } else {
            let regex = /[A-Za-z]/;
            inputs[0].style.borderColor = regex.test(inputs[0].value) ? "green" : "red";
        }
        if(vacio(inputs[1])){
            inputs[1].style.borderColor = "red";
        } else {
            let regex = /[A-Za-z]/;
            inputs[1].style.borderColor = regex.test(inputs[1].value) ? "green" : "red";
        }
        if(vacio(inputs[2])){
            inputs[2].style.borderColor = "red";
        } else {
            let regex = /[0-9]{3,3}\-[0-9]{3,3}\-[0-9]{4,4}/;
            inputs[2].style.borderColor = regex.test(inputs[2].value) ? "green" : "red";
        }
        if(vacio(inputs[3])){
            inputs[3].style.borderColor = "red";
        } else {
            let regex = /.+\@.+\..+/;
            inputs[3].style.borderColor = regex.test(inputs[3].value) ? "green" : "red";
        }
        if(vacio(inputs[4])){
            inputs[4].style.borderColor = "red";
        } else {
            let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[.,]){8,}/;
            inputs[4].style.borderColor = regex.test(inputs[4].value) ? "green" : "red";
        }
        if(vacio(inputs[5])){
            inputs[5].style.borderColor = "red";
        } else {
            let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[.,]){8,}/;
            inputs[5].style.borderColor = regex.test(inputs[5].value) && inputs[4].value === inputs[5].value ? "green" : "red";
        }
    })

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