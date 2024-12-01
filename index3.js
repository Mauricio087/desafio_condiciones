let n1 = document.querySelector('#num1')
let n2 = document.querySelector('#num2')
let n3 = document.querySelector('#num3')
const btn_2 = document.querySelector('.btn_2')
const mensaje = document.querySelector('#mensaje')

const numero1 = n1.value
const numero2 = n2.value
const numero3 = n3.value

btn_2.addEventListener('click', () => {
    const numero1 = Number(n1.value)
    const numero2 = Number(n2.value)
    const numero3 = Number(n3.value)
    if(numero1 == 9 && numero2 == 1 && numero3 == 1){
       mensaje.innerHTML = "Password 1 es Correcto"
    }else if((numero1 == 7 && numero2 == 1 && numero3 == 4)){
        mensaje.innerHTML = "Password 2 es Correcto"
    }else{
        mensaje.innerHTML = "Password Incorrecto"
    }
})