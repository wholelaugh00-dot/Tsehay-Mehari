const exists = wishlist.find(item => item.name === product.name);

if (!exists) {
   if(!wishlist.some(item=>item.name===product.name)){
    wishlist.push(product);
}else{
    alert("Item already in wishlist!");
    return;
}
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    button.innerText = "❤️ Saved";
    button.disabled = true;
    alert(product.name + " added to wishlist!");
} else {
    alert("Item already in wishlist!");
}

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelectorAll(".wish-btn").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const product = {
            name: card.querySelector("h2").innerText,
            price: card.querySelector(".price").innerText,
            image: card.querySelector("img").src
        };

        const exists = wishlist.find(item => item.name === product.name);

        if (!exists) {

            wishlist.push(product);

            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            button.innerText = "❤ Saved";

            alert("Added to Wishlist!");

        } else {

            alert("Already in Wishlist");

        }

    });

});