const dress=document.getElementById("dress");
const start=document.getElementById("startDate");
const end=document.getElementById("returnDate");

const price=document.getElementById("price");
const days=document.getElementById("days");

const prices={

"Luxury Wedding Dress":180,

"Traditional Habesha":150,

"Modern Collection":170,

"Royal Bridal Dress":220,

"Graduation Dress":140,

"Golden Collection":200

};

function updateRental(){

if(!start.value)return;

const s=new Date(start.value);

const r=new Date(s);

r.setDate(r.getDate()+5);

end.value=r.toISOString().split("T")[0];

const total=prices[dress.value]*5;

price.innerText=total;

days.innerText=5;

}

dress.addEventListener("change",updateRental);

start.addEventListener("change",updateRental);

document.getElementById("rentalForm").addEventListener("submit",e=>{

e.preventDefault();

const userId=localStorage.getItem("userId");

if(!userId){

alert("Please login before renting.");

location.href="login.html";

return;

}

const rental={

dress:dress.value,

address:document.getElementById("address").value,

phone:document.getElementById("phone").value,

start:start.value,

returnDate:end.value,

total:price.innerText

};

let rentals=JSON.parse(localStorage.getItem("rentals"))||[];

rentals.push(rental);

localStorage.setItem("rentals",JSON.stringify(rentals));

alert("🎉 Rental Confirmed Successfully!");

window.location="cart.html";

});