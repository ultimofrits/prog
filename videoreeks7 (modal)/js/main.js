const pink = document.getElementById("js--pink");
const switches = document.getElementsByClassName("product");
const blue = document.getElementById("js--blue");



pink.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";

    }
    document.getElementById("js--pinkmodal").style.display = "grid";

}
const closepinkmodal = document.getElementById("js--closepink");
closepinkmodal.onclick = function(){
    document.getElementById("js--pinkmodal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
        
    }
}


blue.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";

    }
    document.getElementById("js--bluemodal").style.display = "grid";

}
const closebluemodal = document.getElementById("js--closeblue");
closebluemodal.onclick = function(){
    document.getElementById("js--bluemodal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";

    }
}

