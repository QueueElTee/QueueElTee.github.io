function navFunction(){
    var x = document.getElementById("navControl");
    if(x.className === "navControl"){
        x.className += " responsive";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else{
        x.className = "navControl";
        document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
}