var icon = document.getElementById("moon-icon")

icon.onclick= function change(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.src= "../sun.png";
    }else{
        icon.src= "../moon.png"
    }
}

var loader = document.getElementById("preloader")
window.addEventListener("load", function(){
    loader.style.display= "none"
})

// Get form and error message
var loginForm= document.getElementById("loginForm");

var errorMessage= document.getElementById("error");

// add submit event listener to the form
loginForm.addEventListener("submit", function(event){
    event.preventDefault(); // prevent form submission

    // Get email or password values

    var emailInput= document.getElementById("email").value;
    var passwordInput= document.getElementById("password").value;

    // check if email and password are correct

    if(emailInput === "eyadahmad200920092009@gmail.com" && passwordInput === "eyad2009"){
        // Redirect to another page
        window.location.href="../controlPage/main.html"
    } else{
        // display error message
        errorMessage.textContent="Invalid email or password";
        errorMessage.style.color="red";
    }
});