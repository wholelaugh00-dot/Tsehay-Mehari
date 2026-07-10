const search = document.getElementById("searchInput");

if (search) {

    search.addEventListener("input", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".product-card").forEach(card => {

            const title = card.querySelector("h2").textContent.toLowerCase();

            card.style.display = title.includes(value)
                ? "block"
                : "none";

        });

    });

}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".cart-btn").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const product = {
            name: card.querySelector("h2").innerText,
            price: card.querySelector(".price").innerText,
            image: card.querySelector("img").src,
            quantity: 1
        };

        const exists = cart.find(item => item.name === product.name);

        if (exists) {

            exists.quantity++;

        } else {

            cart.push(product);

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        button.innerText = "✓ Added";

        alert(product.name + " added to cart!");

    });

});


let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelectorAll(".wish-btn").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const product = {
            name: card.querySelector("h2").innerText,
            price: card.querySelector(".price").innerText
        };

        wishlist.push(product);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        button.innerText = "❤ Saved";

        button.disabled = true;

        alert(product.name + " added to wishlist!");

    });

});