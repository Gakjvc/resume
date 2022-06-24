
window.onload = changeLanguage()

var texto
var eng2
var ptbr
var lang

function start(){
  texto = document.querySelectorAll(".texto")
  eng = document.querySelectorAll(".eng")
  ptbr = document.querySelectorAll(".ptbr")
  lang = navigator.language
}

function changeLanguage(){
  if(ptbr == undefined){
    start()
  }  
  if(ptbr != undefined){
    let changeTo
    switch (lang) {
      case "pt-BR":
        changeTo = ptbr
        break;
      default:
        changeTo = eng
        break;
    }
    for (let index = 0; index < texto.length; index++) {
      texto[index].textContent = changeTo[index].textContent
    }
  }
}