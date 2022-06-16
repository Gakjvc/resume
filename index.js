
document.getElementById("language").addEventListener("click",changeLanguage())

var texto
var eng2
var ptbr

function start(){
  texto = document.querySelectorAll(".texto")
  eng = document.querySelectorAll(".eng")
  ptbr = document.querySelectorAll(".ptbr")
}

function changeLanguage(){
  ptbrcheck = document.getElementById("language").checked
  if(ptbr == undefined){
    start()
  }  
  if(ptbr != undefined){
    let changeTo
    ptbrcheck ? changeTo = ptbr : changeTo = eng 
    for (let index = 0; index < texto.length; index++) {
      texto[index].textContent = changeTo[index].textContent
    }
  }
}