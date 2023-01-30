const ProductDiv = document.querySelector(".products");

class Product {
  constructor(items) {
    this.AddProduct(items);
  }

  AddProduct(items) {
    let productHtml = `<div class="product-card">
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
