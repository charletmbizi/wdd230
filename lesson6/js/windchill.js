document.addEventListener("DOMContentLoaded", function() {
// Use the windchill function
let speed = 25;
let temp = 10;
buildWC(speed, temp);
});

fuction buildWC(speed, temp) {
  let windchill = document.getElementByID('windchill');
  
  // Compute windchill
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow (speed, 0.16) + 0.4275 * temp * Math.pow (speed, 0.16);
  console.log(wc);
  
  //Round the answer down to an integer
  wc = Math.floor(wc);
  
  //If chill is greater than temp, return the temp
  wc = (wc > temp) ? temp : wc;
  
  //Display the wiindchill
  console.log(wc);
  
  feelTemp.innerHTML = WC;
}
