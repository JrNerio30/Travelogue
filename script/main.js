const hamburgerMenu = document.querySelector(".hamburger-btn");
const sideBar = document.querySelector(".side-bar"); 
const menuLinks = document.querySelectorAll(".side-menu-links");

// Toggling the hamburger menu
hamburgerMenu.addEventListener("click", function() {
 sideBar.classList.toggle("visible")
});

// Remove the side bar if either one each of side menu links has been clicked
menuLinks.forEach(function(remove){
  remove.addEventListener("click", function(){
    sideBar.classList.remove("visible");
  })
});