/*Minutos foco */

var inMinutosFoco = document.getElementById("foco-set")
var valorInMinutosFoco = parseInt(inMinutosFoco.value)

var avisoPreenchimento = document.getElementById("aviso-preenchimento")

var btnComecar = document.getElementById("btnComecar")
var btnCampoComecar = document.getElementById("comecar")

var btnAumentarFoco = document.getElementById("btnAumentarFoco")
var btnDiminuirFoco = document.getElementById("btnDiminuirFoco")

/*Circulo timer */
var minutosCirculo = document.getElementById("minutos-circulo")
var numeroCiclos = document.getElementById("numero-ciclos")


function diminuirFoco()  {
    if(valorInMinutosFoco <= 0) {
        return
    }
    valorInMinutosFoco -= 1;
    return inMinutosFoco.value = valorInMinutosFoco
}

btnDiminuirFoco.addEventListener("click", diminuirFoco)

function aumentarFoco() {
    valorInMinutosFoco += 1;
    return inMinutosFoco.value = valorInMinutosFoco
}

btnAumentarFoco.addEventListener("click", aumentarFoco)

function start(){
    if(inMinutosFoco.value == 0 || inMinutosIntervalo.value == 0 || inCiclos.value == 0) {
        avisoPreenchimento.style.color = 'yellow';
        return
    } else {
        if (btnComecar.textContent === "Começar") {
            numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value
            avisoPreenchimento.style.color = "transparent";
            btnComecar.textContent = "Pausar";
            btnCampoComecar.setAttribute("id", "active")
          } else {
            btnComecar.textContent = "Começar";
            btnCampoComecar.setAttribute("id", "comecar")
          }

    }
}



btnCampoComecar.addEventListener("click", start)



/*Minutos intervalo */

var inMinutosIntervalo = document.getElementById("intervalo-set")
var valorInMinutosIntervalo = parseInt(inMinutosIntervalo.value)

var btnAumentarFoco = document.getElementById("btnAumentarIntervalo")
var btnDiminuirFoco = document.getElementById("btnDiminuirIntervalo")

function diminuirIntervalo() {
    if(valorInMinutosIntervalo <= 0) {
        return
    }
    valorInMinutosIntervalo -= 1;
    return inMinutosIntervalo.value = valorInMinutosIntervalo
}

btnDiminuirIntervalo.addEventListener("click", diminuirIntervalo)

function aumentarIntervalo() {
    valorInMinutosIntervalo += 1;
    return inMinutosIntervalo.value = valorInMinutosIntervalo
}
btnAumentarIntervalo.addEventListener("click", aumentarIntervalo)

/*Numero de ciclos */

var inCiclos = document.getElementById("ciclos-set")
var valorInCiclos = parseInt(inCiclos.value)

var btnDiminuirCiclos = document.getElementById("btnDiminuirCiclos")
var btnAumentarCiclos = document.getElementById("btnAumentarCiclos")

function diminuirCiclos() {
    if(valorInCiclos <= 0) {
        return
    }
    valorInCiclos -= 1;
    return inCiclos.value = valorInCiclos
}

btnDiminuirCiclos.addEventListener("click", diminuirCiclos)

function aumentarCiclos() {
    valorInCiclos += 1;
    return inCiclos.value = valorInCiclos
}
btnAumentarCiclos.addEventListener("click", aumentarCiclos)

