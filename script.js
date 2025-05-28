// Filter Produk
document.getElementById("category").addEventListener("change", function () {
    let category = this.value;
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all") {
            product.style.display = "block";
        } else {
            product.style.display = product.classList.contains(category) ? "block" : "none";
        }
    });
});