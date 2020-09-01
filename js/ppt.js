var btn_stone = document.getElementById('btn_stone');
var btn_paper =document.getElementById('btn_paper');
var btn_scissors = document.getElementById('btn_scissors');
var box = document.querySelector('.box-img');
var box_img_machine = document.querySelector('.box-img-machine');
var box_machine = document.querySelector('.board-box-machine');
var points_player =document.querySelector('.points-player');
var points_machine = document.querySelector('.points-machine');
var p_jugador= 0;
var p_pc=0;
var aleatorio = Math.floor(Math.random()*3);
var contador = 0;



function cambio_papel(){
    if (contador==0 ){             
        var j=  'papel';
        console.log('El jugador tiro:'+ j);
        validation(j,machine(contador));
        box.classList.add('papel');
        contador=1;
    }
    else{
        machine(contador);
        box.classList.remove('papel');
        box.classList.remove('piedra');
        box.classList.remove('tijera');
        contador=0;
    }
}
 
function cambio_piedra(){
    if (contador== 0 ){
        var j=  'piedra';
        console.log('El jugador tiro:'+ j);
        validation(j,machine(contador));
        box.classList.add('piedra');
        contador=1; 
    }
    else{
        machine(contador);
        box.classList.remove('papel');
        box.classList.remove('piedra');
        box.classList.remove('tijera');
        contador=0;
    }
}

function cambio_tijera(){
    if (contador == 0){
        var j=  'tijera';
        console.log('El jugador tiro:'+ j);
        validation(j,machine(contador));
        box.classList.add('tijera');
        contador=1; 
    }
    else{
        machine(contador);
        box.classList.remove('papel');
        box.classList.remove('piedra');
        box.classList.remove('tijera');
        contador=0;
    }
}

var opc = ["piedra","papel","tijera"];


function machine(contador){
    var i,j,k;
    for (i = opc.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = opc[i - 1];
        opc[i - 1] = opc[j];
        opc[j] = k; 
      
    }
    if(contador == 0){
        console.log('la maquina tiro:'+k);
        box_img_machine.classList.add(k);
        return String(k);
    }
    else{
        box_img_machine.classList.remove('papel');
        box_img_machine.classList.remove('piedra');
        box_img_machine.classList.remove('tijera');
    }  
}

function validation (p,pc){

    switch(true){
        case p === pc:
            console.log("EMPATE " +p +"|" +pc);
            break;
        case (p === 'papel' && pc !== 'tijera') || (p === 'piedra' && pc !== 'papel') || (p === 'tijera' && pc !== 'piedra'):
            p_jugador +=1;
            points_player.innerHTML = p_jugador;
            console.log("GANA EL JUGADOR CON:"+p+"|" +pc);
            break;
        
        default:
            p_pc +=1;
            points_machine.innerHTML = p_pc;
            console.log("PIERDES, TIRASTE:"+p+"|"+pc);
    }
}
/* function validation (){
    if(contador ==0){
        box.classList.add('papel');
        contador=1;
    }else if (contador==0){
        box.classList.add('piedra');
        contador=1;
    }else if (contador==0){
        box.classList.add('tijera');
        contador=1;
    }
    else{
        
        box.classList.remove('papel');
        box.classList.remove('tijera');
        box.classList.remove('piedra');
        contador=0;
    }
} */

/* btn_paper.addEventListener('click',cambio_papel);
btn_stone.addEventListener('click',cambio_piedra);
btn_scissors.addEventListener('click',cambio_tijera); */