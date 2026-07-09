window.onload=()=>{

const sections=document.querySelectorAll(".about-content,.stats");

sections.forEach(section=>{

section.style.opacity="0";

setTimeout(()=>{

section.style.transition="1s";

section.style.opacity="1";

},300);

});

};