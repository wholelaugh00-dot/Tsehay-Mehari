console.log("Tsehay Mehari website loaded");
let cart = [];
let total = 0;


const buttons = document.querySelectorAll(".card button");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        let card = button.parentElement;

        let name = card.querySelector("h3").innerText;


        cart.push(name);

        total += 100;


        document.getElementById("cart-items").innerHTML =
            cart.map(item => `<p>${item}</p>`).join("");


        document.getElementById("total").innerText = total;


        alert(name + " added to cart!");

    });

});