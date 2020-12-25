// Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Setting the initial state menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Menu State
    showMenu = false;
  }
}

// Set the date we're counting down to
var countDownDate = new Date("May 18, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = (Math.floor(distance / (1000 * 60 * 60 * 24)) % 365);
  var years = Math.floor((Math.floor(distance / (1000 * 60 * 60 * 24)))/365);
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML =
    years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

function dateGrabber() {
  let today = new Date();
  let year = today.getFullYear();
  let month  = today.getMonth();
  let standing;

  switch(year){
      case 2020: {
          if(month < 6) {
              standing = "Freshman";
          }
          else {
              standing = "Sophomore";
          }
          break;
      }
      case 2021: {
          if(month < 6) {
              standing = "Sophomore";
          }
          else {
              standing = "Junior";
          }
          break;
      }
      case 2022: {
          if(month < 6) {
              standing = "Junior";
          }
          else{
              standing = "Senior";
          }
          break;
      }
      case 2023: {
          if(month < 5) {
              standing = "Senior";
          }
          else{
              standing = "Graduate";
          }
          break;
      }
      
  }
  document.getElementById('standing').innerHTML = standing;
  
  
  
}
