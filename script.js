/*Minutos foco */

window.addEventListener("load", function() {
  numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value;
  minutosCirculo.textContent = valorInMinutosFoco;
  textoTempoRestante.textContent = 'minutos restantes';
})

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

btnAumentarFoco.addEventListener("click", aumentarFoco);
var circuloProgresso = document.getElementById('circulo-progresso')

var textoTempoRestante = document.getElementById('minutos-restantes')


var timerPausado = false; // Variável para controlar o estado do temporizador
var interval; // Variável para armazenar o intervalo

function start() {
    for (const button of allButtons) {
        if (!excludedButtons.includes(button.id)) {
          button.setAttribute('disabled', '');
        }
      }
      for (const input of allInputs) {
        input.setAttribute('disabled', '');
      }
    if (inMinutosFoco.value == 0 || inMinutosIntervalo.value == 0 || inCiclos.value == 0) {
        avisoPreenchimento.style.color = 'yellow';
        for (const button of allButtons) {
            if (!excludedButtons.includes(button.id)) {
              button.removeAttribute('disabled');
            }
          }
          for (const input of allInputs) {
            input.removeAttribute('disabled');
          }
        return;
    } else if (btnComecar.textContent === "Começar") {
            timerPausado = false;
            numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value;
            avisoPreenchimento.style.color = "transparent";
            btnComecar.textContent = "Pausar";
            btnCampoComecar.setAttribute("id", "active");
                interval = setInterval(function() {
                contador++;
                if (!timerPausado && contador <= inMinutosFoco.value * 60) {
                    var segundosFoco  = inMinutosFoco.value * 60;
                    var tempoRestante = segundosFoco - contador;
                    var minutosFoco   = tempoRestante / 60;
                    if (tempoRestante < 60) {
                        minutosCirculo.textContent = Math.floor(tempoRestante);
                        textoTempoRestante.textContent = 'segundos restantes';
                    } else {
                        minutosCirculo.textContent = Math.floor(minutosFoco);
                        textoTempoRestante.textContent = 'minutos restantes';
                      }
                    var circuloTimer = (tempoRestante * 360) / segundosFoco;
                        circuloProgresso.style.background = `conic-gradient(#FF2E2E ${circuloTimer}deg, #1E1F25 0deg)`;
                } else {
                    clearInterval(interval);
                    btnComecar.textContent = "Começar";
                    btnCampoComecar.setAttribute("id", "comecar");
                    circuloProgresso.style.background = 'conic-gradient(#FF2E2E 360deg, #1E1F25 0deg)';
                    contador = 0
                    timerPausado = false
                }
            }, 1000);
        }
}

function pause() {
    clearInterval(interval);
    btnComecar.textContent = "Começar";
    btnCampoComecar.setAttribute("id", "comecar");
    for (const button of allButtons) {
        if (!excludedButtons.includes(button.id)) {
          button.removeAttribute('disabled');
        }
      }
      for (const input of allInputs) {
        input.removeAttribute('disabled');
      }
  }


 
  var btnCampoReiniciar = document.getElementById("reiniciar")


  function reiniciar() {
    valorInMinutosFoco = 0;
    valorInCiclos = 0;
    valorInMinutosIntervalo = 0;
    inMinutosFoco.value = 0;
    inMinutosIntervalo.value = 0
    inCiclos.value = 0
    clearInterval(interval);
    btnComecar.textContent = "Começar";
    btnCampoComecar.setAttribute("id", "comecar");
    circuloProgresso.style.background = 'conic-gradient(#FF2E2E 360deg, #1E1F25 0deg)';
    contador = 0
    timerPausado = false
    minutosCirculo.textContent = 0;
    for (const button of allButtons) {
        if (!excludedButtons.includes(button.id)) {
          button.removeAttribute('disabled');
        }
      }
      for (const input of allInputs) {
        input.removeAttribute('disabled');
      }
  }

  btnCampoReiniciar.addEventListener("click", reiniciar)


  
  
  btnCampoComecar.addEventListener("click", () => {
    if (btnComecar.textContent === "Começar") {
      start();
    } else {
      pause();
    }
  });



/*Minutos intervalo */

var inMinutosIntervalo = document.getElementById("intervalo-set")
var valorInMinutosIntervalo = parseInt(inMinutosIntervalo.value)

var btnAumentarIntervalo = document.getElementById("btnAumentarIntervalo")
var btnDiminuirIntervalo = document.getElementById("btnDiminuirIntervalo")

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