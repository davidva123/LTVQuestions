let comboField = document.getElementById("combofield");
let emailbtn = document.getElementById("emailbtn");
let phonebtn = document.getElementById("phonebtn");
let activebuttonstyle = "search-btn-active";

emailbtn.addEventListener("click", function (e) {
  e.preventDefault();
  emailbtn.classList.add(activebuttonstyle);
  phonebtn.classList.remove(activebuttonstyle);
  comboField.setAttribute("placeholder", "Enter an Email Address");
});

phonebtn.addEventListener("click", function (e) {
  e.preventDefault();
  phonebtn.classList.add(activebuttonstyle);
  emailbtn.classList.remove(activebuttonstyle);
  comboField.setAttribute("placeholder", "Enter a Phone Number");
});
