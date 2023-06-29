let allgames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


window.scrollTo(0,0);
setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}


//actionRPG filter
let actionRPGfilter = document.getElementById("checkbox-action");
actionRPGfilter.onchange = function(){
        if(actionRPGfilter.checked === true){
            for(let i = 0; i < allgames.length; i++){
                if(allgames[i].dataset.category === "action RPG"){
                    allgames[i].style.display = "block";

                }
            }
        }
        else{
            for(let i = 0; i < allgames.length; i++){
                if(allgames[i].dataset.category === "action RPG"){
                    allgames[i].style.display = "none";

                }
            }
        }
}

let simulatorgamesfilter = document.getElementById("checkbox-simulator");
simulatorgamesfilter.onchange = function(){
    if(simulatorgamesfilter.checked === true){
        for(let i = 0; i < allgames.length; i++){
            if(allgames[i].dataset.category === "simulator games"){
                allgames[i].style.display = "block";

            }
        }
    }
    else{
        for(let i = 0; i < allgames.length; i++){
            if(allgames[i].dataset.category === "simulator games"){
                allgames[i].style.display = "none";

            }
        }
    }
}
let sportsgamesfilter = document.getElementById("checkbox-sports");
sportsgamesfilter.onchange = function(){
    if(sportsgamesfilter.checked === true){
        for(let i = 0; i < allgames.length; i++){
            if(allgames[i].dataset.category === "sport games"){
                allgames[i].style.display = "block";

            }
        }
    }
    else{
        for(let i = 0; i < allgames.length; i++){
            if(allgames[i].dataset.category === "sport games"){
                allgames[i].style.display = "none";

            }
        }
    }
}

