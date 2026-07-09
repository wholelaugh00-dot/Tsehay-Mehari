window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.background="#111";

}else{

nav.style.background="rgba(0,0,0,.6)";

}

});

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.opacity=".9";

});

button.addEventListener("mouseleave",()=>{

button.style.opacity="1";

});

});

console.log("Luxury Tsehay Mehari Website Ready");