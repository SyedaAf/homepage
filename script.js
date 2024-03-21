const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("write a valid email address!");
  } else {
    email.setCustomValidity("");
  }
});
 
function checkPassword(form) { 
  password1 = form.password1.value; 
  password2 = form.password2.value; 

  // If password not entered 
  if (password1 == '') 
      alert ("Please enter Password"); 
        
  // If confirm password not entered 
  else if (password2 == '') 
      alert ("Please enter confirm password"); 
        
  // If Not same return False.     
  else if (password1 != password2) { 
      alert ("\nPassword did not match: Please try again...") 
      return false; 
  } 

  // If same return True. 
  else{ 
      alert("Password Match!") 
      return true; 
  } 
} 

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const expand_btn = document.querySelector(".expand-btn");
const img = expand_btn.querySelector("img");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
  })
});

