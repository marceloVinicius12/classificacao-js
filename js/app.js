let pontosFlamengo = 0,
  pontosVasco = 0;
let contagemvasco = 0;
let contagemFlamengo = 0;
let btVitoriaFlamengo = document.querySelector("#vitoria-flamengo");

btVitoriaFlamengo.onclick = () => {
  pontosFlamengo += CalcularPontos("vitoria");
  AtualizaTabelaPontos("flamengo");
};
let btEmpateFlamengo = document.querySelector("#empate-flamengo");

btEmpateFlamengo.onclick = () => {
  pontosFlamengo += CalcularPontos("empate");
  AtualizaTabelaPontos("flamengo");
};

let btderrotaFlamengo = document.querySelector("#derrota-flamengo");

btderrotaFlamengo.onclick = () => {
  pontosFlamengo += CalcularPontos("derrota");
  AtualizaTabelaPontos("flamengo");
  
};


let btVitoriavasco = document.querySelector("#vitoria-vasco");

btVitoriavasco.onclick = () => {
  pontosVasco += CalcularPontos("vitoria");
  AtualizaTabelaPontos("vasco");
};
let btEmpatevasco = document.querySelector("#empate-vasco");

btEmpatevasco.onclick = () => {
  pontosVasco += CalcularPontos("empate");
  AtualizaTabelaPontos("vasco");
};
let btderrotavasco = document.querySelector("#derrota-vasco");

btderrotavasco.onclick = () => {
  pontosVasco += CalcularPontos("derrota");
  AtualizaTabelaPontos("vasco");
};

function CalcularPontos(resultado) {
  if (resultado == "vitoria") {
    return 3;
  } else if (resultado == "empate") {
    return 1;
  } else {
    return 0;
  }
}
function AtualizaTabelaPontos(time) {
  if (time == "flamengo") {
    document.querySelector(".pontos-flamengo").innerHTML = pontosFlamengo;
  } else if (time == "vasco") {
    document.querySelector(".pontos-vasco").innerHTML = pontosVasco;
  }
}
