/*Minutos foco */

var inMinutosFoco = document.getElementById("foco-set")
var valorInMinutosFoco = parseInt(inMinutosFoco.value)

var avisoPreenchimento = document.getElementById("aviso-preenchimento")

var btnComecar = document.getElementById("btnComecar")
var btnCampoComecar = document.getElementById("comecar")

var btnAumentarFoco = document.getElementById("btnAumentarFoco")
var btnDiminuirFoco = document.getElementById("btnDiminuirFoco")

btnDiminuirFoco.addEventListener("click", function() {
    if(valorInMinutosFoco <= 0) {
        return
    }
    valorInMinutosFoco -= 1;
    return inMinutosFoco.value = valorInMinutosFoco
})

btnAumentarFoco.addEventListener("click", function() {
    valorInMinutosFoco += 1;
    return inMinutosFoco.value = valorInMinutosFoco
})

btnCampoComecar.addEventListener("click", function(){
    if(inMinutosFoco.value == 0 || inMinutosIntervalo.value == 0 || inCiclos.value == 0) {
        avisoPreenchimento.style.color = 'yellow';
        return
    } else {
        if (btnComecar.textContent === "Começar") {
            avisoPreenchimento.style.color = "transparent";
            btnComecar.textContent = "Pausar";
            btnCampoComecar.setAttribute("id", "active")
          } else {
            btnComecar.textContent = "Começar";
            btnCampoComecar.setAttribute("id", "comecar")
          }
    }
})



/*Minutos intervalo */

var inMinutosIntervalo = document.getElementById("intervalo-set")
var valorInMinutosIntervalo = parseInt(inMinutosIntervalo.value)

var btnAumentarFoco = document.getElementById("btnAumentarIntervalo")
var btnDiminuirFoco = document.getElementById("btnDiminuirIntervalo")

btnDiminuirIntervalo.addEventListener("click", function() {
    if(valorInMinutosIntervalo <= 0) {
        return
    }
    valorInMinutosIntervalo -= 1;
    return inMinutosIntervalo.value = valorInMinutosIntervalo
})

btnAumentarIntervalo.addEventListener("click", function() {
    valorInMinutosIntervalo += 1;
    return inMinutosIntervalo.value = valorInMinutosIntervalo
})

/*Numero de ciclos */

var inCiclos = document.getElementById("ciclos-set")
var valorInCiclos = parseInt(inCiclos.value)

var btnDiminuirCiclos = document.getElementById("btnDiminuirCiclos")
var btnAumentarCiclos = document.getElementById("btnAumentarCiclos")

btnDiminuirCiclos.addEventListener("click", function() {
    if(valorInCiclos <= 0) {
        return
    }
    valorInCiclos -= 1;
    return inCiclos.value = valorInCiclos
})

btnAumentarCiclos.addEventListener("click", function() {
    valorInCiclos += 1;
    return inCiclos.value = valorInCiclos
})

