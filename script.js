const heart = document.getElementById("heart");
const message = document.getElementById("message");

heart.onclick = function(){

    message.style.display = "block";

};
const heart=document.getElementById("heart");
const msg=document.getElementById("message");

heart.onclick=function(){

msg.style.display="block";

sparkle();

flowers();

}
function sparkle(){

for(let i=0;i<60;i++){

let s=document.createElement("div");

s.innerHTML="✨";

s.style.position="absolute";

s.style.left=Math.random()*window.innerWidth+"px";

s.style.top=Math.random()*window.innerHeight+"px";

s.style.fontSize="25px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},1500);

}

}
