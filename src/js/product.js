const ProductDiv = document.querySelector(".products");

class Product {
  constructor(items) {
    this.AddProduct(items);
    const buyBtn = document.querySelectorAll(".products-btn");
    this.AddListener(buyBtn);
  }

  AddProduct(items) {
    let productHtml = `<div class="product-card wow animate__animated animate__bounceIn">
                    <div class="product-card-img">
                        <img src="../image/product/${items.image}" alt="">
                    </div>
                    <h4 class="products-title">${items.title}</h4>
                    <h4 class="products-title-en">${items.enTitle}</h4>
                    <h5 class="products-price">${items.price}</h5>
                    <a class="products-btn">اضافه به سبد خرید</a>

                </div>
            </section>`;

    ProductDiv.insertAdjacentHTML("beforeend", productHtml);
  }

  AddListener(btns) {
    for (const item of btns) {
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
  }
}

// -------------------

new Product({
  image: "schefflera-elegantissima.jpg",
  title: "آرالیا دروغین",
  enTitle: "Schefflera Elegantissima",
  price: "180,000",
});

new Product({
  image: "Aglaonema-300x300.jpg",
  title: "آگلونما",
  enTitle: "Aglaonema",
  price: "280,000",
});

new Product({
  image: "Bromeliad-guzmania-300x300.jpg",
  title: "آناناسی (بروملید)",
  enTitle: "Bromeliad",
  price: "320,000",
});

new Product({
  image: "aloe-vera-300x300.jpg",
  title: "آلوئه ورا",
  enTitle: "Aloe Vera",
  price: "210,000",
});
new Product({
  image: "medinilla-magnifica-300x300.jpg",
  title: "ارکیده فیلیپینی",
  enTitle: "Medinilla Magnifica",
  price: "110,000",
});
new Product({
  image: "Monstera-Deliciosa-300x300.jpg",
  title: "برگ انجیری مونسترا",
  enTitle: "Monstera Deliciosa",
  price: "510,000",
});
new Product({
  image: "aspidistra-300x300.jpg",
  title: "برگ عبایی",
  enTitle: "Aspidistra",
  price: "210,000",
});
new Product({
  image: "devils-ivy-300x300.jpg",
  title: "پوتوس طلایی",
  enTitle: "Devil’s ivy",
  price: "340,000",
});
new Product({
  image: "terrarium-300x300.jpg",
  title: "تراریوم",
  enTitle: "Terrarium",
  price: "140,000",
});
new Product({
  image: "Dieffenbachia-300x300.jpg",
  title: "دیفن باخیا",
  enTitle: "Dieffenbachia",
  price: "470,000",
});

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

function AddtoCart(image, title, price) {
  const mainDiv = document.querySelector(".cart-products");
  let htmlCode = `<div class="cart-item">
                                    <div class="item-image-div">
                                        <img src="${image}" alt="">
                                    </div>
                                    <div class="item-info">
                                        <h5 class="item-title">${title}</h5>
                                        <h6 class="item-price">${price} تومان</h6>
                                    </div>
                                    <div class="item-btn">
                                        <span class="item-btn-b">+</span>
                                        <h6 class="item-count">1</h6>
                                        <span class="item-btn-b">-</span>
                                    </div>
                                </div>`;
  mainDiv.insertAdjacentHTML("beforeEnd", htmlCode);
}

AddtoCart("../image/product/Aglaonema-300x300.jpg", "آگلونما", "280,000");
AddtoCart(
  "../image/product/Bromeliad-guzmania-300x300.jpg",
  "آناناسی (بروملید)",
  "320,000"
);
AddtoCart("../image/product/aloe-vera-300x300.jpg   ", "آلوئه ورا", "210,000");
AddtoCart(
  "../image/product/medinilla-magnifica-300x300.jpg",
  "ارکیده فیلیپینی",
  "110,000"
);
AddtoCart("../image/product/terrarium-300x300.jpg", "تراریوم", "140,000");
