const exists = cart.find(item => item.name === product.name);

if (!exists) {
    if(!cart.some(item=>item.name===product.name)){
    cart.push(product);
}else{
    alert("Item already in cart!");
    return;
}
    localStorage.setItem("cart", JSON.stringify(cart));
    button.innerText = "✓ Added";
    button.disabled = true;
    alert(product.name + " added to cart!");
} else {
    alert("Item already in cart!");
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartItems");

if(container){

    if(cartItems.length===0){

        container.innerHTML="<h2>Your cart is empty.</h2>";

    }else{

        cartItems.forEach(item=>{

            container.innerHTML += `
            <div class="cart-card">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
            `;

        });

    }

}