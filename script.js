<<<<<<< HEAD
/**/
var textoTempoRestante = document.getElementById("minutos-restantes")
=======
/*Minutos foco*/
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20

window.addEventListener("load", function() {
  numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value;
  minutosCirculo.textContent = valorInMinutosFoco;
  textoTempoRestante.innerHTML = 'minutos</br>restantes';
})

window.addEventListener("load", function() {
<<<<<<< HEAD
=======
  numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value;
  minutosCirculo.textContent = valorInMinutosFoco;
  textoTempoRestante.innerHTML = 'minutos</br>restantes';
})

window.addEventListener("load", function() {
  inMinutosFoco.value = 25;
  inMinutosIntervalo.value = 5;
  inCiclos.value = 4;
  minutosCirculo.textContent = inMinutosFoco.value
});

window.addEventListener("load", function() {
  numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value;
  minutosCirculo.textContent = valorInMinutosFoco;
  textoTempoRestante.innerHTML = 'minutos</br>restantes';
})

window.addEventListener("load", function() {
  inMinutosFoco.value = 25;
  inMinutosIntervalo.value = 5;
  inCiclos.value = 4;
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20
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

window.addEventListener("load", function() {
  inMinutosFoco.value = 25;
  inMinutosIntervalo.value = 5;
  inCiclos.value = 4;
  minutosCirculo.textContent = inMinutosFoco.value
});





var timerPausado = false; // Variável para controlar o estado do temporizador
var interval; // Variável para armazenar o intervalo
var contador = 0;
<<<<<<< HEAD
var tempoRestante = 1500;
var emFoco = true;

=======
<<<<<<< HEAD
var tempoRestante = 1500;
=======
<<<<<<< HEAD
var tempoRestante = 1500;
=======
>>>>>>> c6144a807bf357e5ee72b3021efc572c105f5e39
>>>>>>> 06f8c7e2726fae1d51c0dbec12762030103207a8
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20


const allButtons = document.querySelectorAll('button');
const allInputs = document.querySelectorAll('input');
const excludedButtons = ['btnComecar', 'btnPausar', 'btnReiniciar'];
<<<<<<< HEAD

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
      contador = 0;
      configurarBotoes()
      btnComecar.textContent = "Começar";

    }
}

function start() {
  configurarBotoes();
    if (btnComecar.textContent === "Começar") {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 06f8c7e2726fae1d51c0dbec12762030103207a8


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
        avisoPreenchimento.style.fontSize = '0.6em'
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
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20
            timerPausado = false;
            numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value;
            avisoPreenchimento.style.color = "transparent";
            btnComecar.textContent = "Pausar";
            btnCampoComecar.setAttribute("id", "active");
<<<<<<< HEAD
            interval = setInterval(function(){
              timer(inMinutosFoco, corFoco)
            }, 1000);
        }       
}

function intervalo() {
  configurarBotoes();
  if (btnComecar.textContent === "Começar") {
    timerPausado = false;
    numeroCiclos.textContent = "Ciclos: 1/" + inCiclos.value;
    avisoPreenchimento.style.color = "transparent";
    btnComecar.textContent = "Pausar";
    btnCampoComecar.setAttribute("id", "active");
    interval = setInterval(function(){
      timer(inMinutosIntervalo, corIntervalo)
    }, 1000);
}
}

function novoTempo() {
  if(confirm("Quer começar um novo tempo?")) {
    reiniciar()
  } else {
    start()
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
=======
            interval = setInterval(function() {
            contador++;
            
                if (!timerPausado && contador <= inMinutosFoco.value * 60) {
                    var segundosFoco  = inMinutosFoco.value * 60;
                    tempoRestante = segundosFoco - contador;
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
                }
            }, 1000);
            btnAumentarFoco.removeEventListener("click", novoTempo)
            return tempoRestante
        }
        
}

function pause() {
  btnAumentarFoco.removeEventListener("click", aumentarFoco)
  console.log(tempoRestante)
  timerPausado = true;
  console.log(timerPausado)
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
    btnAumentarFoco.addEventListener("click", novoTempo);
  }

  function novoTempo() {
    if(confirm("quer começar um novo tempo?")){
      reiniciar()
      btnAumentarFoco.addEventListener("click", aumentarFoco)
    } else {
      start()
    }
    btnAumentarFoco.removeEventListener("click", novoTempo)
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20
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
<<<<<<< HEAD
      elementoPai.removeEventListener("click", novoTempo)
      elementoPai.addEventListener("click", controleBotoes)
=======
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20
  }



  btnCampoReiniciar.addEventListener("click", reiniciar)


  
  
  btnCampoComecar.addEventListener("click", () => {
    if (btnComecar.textContent === "Começar") {
<<<<<<< HEAD
      if(emFoco) {
        start();
      } else {
        intervalo();
      }
=======
      start();
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20
    } else {
      pause();
    }
  });
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
let timerAtivo = true;


let eventListenersAdded = false;

function start() {
  timerAtivo = false;
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
    avisoPreenchimento.style.fontSize = '0.6em';
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
    interval = setInterval(function () {
      contador++;
      if (!timerPausado && contador <= inMinutosFoco.value * 60) {
        var segundosFoco = inMinutosFoco.value * 60;
        var tempoRestante = segundosFoco - contador;
        var minutosFoco = tempoRestante / 60;
        if (tempoRestante < 60) {
          minutosCirculo.textContent = Math.floor(tempoRestante);
          textoTempoRestante.textContent = 'segundos restantes';
        } else {
          minutosCirculo.textContent = Math.floor(minutosFoco);
          textoTempoRestante.textContent = 'minutos restantes';
        }
        var circuloTimer = (tempoRestante * 360) / segundosFoco;
        circuloProgresso.style.background = `conic-gradient(#FF2E2E ${circuloTimer}deg, #1E1F25 0deg)`;
      }
    }, 1000);
  }
}

function pause() {
  timerAtivo = true;
  estadoTimer = 'pausado';
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

var btnCampoReiniciar = document.getElementById("reiniciar");

function reiniciar() {
  timerAtivo = true;
  valorInMinutosFoco = 0;
  valorInCiclos = 0;
  valorInMinutosIntervalo = 0;
  inMinutosFoco.value = 0;
  inMinutosIntervalo.value = 0;
  inCiclos.value = 0;
  clearInterval(interval);
  btnComecar.textContent = "Começar";
  btnCampoComecar.setAttribute("id", "comecar");
  circuloProgresso.style.background = 'conic-gradient(#FF2E2E 360deg, #1E1F25 0deg)';
  contador = 0;
  timerPausado = false;
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

btnCampoReiniciar.addEventListener("click", reiniciar);

if (!eventListenersAdded) {
  inMinutosFoco.addEventListener("input", function () {
    console.log("está mexendo no input");
  });

  btnAumentarFoco.addEventListener("click", function () {
    if (confirm("Deseja começar um novo tempo?")) {
      circuloProgresso.style.background = `conic-gradient(#FF2E2E 360deg, #1E1F25 0deg)`;
      contador = 0;
    }
  });

  eventListenersAdded = true;
}

btnCampoComecar.addEventListener("click", () => {
  if (btnComecar.textContent === "Começar") {
    start();
  } else {
    pause();
  }
});
>>>>>>> c6144a807bf357e5ee72b3021efc572c105f5e39
>>>>>>> 06f8c7e2726fae1d51c0dbec12762030103207a8
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20



/*Minutos intervalo */

var inMinutosIntervalo = document.getElementById("intervalo-set")
var valorInMinutosIntervalo = parseInt(inMinutosIntervalo.value)

<<<<<<< HEAD
=======
var btnAumentarIntervalo = document.getElementById("btnAumentarIntervalo")
var btnDiminuirIntervalo = document.getElementById("btnDiminuirIntervalo")
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20



/*Numero de ciclos */

var inCiclos = document.getElementById("ciclos-set")
var valorInCiclos = parseInt(inCiclos.value)

<<<<<<< HEAD
=======
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
>>>>>>> 1cea552c5b7743981d9a1faae2b952721a7fba20
