function navFunction(){
    var x = document.getElementById("navControl");
    if(x.className === "navControl"){
        x.className += " responsive";
    } else{
        x.className = "navControl";
    }
}