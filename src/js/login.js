const username = document.querySelector(".username");
const password = document.querySelector(".password");
const btn = document.querySelector(".submit");

btn.addEventListener("click", function () {
  if (username.value == "sadegh" && password.value == "1234") {
    location.href = "http://127.0.0.1:5500/src/index.html";
    console.log("dpnt");
  } else {
    username.classList.add("error");
    password.classList.add("error");
  }
});

username.addEventListener("input", function () {
  username.classList.remove("error");
  password.classList.remove("error");
});
password.addEventListener("input", function () {
  username.classList.remove("error");
  password.classList.remove("error");
});
