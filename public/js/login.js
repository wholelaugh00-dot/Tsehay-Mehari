const form=document.getElementById("loginForm");

const message=document.getElementById("message");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

const response=await fetch("http://localhost:3000/api/auth/login",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})

});

const data=await response.json();

if(response.ok){

localStorage.setItem("token",data.token);

localStorage.setItem("userId", data.user.id);

localStorage.setItem("userName", data.user.name);

localStorage.setItem("userRole", data.user.role);

localStorage.setItem("userId",data.user.id);

localStorage.setItem("userName",data.user.name);

localStorage.setItem("userRole",data.user.role);

message.style.color="green";

message.innerHTML="Login Successful";

setTimeout(()=>{

window.location.href="index.html";

},1500);

}else{

message.style.color="red";

message.innerHTML=data.message;

}

}catch(error){

message.innerHTML="Server Error";

}

});