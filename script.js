const heart = document.getElementById("heart");
const msg = document.getElementById("message");
const music = document.getElementById("music");

heart.onclick = function () {

    msg.style.display = "block";

    music.play();

    sparkle();

    flowers();
};
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
function flowers(){

for(let i=0;i<40;i++){

let flower=document.createElement("div");

flower.innerHTML="🌹";

flower.style.position="absolute";

flower.style.left=Math.random()*window.innerWidth+"px";

flower.style.top="-50px";

flower.style.fontSize="30px";

document.body.appendChild(flower);

let y=0;

let fall=setInterval(()=>{

y+=5;

flower.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(fall);

flower.remove();

}

},20);

}

}
setInterval(() => {
    const h = document.createElement("div");
    h.className = "floating-heart";
    h.innerHTML = "💖";

    h.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(h);

    setTimeout(() => {
        h.remove();
    }, 6000);

}, 500);
