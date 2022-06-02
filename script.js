var btnStart = document.getElementById("btn1")
var btnStop = document.getElementById("btn2")
var square = document.getElementById("square")
var Salvar = document.getElementById("salve")
var divTempoSalvo = document.getElementById("divTempoSalvo")
var reset = document.getElementById("reset")
btnStart.addEventListener("click", startTime)
btnStop.addEventListener("click", stopTime)
Salvar.addEventListener("click", salveTime)
reset.addEventListener("click", resetSquare)
var ml = 0
var s = 0
var m= 0
var h = 0 
var STime;
onload = function(){
    const dados = localStorage.getItem("valor")
    const dadosItem = JSON.parse(dados)
    divTempoSalvo.innerHTML = dadosItem
    const removerItem = document.getElementsByClassName('removeLink')
    for(remove of removerItem){
        remove.addEventListener('click',remover )
    }
}
function twoDigits(digits){
    if(digits<10){
        return('0'+ digits)
    } else{
        return(digits)
    }
   
}
 function startTime(){  
    stopTime()
    time()
    STime = setInterval(time,10)
function time(){
    ml++
     if(ml==100){
         ml = 0
         s++   
     } if(s==60){
         s = 0
         m++
     } 
     if(m==60){
         m = 0
         h++
     }  
   if(m<60 && h==0){
    square.innerText= twoDigits(m)+':'+twoDigits(s)+':'+twoDigits(ml)
   } else {
    square.innerText= twoDigits(h)+ ':'+twoDigits(m)+':'+twoDigits(s)+':'+twoDigits(ml)
}
}

}    
function stopTime(){
    clearInterval(STime)     
}
function salveTime(){
    if(square.innerHTML=="00:00:00"){
        alert('Inicie o cronômetro')
    } else if(h>0){
    const tempoSalvo =
            `${twoDigits(h)+
            ':'+
            twoDigits(m)+
            ':'+
            twoDigits(s)+
            ':'+
            twoDigits(ml)}` 
    divTempoSalvo.innerHTML = "<div class='miniConteiner'><p class= 'pTempo'></p><a class='removeLink'>🗑️</a></div>" + divTempoSalvo.innerHTML
    let par = document.getElementsByClassName('pTempo')[0] 
    par.innerHTML = tempoSalvo
    const valor = JSON.stringify(divTempoSalvo.innerHTML)
    localStorage.setItem("valor", valor)
    onload()
    } else {
    const tempoSalvoSemHora =
            `${
            twoDigits(m)+
            ':'+
            twoDigits(s)+
            ':'+
            twoDigits(ml)}` 
    divTempoSalvo.innerHTML = "<div class='miniConteiner'><p class= 'pTempo'></p><a class='removeLink'>🗑️</a></div>" + divTempoSalvo.innerHTML
    let par = document.getElementsByClassName('pTempo')[0] 
    par.innerHTML = tempoSalvoSemHora
    const valor = JSON.stringify(divTempoSalvo.innerHTML)
    localStorage.setItem("valor", valor)
    onload()

    }
    
}

function remover(){
   const removerInner = this
   const pai = removerInner.parentElement
   pai.remove()
   const valor = JSON.stringify(divTempoSalvo.innerHTML)
   localStorage.setItem("valor", valor)
   onload()
}

    
function resetSquare(){
    clearInterval(STime)
    ml = 0
    s = 0
    m= 0
    h = 0
    square.innerHTML = "00:00:00"
}
