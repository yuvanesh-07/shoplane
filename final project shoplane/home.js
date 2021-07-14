$(document).ready(function() {
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(productList) {
        var clothing = document.getElementById("clothing")
        var accessories = document.getElementById("accessories")

        for (var i = 0; i <= productList.length; i++) {
            var div = document.createElement("div");
            div.className = "main-card";
            div.id = i + 1;

            var imgWrapper = document.createElement("a");
            imgWrapper.href = "./product.html?p=" + productList[i].id;
            var cardimg = document.createElement("img");
            cardimg.src = productList[i].preview;
            cardimg.className = "card-img";

            var heading = document.createElement("h3");
            heading.innerHTML = productList[i].name;
            heading.className = "card-heading";


            var decs = document.createElement("p")
            decs.innerHTML = productList[i].description;
            decs.className = "card-desc";


            var brandName = document.createElement("h5");
            brandName.innerHTML = productList[i].brand;
            brandName.className = "card-brand"


            var priceItem = document.createElement("span");
            priceItem.innerHTML = productList[i].price;
            priceItem.className = "card-price"

            imgWrapper.appendChild(cardimg)
            div.appendChild(imgWrapper);
            div.appendChild(heading);
            div.appendChild(brandName);
            div.appendChild(priceItem);
            console.log(div)

            if (productList[i].isAccessory == true) {
                accessories.appendChild(div)
            } else {
                clothing.appendChild(div)
            }
        }
    })
})