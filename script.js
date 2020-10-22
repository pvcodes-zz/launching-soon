var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var inputDiv = document.querySelector("#inputDiv");
var emailInput = document.querySelector("#emailInput");
var btn = document.querySelector("#btn");
var errorMsg = document.querySelector("#errorMsg");

inputDiv.addEventListener("submit", function (e) {
  e.preventDefault();
});

btn.addEventListener("click", function () {
  this.style.transform = "scale(0.95)";
  if (emailInput.value == "" || emailRegex.test(emailInput.value) == false) {
    errorMsg.textContent = "Please provide a valid email address";
  } else {
    console.log("OKS");
  }
});
