var btn = document.querySelector('.btn');
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
var pulsado =true;
var opc = ["piedra","papel","tijera"];
var elementos = btn.children.id ;


btn_paper.addEventListener('click',cambio_papel);
btn_stone.addEventListener('click',cambio_piedra);
btn_scissors.addEventListener('click',cambio_tijera);

function validacion_botones(elementos){
    if (elementos === btn_paper){
        var p='papel';
        cambio_papel();
        validation(p,machine(btn_paper));
        pulsado= false;

    }else if (elementos === btn_stone){
        var p='piedra';
        cambio_piedra();
        validation(p,machine(btn_stone));
        pulsado=false;
      
    }else if (elementos === btn_scissors) {
        var p='tijera';
        cambio_tijera();
        validation(p,machine(btn_scissors));
        pulsado=false;
    }    
}

function cambio_papel(){
    if(box.classList[0] === "box-img" && box.classList[1] ==="" ){
        box.classList.add('papel');
    }else if(box.classList[0] === "box-img" || box.classList[1] === "piedra" || box.classList[1] === "tijera" || box.classList[1] === "papel" ){
        box.classList.remove('piedra');
        box.classList.remove('tijera');
        box.classList.add('papel');
    }
}
 
function cambio_piedra(){
    if(box.classList[0] === "box-img" && box.classList[1] ===""){
        box.classList.add('piedra');
    }else if(box.classList[0] === "box-img" || box.classList[1] === "piedra" || box.classList[1] === "tijera" || box.classList[1] === "papel"){
        box.classList.remove('papel');
        box.classList.remove('tijera');
        box.classList.add('piedra');
    }
}

function cambio_tijera(){
    if(box.classList[0] === "box-img" &&  box.classList[1] ==="" ){
        box.classList.add('tijera');

    }else{
        box.classList.remove('papel');
        box.classList.remove('tijera');
        box.classList.add('tijera');
    }
}



function machine(btn){
    var i,j,k;
    for (i = opc.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = opc[i - 1];//ultimo valor del array la guardo en una variable
        opc[i - 1] = opc[j]; //cambio el valor del ultimo valor del array por un valor random del array
        opc[j] = k; //nueva pos random
        
    }
    if(box_img_machine.classList[0] ==="box-img-machine" && box_img_machine.classList[1]==="" && btn === 'btn_paper'){
        box_img_machine.classList.add(k);
        return k;
    }else if(box_img_machine.classList[0] === "box-img-machine" || box_img_machine.classList[1] === "piedra" || box_img_machine.classList[1] === "tijera" || box_img_machine.classList[1] === "papel" && btn === 'btn_paper' ){
        box_img_machine.classList.remove('piedra');
        box_img_machine.classList.remove('tijera');
        box_img_machine.classList.remove('papel');
        box_img_machine.classList.add(k);
        return k;
    }
    else if(box_img_machine.classList[0] ==="box-img-machine" && box_img_machine.classList[1]==="" && btn === 'btn_stone'){
        box_img_machine.classList.add(k);
    }
    else if(box_img_machine.classList[0] === "box-img-machine" || box_img_machine.classList[1] === "piedra" || box_img_machine.classList[1] === "tijera" || box_img_machine.classList[1] === "papel" && btn === 'btn_paper' ){
        box_img_machine.classList.remove('piedra');
        box_img_machine.classList.remove('tijera');
        box_img_machine.classList.remove('scissors');
        box_img_machine.classList.add(k);
        return k;
    }
    else if(box_img_machine.classList[0] ==="box-img-machine" && box_img_machine.classList[1]==="" && btn === 'btn_scissors'){
        box_img_machine.classList.add(k);
        return k;
    }
    else if(box_img_machine.classList[0] === "box-img-machine" || box_img_machine.classList[1] === "piedra" || box_img_machine.classList[1] === "tijera" || box_img_machine.classList[1] === "papel" && btn === 'btn_scissors' ){
        box_img_machine.classList.remove('piedra');
        box_img_machine.classList.remove('tijera');
        box_img_machine.classList.remove('scissors');
        box_img_machine.classList.add(k);
        return k;
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
