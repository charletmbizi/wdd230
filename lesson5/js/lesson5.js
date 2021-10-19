document.getElementById("current-date").innerHTML = new Date().toDateString();
document.getElementById("year").innerHTML = new Date().getFullYear();
 const hamburger = document.querySelector(".ham");  
 const navsub = document.querySelector(".nav-sub");  
 hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
 });

var day = date.getDay(); // getDay returns 0 to 6; 0 = sun, 1 = mon and so on.
 if day == 5 {    
 h1.hidden {
  display: block;
}
    } 
else {
 h1.hidden {
  display: none;
}
}
