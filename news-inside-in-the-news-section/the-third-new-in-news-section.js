var icon = document.getElementById("moon-icon")

icon.onclick= function change(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.src= "../sun.png";
    }else{
        icon.src= "../moon.png"
    }
}