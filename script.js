/**/
var textoTempoRestante = document.getElementById("minutos-restantes")

window.addEventListener("load", function() {
  numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value;
  minutosCirculo.textContent = valorInMinutosFoco;
  textoTempoRestante.innerHTML = 'minutos</br>restantes';
})

window.addEventListener("load", function() {
  minutosCirculo.textContent = inMinutosFoco.value
});

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

var elementoPai = document.getElementById("elemento-pai");

var textoTimer = document.getElementById("textoTimer")


function controleBotoes(e) {
  var elementoClicado = e.target;
  if (elementoClicado.classList.contains("mais") || elementoClicado.classList.contains("menos")) {
      var campo = elementoClicado.parentNode.querySelector(".campo");
      var valorCampo = parseInt(campo.value, 10);
      if (elementoClicado.classList.contains("mais")) {
          valorCampo += 1;
      } else if (elementoClicado.classList.contains("menos")) {
          valorCampo -= 1;
      }
      campo.value = valorCampo;
  }
}

elementoPai.addEventListener("click", controleBotoes);


var circuloProgresso = document.getElementById('circulo-progresso')

var textoTempoRestante = document.getElementById('minutos-restantes')




var timerPausado = false; // Variável para controlar o estado do temporizador
var interval; // Variável para armazenar o intervalo
var contador = 0;
var tempoRestante = 1500;
var emFoco = true;

var contadorCiclos = 1;



const allButtons = document.querySelectorAll('button');
const allInputs = document.querySelectorAll('input');
const excludedButtons = ['btnComecar', 'btnPausar', 'btnReiniciar'];



function configurarBotoes() {
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
    avisoPreenchimento.style.fontSize = '0.6em'
    for (const button of allButtons) {
        if (!excludedButtons.includes(button.id)) {
          button.removeAttribute('disabled');
        }
      }
      for (const input of allInputs) {
        input.removeAttribute('disabled');
      }
}
}

var corFoco = "#FF2E2E";
var corIntervalo = "#04C800";



function timer(minutosTimer, cor) {
    contador++;
    if (!timerPausado && contador <= minutosTimer.value * 60) {
        var segundosTimer  = minutosTimer.value * 60;
        tempoRestante = segundosTimer - contador;
        var minutosFoco   = tempoRestante / 60;
        if (tempoRestante < 60) {
            minutosCirculo.textContent = Math.floor(tempoRestante);
            textoTempoRestante.textContent = 'segundos restantes';
        } else {
            minutosCirculo.textContent = Math.floor(minutosFoco);
            textoTempoRestante.textContent = 'minutos restantes';
          }
        var circuloTimer = (tempoRestante * 360) / segundosTimer;
            circuloProgresso.style.background = `conic-gradient(${cor} ${circuloTimer}deg, #1E1F25 0deg)`;
    } else {
      if(emFoco) {
        circuloProgresso.style.background = `conic-gradient(${corIntervalo} 360deg, #1E1F25 0deg)`;
        emFoco = false;
        textoTimer.innerHTML = "Intervalo 🍅"
        btnCampoComecar.setAttribute("id", "intervaloSet");
        console.log("não está mais em foco")
      } else {
        circuloProgresso.style.background = `conic-gradient(${corFoco} 360deg, #1E1F25 0deg)`;
        emFoco = true;
        textoTimer.innerHTML = "Foco 🍅"
        btnCampoComecar.setAttribute("id", "comecar");
        console.log("está em foco")
      }
      clearInterval(interval);
      if(emFoco) {
        if(inMinutosIntervalo.value < 1) {
          minutosCirculo.textContent = inMinutosFoco.value * 60;
        } else {
          minutosCirculo.textContent = inMinutosFoco.value
        }
      } else {
        if(inMinutosFoco.value < 1) {
          minutosCirculo.textContent = inMinutosIntervalo.value * 60;
        } else {
          minutosCirculo.textContent = inMinutosIntervalo.value
        }
      }
      contador = 0;
      configurarBotoes()
      btnComecar.textContent = "Começar";

    }
}

function validacaoPreenchimento() {
  avisoPreenchimento.style.color = 'yellow';
    avisoPreenchimento.style.fontSize = '0.6em'
    for (const button of allButtons) {
        if (!excludedButtons.includes(button.id)) {
          button.removeAttribute('disabled');
        }
      }
      for (const input of allInputs) {
        input.removeAttribute('disabled');
      }
}

function start() {
  configurarBotoes();
  if (inMinutosFoco.value == 0 || inMinutosIntervalo.value == 0 || inCiclos.value == 0) {
    validacaoPreenchimento()
    return
}
  if (btnComecar.textContent === "Começar") {
            timerPausado = false;
            numeroCiclos.textContent = `Ciclos: ${contadorCiclos}/${inCiclos.value}`;
            avisoPreenchimento.style.color = "transparent";
            btnComecar.textContent = "Pausar";
            btnCampoComecar.setAttribute("id", "active");
            interval = setInterval(function(){
              timer(inMinutosFoco, corFoco)
            }, 1000);
        }
        console.log(contadorCiclos)       
}

function intervalo() {
  configurarBotoes();
  if (btnComecar.textContent === "Começar") {
    timerPausado = false;
    btnComecar.textContent = "Pausar";
    btnCampoComecar.setAttribute("id", "active");
    interval = setInterval(function(){
      timer(inMinutosIntervalo, corIntervalo)
    }, 1000);
    contadorCiclos++
    return contadorCiclos
}
}

function novoTempo() {
  if(confirm("Quer começar um novo tempo?")) {
    reiniciar()
  } else if (emFoco) {
    start()
  } else {
    intervalo()
  }
}

function pause() {
  elementoPai.removeEventListener("click", controleBotoes)
  timerPausado = true;
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
      elementoPai.addEventListener("click", novoTempo)
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
      elementoPai.removeEventListener("click", novoTempo)
      elementoPai.addEventListener("click", controleBotoes)
  }



  btnCampoReiniciar.addEventListener("click", reiniciar)


  
  
  btnCampoComecar.addEventListener("click", () => {
    if (btnComecar.textContent === "Começar") {
      if(emFoco) {
        start();
      } else {
        intervalo();
      }
    } else {
      pause();
    }
  });



/*Minutos intervalo */

var inMinutosIntervalo = document.getElementById("intervalo-set")
var valorInMinutosIntervalo = parseInt(inMinutosIntervalo.value)




/*Numero de ciclos */

var inCiclos = document.getElementById("ciclos-set")
var valorInCiclos = parseInt(inCiclos.value)

