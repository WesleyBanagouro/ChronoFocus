var inMinutosFoco = document.getElementById("minutos-foco")
function minutos() {
    console.log(inMinutosFoco.value)
}

var btnComecar = document.getElementById("btnComecar");
btnComecar.addEventListener("click", minutos)

function aumentarFoco() {
    return inMinutosFoco.value += 1;
}

var btnAumentar = document.getElementById("btnAumentar")
btnAumentar.addEventListener("click", aumentarFoco)
