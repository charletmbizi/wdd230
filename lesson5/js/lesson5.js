document.getElementById("current-date").innerHTML = new Date().toDateString();
document.getElementById("year").innerHTML = new Date().getFullYear();
 const hamburger = document.querySelector(".ham");  
 const navsub = document.querySelector(".nav-sub");  
 hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
 });

var day = new Date().getDay(); // getDay returns 0 to 6; 0 = sun, 1 = mon and so on.
 if (day == 5) {    
 document.getElementById("hidden").style.display = "block";
    } 
else if ((day <= 4) && (day >=6) {
document.getElementById("hidden").style.display = "none";       
}
