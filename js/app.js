//New Code to work on button highlighting and correct text
let comboField = document.getElementById("combofield");
let emailbtn = document.getElementById("emailbtn");
let phonebtn = document.getElementById("phonebtn");
let activebuttonstyle = "search-btn-active";
let errormsg = document.getElementById("errormsg");
let erroremail = "Please enter a valid email address";
let errorphone = "Please enter a valid phone number";

//Show the correct text and button highlighting in the  email button
emailbtn.addEventListener("click", function (e) {
  e.preventDefault();
  emailbtn.classList.add(activebuttonstyle);
  phonebtn.classList.remove(activebuttonstyle);
  comboField.setAttribute("placeholder", "Enter an Email Address");
  comboField.setAttribute("name", "email");
  errormsg.innerHTML = erroremail;
});
//Show the correct text and button highlighting in the phone button
phonebtn.addEventListener("click", function (e) {
  e.preventDefault();
  phonebtn.classList.add(activebuttonstyle);
  emailbtn.classList.remove(activebuttonstyle);
  comboField.setAttribute("placeholder", "Enter a Phone Number");
  comboField.setAttribute("name", "phone");
  errormsg.innerHTML = errorphone;
});

$(document).ready(function () {
  $("#btn-search").on("click", function (e) {
    //adding logic here to determine which box is pressed
    if (comboField.getAttribute("name") == "email") {
      e.preventDefault();
      localStorage.clear();
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
    } // End Email Logic Section

    if (comboField.getAttribute("name") == "phone") {
      e.preventDefault();
      localStorage.clear();
      phone = $('input[type="text"]').val().toLowerCase();

      var x, y;
      regEx = /^\s*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
      if (phone.match(regEx)) {
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
          "https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=" +
          phone;
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
    } //End Phone Logic Section
  });

  //Keypress Section
  $('input[type="text"]').keypress(function (event) {
    if (comboField.getAttribute("name") == "email") {
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
        event.preventDefault();
        localStorage.clear();

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
    } // End email keypress section

    if (comboField.getAttribute("name") == "phone") {
      phone = $('input[type="text"]').val().toLowerCase();

      regEx = /^\s*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
      if (phone.match(regEx)) {
        x = true;
        document
          .querySelector('input[type="text"]')
          .parentNode.classList.remove("error");
      } else {
        x = false;
      }
      keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode == "13") {
        event.preventDefault();
        localStorage.clear();

        var x, y;

        if (x === true) {
          const proxyurl = "";
          const url =
            "https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=" +
            phone;
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
    } //End Phone Keypress Section
  });
});
