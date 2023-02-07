fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //   console.log(product);
  // fang template
  const template = document.querySelector("#product_template").content;

  // lav en kopi
  const copy = template.cloneNode(true);

  // ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".brand").textContent = product.brandname;
  //   copy.querySelector("reduced").textContent = product.relid;

  if (product.soldout) {
    copy.querySelector("article").classList.add("product_soldout");
  }
  copy.querySelector(".readmore").setAttribute("href", `product.html?id=${product.id}`);

  // appende

  document.querySelector(".grid_1-1-1").appendChild(copy);
}

// <div class="grid_1-1-1">
// <article class="product">
//   <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Nike Round Neck Jersey" />
//   <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
//   <p class="brand"> T-shirt - Nike</p>
//   <p class="price"> DKK 1595,-</p>
//   <div class="readmore">
//     <a href="product.html">Read More</a>
//   </div>
// </article>
// {
//     "id": 1163,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "season": "Summer",
//     "productionyear": 2011,
//     "usagetype": "Sports",
//     "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//     "price": 895,
//     "discount": null,
//     "brandname": "Nike",
//     "soldout": 0
//   }
