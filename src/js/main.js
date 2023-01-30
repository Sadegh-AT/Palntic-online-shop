// CommonJS
const buyBtn = document.querySelectorAll(".product-btn");
const counter = document.querySelector(".link-btn a .counter");
const cartBtn = document.querySelector(".cart-div a");
const cartPanel = document.querySelector(".cart-panel");
const blackDiv = document.querySelector(".black-div");

cartBtn.addEventListener("click", function () {
  cartPanel.classList.add("active");
  blackDiv.classList.add("active");
  blackDiv.style.pointerEvents = "all";
});
blackDiv.addEventListener("click", function () {
  cartPanel.classList.remove("active");
  blackDiv.classList.remove("active");
  blackDiv.style.pointerEvents = "none";
});
for (const item of buyBtn) {
  item.addEventListener("click", function () {
    AddCounter(counter);
    Swal.fire({
      title: "محصول به سبد خرید شما اضافه شد",

      icon: "success",
      confirmButtonText: "تایید",
      background: "#becf8e",
      iconColor: "#4d9f3d",
    });
  });
}

function AddCounter(counter) {
  counter.innerHTML = Number(counter.innerHTML) + 1;
}

const social = document.querySelectorAll(".social a");

for (const item of social) {
  item.addEventListener("mouseenter", () => {
    item.classList.add("active");
    console.log("|asfdsaf");
  });
}
