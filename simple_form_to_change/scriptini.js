var nameForm = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var passwordRepeat = document.getElementById("passwordRepeat").value;
var gender = document.getElementById("gender").value;
var telephone = document.getElementById("tel").value;
var date = document.getElementById("date").value;
var country = document.getElementById("country").value;
var vaild_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var valid_pass = /^[A-Za-z]\w{8,14}$/;
var valid_tel = /^[0-9]\w{9}$/;

document.getElementById("province").disabled = true
document.getElementById("resAdress").disabled = true
document.getElementById("corrAdress").hidden = true
document.getElementById("country").onchange = function() {enProv(country)};
document.getElementById("province").onchange = function() {enRes()};
document.getElementById("resAdress").onchange = function() {enCorr()};

function onClick() {
  
    checkName(nameForm);
    checkSurname(surname);
    checkEmail(email);
    checkPassword(password, passwordRepeat);
    checkTelephone(telephone);
    checkGender(gender);
    checkCountry(country);
    checkDate(date);
  
    if (document.getElementById("myForm").checkValidity()) {
      alert("Formularz został poprawnie wypełniony!");
    }
}
  
  function checkName(nameForm) {
    if (nameForm == "") {
      document.getElementById("name").setCustomValidity("Musisz coś wpisać");
    } else {
      document.getElementById("name").setCustomValidity("");
    }
  }
  
  function checkSurname(surname) {
    if (surname == "") {
      document.getElementById("surname").setCustomValidity("Musisz coś wpisać");
    } else {
      document.getElementById("surname").setCustomValidity("");
    }
  }
  
  function checkEmail(email) {
    if (email == "") {
      document.getElementById("email").setCustomValidity("Wpisz email");
    } else if (email.match(vaild_mail)) {
        document.getElementById("email").setCustomValidity("");
    } else {
        document.getElementById("email").setCustomValidity("Niepoprawny adres email");
    }
  }
  
  function checkPassword(password, passwordRepeat) {
    if (!password.match(valid_pass)) {
      document.getElementById("password").setCustomValidity("Za słabe hasło");
    } else if(password != passwordRepeat){
        document.getElementById("passwordRepeat").setCustomValidity("Haslo musi byc takie samo");
    }
    else {
      document.getElementById("password").setCustomValidity("");
      document.getElementById("passwordRepeat").setCustomValidity("");
    }
  }
  
  function checkTelephone(telephone) {
    if (!telephone.match(valid_tel)) {
      document.getElementById("tel").setCustomValidity("musisz wpisac poprawny tel");
    } else {
      document.getElementById("tel").setCustomValidity("");
    }
  }
  
  function checkGender(gender) {
    if (gender == "---") {
      document.getElementById("gender").setCustomValidity("Wybierz płeć");
    } else {
      document.getElementById("gender").setCustomValidity("");
    }
  }
  
  function checkCountry(country) {
    if (country == "---") {
      document.getElementById("country").setCustomValidity("Wybierz kraj");
    } else {
      document.getElementById("country").setCustomValidity("");
    }
  }
  
  function checkDate(date) {
    if (date == "") {
      document.getElementById("date").setCustomValidity("Wprowadź datę");
    }
    currentDate = new Date();
    selectedDate = new Date(date);
    age = currentDate.getFullYear() - selectedDate.getFullYear();
  
    if (currentDate.getMonth() < selectedDate.getMonth() || (currentDate.getMonth() === selectedDate.getMonth() && currentDate.getDate() < selectedDate.getDate())) {
      age--;
    }
  
    if (age < 18) {
      document.getElementById("date").setCustomValidity("Musisz być pełnoletni/a");
    } else {
      document.getElementById("date").setCustomValidity("");
    }
  }
  function enProv(country){
    document.getElementById("province").disabled = false;
    if (country != "---" && country !="POLSKA"){
        $("#province")
        .replaceWith('<input type="text" id="province" placeholder="wpisz woje">');
      }
  }
  function enRes(){
    document.getElementById("resAdress").disabled = false
  }
  function enCorr(){
    document.getElementById("corrAdress").hidden = false
  }
