window.onload = initPage;

function initPage(){
    var recarregou = sessionStorage.getItem("recarregou");
    if(recarregou){
        horaFinal.value = recarregou

    }
}
function calcular(){
sec = segundos.value
horas = parseInt(sec / 3600);
minutos = parseInt((sec % 3600) / 60)
segundos = parseInt((sec % 3600) % 60)
horaFinal.value = horas + ' : ' + minutos +' : '+ segundos;
sessionStorage.setItem("recarregou", horaFinal.value,);
window.location.reload();
}
