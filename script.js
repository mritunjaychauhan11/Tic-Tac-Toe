const player = document.querySelector(".player");
let currplay = player.innerText;
function newgame(){
    location.reload();
}
function changeplayer(){
    if(currplay == "X") {
        player.innerText = "O";
        currplay = "O";
    }
    else{
        player.innerText = "X";
        currplay = "X"
    }
}

function didwin(){
    let b1 = document.querySelector(".p1").innerText;
    let b2 = document.querySelector(".p2").innerText;
    let b3 = document.querySelector(".p3").innerText;
    let b4 = document.querySelector(".p4").innerText;
    let b5 = document.querySelector(".p5").innerText;
    let b6 = document.querySelector(".p6").innerText;
    let b7 = document.querySelector(".p7").innerText;
    let b8 = document.querySelector(".p8").innerText;
    let b9 = document.querySelector(".p9").innerText;
    let gameGrid = document.querySelector(".game-grid");
    let head = document.querySelector(".heading");
    if((b1 == b2 && b2 == b3) && b1!=""){
        head.innerHTML = `Winner Player - ${b1}`;
        gameGrid.style.pointerEvents = "none";
        return;
    }
    if((b4 == b5 && b5 == b6) && b4!=""){
        head.innerHTML = `Winner Player - ${b4}`;
        gameGrid.style.pointerEvents = "none";
        return;
    }
    if((b7 == b8 && b8 == b9) && b7!=""){
        head.innerHTML = `Winner Player - ${b7}`;
        gameGrid.style.pointerEvents = "none";
        return;
    }
    if((b1 == b4 && b4 == b7) && b1!=""){
        head.innerHTML = `Winner Player - ${b1}`;
        gameGrid.style.pointerEvents = "none";
        return;
    }
    if((b2 == b5 && b5 == b8) && b2!=""){
        head.innerHTML = `Winner Player - ${b2}`;
        gameGrid.style.pointerEvents = "none";
        return;
    }
    if((b3 == b6 && b6 == b9) && b3!=""){
        head.innerHTML = `Winner Player - ${b3}`;
        gameGrid.style.pointerEvents = "none";
        return;
    }
    if((b1 == b5 && b5 == b9) && b1!=""){
        head.innerHTML = `Winner Player - ${b1}`;
        gameGrid.style.pointerEvents = "none";
        return;
    }
    if((b3 == b5 && b5 == b7) && b7!=""){
        head.innerHTML = `Winner Player - ${b1}`;
        gameGrid.style.pointerEvents = "none";
        return;
    }

    if(b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9){
        head.innerHTML = `Match Tied!`;
        gameGrid.style.pointerEvents = "none";
        return;
    }
}
function p1(){
    let box = document.querySelector(".p1");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer()
    
}
function p2(){
    let box = document.querySelector(".p2");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer();
}
function p3(){
    let box = document.querySelector(".p3");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer();
}
function p4(){
    let box = document.querySelector(".p4");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer();
}
function p5(){
    let box = document.querySelector(".p5");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer();
}
function p6(){
    let box = document.querySelector(".p6");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer();
}
function p7(){
    let box = document.querySelector(".p7");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer();
}
function p8(){
    let box = document.querySelector(".p8");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer();
}
function p9(){
    let box = document.querySelector(".p9");
    box.innerText = currplay;
    box.onclick = null;
    didwin();
    changeplayer();
}