let n1 = document.querySelector("#num1")
let n2 = document.querySelector("#num2")
let n3 = document.querySelector("#num3")
const btn_2 = document.querySelector(".btn_2")
const mensaje = document.querySelector("#mensaje")

btn_2.addEventListener("click", () => {
    if(n1.value == 9 && n2.value == 1 && n3.value == 1){
       mensaje.innerHTML = "Password 1 es Correcto"
    }else if((n1.value == 7 && n2.value == 1 && n3.value == 4)){
        mensaje.innerHTML = "Password 2 es Correcto"
    }else{
        mensaje.innerHTML = "Password Incorrecto"
    }
})