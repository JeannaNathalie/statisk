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
  copy.querySelector(".price").textContent = "DKK" + " " + product.price + ",-";
  copy.querySelector(".brand").textContent = product.brandname + " " + "-" + " " + product.articletype;

  //discount pris

  let deci_percent = product.discount / 100;
  let discount = product.price * deci_percent;
  let discountPrice = product.price - discount;
  discountPrice = Math.round(discountPrice);

  if (product.discount) {
    copy.querySelector(".reduced").textContent = "NOW" + " " + discountPrice + ",-";
    copy.querySelector(".price").textContent = "PREVIOUS" + " " + product.price + ",-";
  }

  if (product.soldout) {
    copy.querySelector("article").classList.add("product_soldout");
    copy.querySelector(".soldout").classList.remove("hide");
  }

  copy.querySelector(".readmore").setAttribute("href", `product.html?id=${product.id}`);

  // appende

  document.querySelector(".grid_1-1-1").appendChild(copy);
}

//INFO//
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
