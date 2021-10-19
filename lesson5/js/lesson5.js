document.getElementById("current-date").innerHTML = new Date().toDateString();
document.getElementById("year").innerHTML = new Date().getFullYear();
 const hamburger = document.querySelector(".ham");  
 const navsub = document.querySelector(".nav-sub");  
 hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
 });
