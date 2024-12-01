let val1 = document.querySelector("#input1")
let val2 = document.querySelector("#input2")
let val3 = document.querySelector("#input3")
const btnv = document.querySelector(".btnv")
const msj = document.querySelector("#msj")

const v1 = val1.value
const v2 = val2.value
const v3 = val3.value

let resultado = Number
resultado = 0

btnv.addEventListener("click", () => {
    const v1 = (val1.value)
    const v2 = (val2.value)
    const v3 = (val3.value)
    resultado = Number(v1) + Number(v2) + Number(v3)
    if(v1 < 0 || v2 <0 || v3 <0){
        msj.innerHTML = "ingrese números validos"
    }else if(resultado <= 10){
        msj.innerHTML = "Llevas " + resultado + " Stickers"
    }else{
        msj.innerHTML = "Llevas demasiados stickers!"
    }
})