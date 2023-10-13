var icon = document.getElementById("moon-icon")

icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("mode", "dark")
    
    if(document.body.classList.contains("dark-theme")){
        icon.src= "sun.png";
        localStorage.setItem("mode", "sun-icon")
    }else{
        icon.src= "moon.png"
        localStorage.setItem("mode","moon-icon")
    }
}
localStorage.setItem("mode", "dark")
localStorage.setItem("mode", "sun-icon")
localStorage.setItem("mode", "moon-icon")


const today = document.getElementById("today")
const week = document.getElementById("week")
const month = document.getElementById("month")

today.onclick= function (){
    today.classList.add("active")
    if(month.classList.contains("active")){
        month.classList.remove("active")
    }else if(week.classList.contains("active")){
        week.classList.remove("active")
    }
}

week.onclick= function(){
    week.classList.add("active")
    if(month.classList.contains("active")){
        month.classList.remove("active")
    }else if(today.classList.contains("active")){
        today.classList.remove("active")
    }
}

month.onclick= function(){
    month.classList.add("active")
    if(today.classList.contains("active")){
        today.classList.remove("active")
    }else if(week.classList.contains("active")){
        week.classList.remove("active")
    }    
}



fetch("https://alaan365.main.com")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });


let paragraph = document.querySelectorAll(".pspan")

function truncateText(paragraph, maxWidth, maxHeight) {
    if (paragraph.length > maxHeight && paragraph.length > maxWidth) {
        return paragraph.slice(0, maxWidth - 3) + '...';
    } else {
        return paragraph;
    }
}

// Example usage:
const maxwidth = 450;
const maxHeight = 100;
truncateText(paragraph, maxwidth, maxHeight)
console.log(truncateText(paragraph, maxwidth, maxHeight))










/*let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let french = document.getElementById("french");
let german = document.getElementById("german");
let spanish = document.getElementById("spanish");

arabic.onclick = ()=> {
    setLanguage("arabic");
    localStorage.setItem("Lang", "arabic");
};

english.onclick = ()=> {
    setLanguage("english");
    localStorage.setItem("Lang", "english");
};

french.onclick = ()=> {
    setLanguage("french");
    localStorage.setItem("Lang", "french");
};

german.onclick = ()=> {
    setLanguage("german");
    localStorage.setItem("Lang", "german");
};

spanish.onclick = ()=> {
    setLanguage("spanish");
    localStorage.setItem("Lang", "spanish");
};

onload = ()=>{
    setLanguage(localStorage.getItem("Lang"))
}

function setLanguage(getLanguage){
    if(getLanguage === "arabic"){

    }else if(getLanguage === "english"){

    }else if(getLanguage === "french"){

    }else if(getLanguage === "german"){

    }else if(getLanguage === "spanish"){

    }
}*/