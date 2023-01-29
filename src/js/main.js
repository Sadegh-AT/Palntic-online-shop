// CommonJS
const buyBtn = document.querySelectorAll(".product-btn");

for (const item of buyBtn) {
  item.addEventListener("click", function () {
    Swal.fire({
      title: "محصول به سبد خرید شما اضافه شد",

      icon: "success",
      confirmButtonText: "تایید",
      background: "#becf8e",
      iconColor: "#4d9f3d",
    });
  });
}

console.log("sadasd");
