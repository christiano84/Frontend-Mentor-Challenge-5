// Open the web page with the first tab open
document.getElementById("defaultTab").click();

/////////////////////////////////////////////////////////

// TAB SECTION

function opentab(evt, tabName) {

  var i
  var tabcontent
  var tablinks
  var tabimg = tabName + "img"

  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }

  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }

  document.getElementById(tabName).style.display = "block"
  document.getElementById(tabimg).style.display = "block"
  evt.currentTarget.className += " active"

}

/////////////////////////////////////////////////////////

// FAQ SECTION

let answers = document.querySelectorAll(".faq-item"); 
answers.forEach((event) => { 
  event.addEventListener("click", () => { 
    event.classList.contains("active") ? 
      event.classList.remove("active") : event.classList.add("active");
  }) 
})


/////////////////////////////////////////////////////////

// CUSTOM EMAIL VALIDATION AND CUSTOM STYLED MESSAGE BOX

// Email validation should never be done client side 
// but for the purposes of this challenge I have written something
// basic.

const form = document.forms[0]

const errorDiv = document.getElementById("error")
const emailInput = document.getElementById("email")

// Match any character 1 or more times followed by an '@', followed by 
// anything 1 or more times followed by a '.' followed by anything 1
// or more times

const regexp = /.+@.+\..+/

form.onsubmit = (e) => {
  e.preventDefault()

  if (regexp.test(emailInput.value)) {
    let ctaWrapper = document.querySelector(".cta-wrapper")
    let cta = document.querySelector(".cta")

    // Remove the form from view
    ctaWrapper.style.display = "none"
    form.style.display = "none"

    // Create a new message in its place 'simulating' a successful email submission
    let divDone = document.createElement("div")
    divDone.innerHTML = `
    <h4 style="font-size: 26px; font-weight: 500; padding: 40px 0;">Email sent successfully</h4>
    `
    cta.append(divDone)
  } 

  else {
    emailInput.classList.add("error")
    errorDiv.style.display = "flex"
  }
}

/////////////////////////////////////////////////////////

// MOBILE MENU

// Variables for the elements we're working on

var nav = document.getElementById("navMenu")
var mobileLogo = document.querySelector(".svg-logo-mobile")
var iconClose = document.querySelector(".icon-close")
var iconHamburger = document.querySelector(".hamburger")

function showMenu() {
  // Show the menu
  nav.style.right = '0'
  // Show X button
  iconClose.classList.add("active")
  // Hide hamburger button
  iconHamburger.classList.add("active")
  // Show mobile logo
  mobileLogo.classList.add("active")
  // Mobile Menu Fade effect
  nav.classList.toggle('fade');
}

function hideMenu() {
  // Hide the menu
  nav.style.right = '-100%' 
  // Hide the X button
  iconClose.classList.remove("active")
  // Show the hamburger button
  iconHamburger.classList.remove("active")
  // Hide the mobile logo
  mobileLogo.classList.remove("active")
  // Mobile Menu Fade effect
  nav.classList.toggle('fade');
}