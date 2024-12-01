const imagen = document.querySelector('#imagen')

let accionClick = Boolean;

accionClick = false;

imagen.addEventListener('click', function() {
    if (!accionClick){
        imagen.style.border = '10px solid red';
    }else{
        imagen.style.border = '';
    }
    accionClick = !accionClick;
})
