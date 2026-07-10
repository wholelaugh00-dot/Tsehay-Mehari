const cart = JSON.parse(localStorage.getItem("cart")) || [];

const table = document.getElementById("cartTableBody");
const totalElement = document.getElementById("cartTotal");

function loadCart() {

    table.innerHTML = "";

    let grandTotal = 0;

    if (cart.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;">
                    Your cart is empty.
                </td>
            </tr>
        `;

        totalElement.innerText = "Total: $0";

        return;
    }

    cart.forEach((item, index) => {

        const price = Number(item.price.replace("$",""));

        const total = price * item.quantity;

        grandTotal += total;

        table.innerHTML += `

        <tr>

            <td>
                <img src="${item.image}" width="90">
            </td>

            <td>${item.name}</td>

            <td>${item.price}</td>

            <td>

                <button onclick="decrease(${index})">-</button>

                ${item.quantity}

                <button onclick="increase(${index})">+</button>

            </td>

            <td>$${total}</td>

            <td>

                <button onclick="removeItem(${index})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

    totalElement.innerText = "Total: $" + grandTotal;

}

function increase(index){

    cart[index].quantity++;

    save();

}

function decrease(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }

    save();

}

function removeItem(index){

    cart.splice(index,1);

    save();

}

function save(){

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

}

loadCart();