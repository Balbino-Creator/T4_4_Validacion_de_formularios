window.onload = function() {
    const lis = document.querySelectorAll('li');
    const username = document.querySelector('.username');
    const submit = document.querySelector('.submit');

    // Pone en rojo la condicion que no se cumple y en verde la que si
    submit.addEventListener('click', () =>{
        if(!vacio(username)){
            let regex1 = /[a-z]/;
            let regex2 = /[A-Z]/;
            let regex3 = /.{6,}/;
            
            lis[0].style.color = regex1.test(username.value) ? "green" : "red";
            lis[1].style.color = regex2.test(username.value) ? "green" : "red";
            lis[2].style.color = regex3.test(username.value) ? "green" : "red";
        }else{
            lis.forEach(li =>{
                li.style.color = "red";
            });
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