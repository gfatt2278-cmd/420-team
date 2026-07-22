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
const text = "မင်းကို အမြဲချစ်နေပါတယ် ❤️";
let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 80);
    }
}

typeText();
heart.onclick = function(){

    heart.style.transform="scale(1.5)";

    setTimeout(()=>{
        heart.style.transform="scale(1)";
    },400);

    msg.style.display="block";

    music.play();

    sparkle();

    flowers();

}
setInterval(()=>{

let h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=Math.random()*window.innerWidth+"px";

h.style.bottom="-50px";

h.style.fontSize="25px";

h.style.animation="float 6s linear";

document.body.appendChild(h);

setTimeout(()=>h.remove(),6000);

},600);
heart.addEventListener("click",()=>{

for(let i=0;i<25;i++){

let h=document.createElement("span");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=window.innerWidth/2+"px";

h.style.top=window.innerHeight/2+"px";

h.style.fontSize="30px";

document.body.appendChild(h);

let x=(Math.random()-0.5)*700;

let y=(Math.random()-0.5)*700;

h.animate([

{transform:"translate(0,0)",opacity:1},

{transform:translate(${x}px,${y}px),opacity:0}

],{

duration:1200

});

setTimeout(()=>h.remove(),1200);

}

});
body{

background:linear-gradient(-45deg,#000,#180024,#25003d,#000);

background-size:400% 400%;

animation:bg 10s ease infinite;

}

@keyframes bg{

0%{background-position:0% 50%;}

50%{background-position:100% 50%;}

100%{background-position:0% 50%;}

}
const text="💖 မင်းကို အမြဲချစ်နေပါတယ် 💖";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("messageText").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}
