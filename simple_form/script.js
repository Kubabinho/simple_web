//get the values
var nameForm = document.getElementById("name").value
var surname = document.getElementById("surname").value
var email = document.getElementById("email").value
var password = document.getElementById("password").value
var passwordRepeat = document.getElementById("passwordRepeat").value
var gender = document.getElementById("gender").value
var telephone = document.getElementById("tel").value
var date = document.getElementById("date").value
var country = document.getElementById("country").value

//set validity expressions
var valid_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var valid_pass = /^[A-Za-z]\w{8,14}$/
var valid_tel = /^[0-9]\w{9}$/

//disable needed elements
document.getElementById("province").disabled = true
document.getElementById("resAdress").disabled = true
document.getElementById("corrAdress").hidden = true

//event handler for "change" event on "country" element
document.getElementById("country").onchange = function() {
  enProv(country)
}

//event handler for "change" event on "province" element
document.getElementById("province").onchange = function() {
  enRes()
}

//event handler for "change" event on "resAdress" element
document.getElementById("resAdress").onchange = function() {
  enCorr()
}

 //function called when button is clicked
function onClick() {


  //calls for validation
  checkName(nameForm)
  checkSurname(surname)
  checkEmail(email)
  checkPassword(password, passwordRepeat)
  checkTelephone(telephone)
  checkGender(gender)
  checkCountry(country)
  checkDate(date)

  //check if form is valid
  if (document.getElementById("myForm").checkValidity()) {
    alert("Formularz został poprawnie wypełniony!")
  }
}

//function to validate name field
function checkName(nameForm) {
  if (nameForm == "") {
    document.getElementById("name").setCustomValidity("Enter name")
  } else {
    document.getElementById("name").setCustomValidity("")
  }
}

//function to validate surname field
function checkSurname(surname) {
  if (surname == "") {
    document.getElementById("surname").setCustomValidity("Enter surname")
  } else {
    document.getElementById("surname").setCustomValidity("")
  }
}
//function to validate email field
function checkEmail(email) {
  if (email == "") {
    document.getElementById("email").setCustomValidity("Enter mail")
  } else if (email.match(valid_mail)) {
    document.getElementById("email").setCustomValidity("")
  } else {
    document.getElementById("email").setCustomValidity("Invaild email")
  }
}

//function to validate password fields
function checkPassword(password, passwordRepeat) {
  if (!password.match(valid_pass)) {
    document.getElementById("password").setCustomValidity("Too weak")
  } else if (password != passwordRepeat) {
    document.getElementById("passwordRepeat").setCustomValidity("Pass has to be the smae")
  } else {
    document.getElementById("password").setCustomValidity("")
    document.getElementById("passwordRepeat").setCustomValidity("")
  }
}

//function to validate telephone field
function checkTelephone(telephone) {
  if (!telephone.match(valid_tel)) {
    document.getElementById("tel").setCustomValidity("Must be a correct tel number")
  } else {
    document.getElementById("tel").setCustomValidity("");
  }
}

//function to validate gender field
function checkGender(gender) {
  if (gender == "---") {
    document.getElementById("gender").setCustomValidity("Choose your gender")
  } else {
    document.getElementById("gender").setCustomValidity("")
  }
}

//function to validate country field
function checkCountry(country) {
  if (country == "---") {
    document.getElementById("country").setCustomValidity("Choose your country")
  } else {
    document.getElementById("country").setCustomValidity("")
  }
}

//function to validate date field
function checkDate(date) {
  if (date == "") {
    document.getElementById("date").setCustomValidity("Enter date")
  }
  var currentDate = new Date();
  var selectedDate = new Date(date);
  var age = currentDate.getFullYear() - selectedDate.getFullYear();

  if (
    currentDate.getMonth() < selectedDate.getMonth() ||
    (currentDate.getMonth() === selectedDate.getMonth() && currentDate.getDate() < selectedDate.getDate())
  ) {
    age--;
  }

  if (age < 18) {
    document.getElementById("date").setCustomValidity("You have to be an adult")
  } else {
    document.getElementById("date").setCustomValidity("")
  }
}

//function to enable province field based on selected country
function enProv(country) {
  document.getElementById("province").disabled = false;
  if (country != "---" && country != "Poland") {
    $("#province").replaceWith('<input type="text" id="province" placeholder="wpisz woje">');
  }
}

//function to enable residential address field
function enRes() {
  document.getElementById("resAdress").disabled = false;
}

//function to show correspondence address field
function enCorr() {
  document.getElementById("corrAdress").hidden = false;
}

