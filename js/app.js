//New Code to work on button highlighting and correct text
let comboField = document.getElementById("combofield");
let emailbtn = document.getElementById("emailbtn");
let phonebtn = document.getElementById("phonebtn");
let activebuttonstyle = "search-btn-active";

//Show the correct text and button highlighting in the phone and email buttons
emailbtn.addEventListener("click", function (e) {
  e.preventDefault();
  emailbtn.classList.add(activebuttonstyle);
  phonebtn.classList.remove(activebuttonstyle);
  comboField.setAttribute("placeholder", "Enter an Email Address");
  comboField.setAttribute("placeholder", "Enter an Email Address");
});
//Show the correct text and button highlighting in the phone and email buttons
phonebtn.addEventListener("click", function (e) {
  e.preventDefault();
  phonebtn.classList.add(activebuttonstyle);
  emailbtn.classList.remove(activebuttonstyle);
  comboField.setAttribute("placeholder", "Enter a Phone Number");
});




$(document).ready(function () {
  $("#btn-search").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request
    email = $('input[type="text"]').val().toLowerCase();

    var x, y;
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regEx)) {
      x = true;
    } else {
      x = false;
    }

    if (x === true) {
      document
        .querySelector('input[type="text"]')
        .parentNode.classList.remove("error");
      const proxyurl = "";
      const url =
        "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + email;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
        })
        .catch((e) => console.log(e));
    } else if (x !== true) {
      document
        .querySelector('input[type="text"]')
        .parentNode.classList.add("error");
    }
  });

  $('input[type="text"]').keypress(function (event) {
    email = $('input[type="text"]').val().toLowerCase();
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regEx)) {
      x = true;
      document
        .querySelector('input[type="text"]')
        .parentNode.classList.remove("error");
    } else {
      x = false;
    }
    keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      /**
       * Makes a request to ltv API to search an specific email address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      event.preventDefault();
      localStorage.clear(); //Clears storage for next request

      var x, y;

      if (x === true) {
        const proxyurl = "";
        const url =
          "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" +
          email;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        document
          .querySelector('input[type="text"]')
          .parentNode.classList.add("error");
      }
    }
  });
});

