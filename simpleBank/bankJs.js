var users = [
    {"name": "Barac Obama", "balance": 100000000000, "pin": "1234"},
    {"name": "Donald Trump", "balance": 500000000000000000000, "pin": "5678"},
    {"name": "Joe Biden", "balance": 20000000000000000, "pin": "0000"}
];
  
var currentUser = null;
//login  
function login(event) {
    event.preventDefault(); 
    var accountNumber = document.getElementById("account-number").value;
    var pin = document.getElementById("pin").value;
    
    if (accountNumber in users) {
        var user = users[accountNumber];
      
        if (pin === user.pin) {
            currentUser = user;
        
            document.getElementById("username").textContent = currentUser.name;
            document.getElementById("balance").textContent = currentUser.balance;
            document.getElementById("bank-form").style.display = "block";
            document.getElementById("account-number").value = "";
            document.getElementById("pin").value = "";
        } 
        else {
        alert("Invalid PIN. Please try again.");
        }
    } 
    else {
      alert("Account number not found. Please try again.");
    }
}
//action deposit and withdraw  
function makeTransaction(event) {
    event.preventDefault();
    var typeInput = document.getElementById("transaction-type").value;
    var amountInput = parseFloat(document.getElementById("amount").value);
    if (typeInput == "deposit") {
        currentUser.balance += amountInput;
    } 
    else if (typeInput == "withdraw") {
        if (amountInput > currentUser.balance) {
            alert("Insufficient funds.");
    } 
    else {
        currentUser.balance -= amountInput;
    }
    }
    document.getElementById("balance").textContent = currentUser.balance;
    document.getElementById("transaction-type").selectedIndex = 0;
    document.getElementById("amount").value = "";
}
//logout
function logout() {
    currentUser = null;
    document.getElementById("bank-form").style.display = "none";
}