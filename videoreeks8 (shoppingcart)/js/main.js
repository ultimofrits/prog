const addtocartbuttons = document.getElementsByClassName("games__button");
let cartmessage = 0;
let cartmessagevalue = document.getElementsByClassName("shoppingcart__message")[0];
const shoppingmodal = document.getElementById("js--shoppingmodal");
let modalisopen = false;
let c3po = 0;
let ironman = 0;
let walle = 0;


for(let i = 0; i < addtocartbuttons.length; i++){
    addtocartbuttons[i].onclick = function(){
        cartmessage += 1;
        cartmessagevalue.innerHTML = cartmessage;
        switch(addtocartbuttons[i].dataset.product){
            case "c3po":
                c3po += 1;
                break;
            case "ironman":
                ironman += 1;
                break;
            case "walle":
                walle += 1;
                break;

        }


        if(modalisopen === false){
            shoppingmodal.style.display = "flex";
            modalisopen = true;
            setTimeout(function(){
                shoppingmodal.style.display = "none";
                modalisopen = false;

            },2000);
            
        }
       
    }
}
const checkoutbutton = document.getElementById("js--checkoutbutton");
const checkoutwindow = document.getElementById("js--checkoutwindow");
let checkoutisopen = false;
const searchbar = document.getElementById("js--searchbar");


checkoutbutton.onclick = function(){
    if(checkoutisopen === false){
        document.querySelector("main").style.display = "none";
        checkoutwindow.style.display = "block";
        checkoutisopen = true;
        document.getElementById("js--amount-c3po").innerHTML = c3po + "x";
        document.getElementById("js--amount-ironman").innerHTML = ironman + "x";
        document.getElementById("js--amount-walle").innerHTML = walle + "x";
        searchbar.style.display = "none";
        document.getElementsByClassName("searchbar__glass")[0].style.display = "none";
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutwindow.style.display = "none";
    checkoutisopen = false;
    searchbar.style.display = "block";
    document.getElementsByClassName("searchbar__glass")[0].style.display = "flex";

   
}
/*start searchbar code */

const games = document.getElementsByClassName("games__game");

searchbar.onkeyup = function(event){
   
    if(event.keyCode === 13){
        let searchTerm = searchbar.value.toUpperCase().split(" ").join("");
        for(let i = 0; i < games.length; i++ ){
            if(games[i].dataset.title.search(searchTerm) === -1){
                games[i].style.opacity = 0.3;

            }
            else{
                games[i].style.opacity = 1;

            }

        }
    }
}
/* intersection observer */
let observer = new IntersectionObserver(
    function(entries){
        if(entries[0].isIntersecting === true){
            document.getElementsByTagName("main")[0].classList.add("a-popup");
            observer.disconnect();
            
        }
        else{

        }

    }, {
        threshold: 0.5,

    }
);
observer.observe(document.getElementsByTagName("main")[0]);

