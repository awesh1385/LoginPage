const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

const logbtn = document.getElementById("logBtn");
logbtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(userEmail.value);
  console.log(userPassword.value);
  logbtn.innerHTML = "LoggedIn";
});

