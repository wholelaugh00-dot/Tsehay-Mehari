const start=document.getElementById("startDate");

const end=document.getElementById("returnDate");

const price=document.getElementById("price");

function calculate(){

if(start.value && end.value){

const oneDay=1000*60*60*24;

const days=(new Date(end.value)-new Date(start.value))/oneDay;

let total=180;

if(days>5){

total+=(days-5)*15;

}

price.innerHTML=total;

}

const returnDate = new Date(startDate);

returnDate.setDate(returnDate.getDate()+5);

document.getElementById("returnDate").value=
returnDate.toISOString().split("T")[0];
}

start.addEventListener("change",calculate);

end.addEventListener("change",calculate);

document.getElementById("rentalForm").onsubmit=(e)=>{

e.preventDefault();

const userId=localStorage.getItem("userId");

if(!userId){

alert("Please login before renting a dress.");

window.location="login.html";

return;

}

alert("Rental request submitted successfully!");

};