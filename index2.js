let val1 = document.querySelector("#input1")
let val2 = document.querySelector("#input2")
let val3 = document.querySelector("#input3")
const btnv = document.querySelector(".btnv")
const msj = document.querySelector("#msj")

btnv.addEventListener("click", () => {
    const resultado = Number(val1.value) + Number(val2.value) + Number(val3.value)

    if(val1.value < 0 || val2.value <0 || val3.value <0){
        msj.innerHTML = "Por favor ingrese números validos"
    }else if(resultado <= 10){
        msj.innerHTML = "Llevas " + resultado + " Stickers"
    }else{
        msj.innerHTML = "Llevas demasiados stickers!"
    }
})