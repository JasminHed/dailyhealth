document.addEventListener("DOMContentLoaded", () => {

  //Get ID
  const hamburger = document.getElementById("hamburger")
  const navLinks = document.getElementById("nav-links")

  //Open menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })










})