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
const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistItems");

if(container){

    if(wishlistItems.length===0){

        container.innerHTML="<h2>Your wishlist is empty.</h2>";

    }else{

        wishlistItems.forEach(item=>{

            container.innerHTML += `
            <div class="wish-card">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
            `;

        });

    }

}