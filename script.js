// ==========================
// ELEMENTS
// ==========================
const heart = document.getElementById("heart");
const msg = document.getElementById("message");
const music = document.getElementById("music");

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

if (envelope && letter) {
    envelope.onclick = () => {
        letter.style.display = "block";
    };
}

// ==========================
// TYPING MESSAGE
// ==========================
const text = "💖 မင်းကို အမြဲချစ်နေပါတယ် ❤️";
let index = 0;

function typeText() {
    if (!msg) return;

    if (index < text.length) {
        msg.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

typeText();

// ==========================
// SPARKLES
// ==========================
function sparkle() {

    for (let i = 0; i < 60; i++) {

        const s = document.createElement("div");

        s.innerHTML = "✨";

        s.style.position = "fixed";
        s.style.left = Math.random() * window.innerWidth + "px";
        s.style.top = Math.random() * window.innerHeight + "px";
        s.style.fontSize = "25px";
        s.style.pointerEvents = "none";

        document.body.appendChild(s);

        setTimeout(() => s.remove(), 1500);
    }
}

// ==========================
// FLOWERS
// ==========================
function flowers() {

    for (let i = 0; i < 40; i++) {

        const flower = document.createElement("div");

        flower.innerHTML = "🌹";

        flower.style.position = "fixed";
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.top = "-50px";
        flower.style.fontSize = "30px";

        document.body.appendChild(flower);

        let y = -50;

        const fall = setInterval(() => {

            y += 5;

            flower.style.top = y + "px";

            if (y > window.innerHeight) {

                clearInterval(fall);

                flower.remove();
            }

        }, 20);
    }
}

// ==========================
// FLOATING HEARTS
// ==========================
setInterval(() => {

    const h = document.createElement("div");

    h.innerHTML = "💖";

    h.style.position = "fixed";
    h.style.left = Math.random() * window.innerWidth + "px";
    h.style.bottom = "-50px";
    h.style.fontSize = "25px";
    h.style.animation = "float 6s linear";
    h.style.pointerEvents = "none";

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 6000);

}, 600);

// ==========================
// FIREWORKS
// ==========================
function fireworks(x, y) {

    const colors = [
        "#ff0080",
        "#ffcc00",
        "#00ffff",
        "#00ff66",
        "#ffffff",
        "#ff4444"
    ];

    for (let i = 0; i < 80; i++) {

        const p = document.createElement("div");

        p.className = "firework";

        p.style.position = "fixed";
        p.style.left = x + "px";
        p.style.top = y + "px";
        p.style.width = "8px";
        p.style.height = "8px";
        p.style.borderRadius = "50%";
        p.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(p);

        const angle = Math.random() * Math.PI * 2;

        const distance = Math.random() * 220 + 80;

        const dx = Math.cos(angle) * distance;

        const dy = Math.sin(angle) * distance;

        p.animate([
            {
                transform: "translate(0px,0px) scale(1)",
                opacity: 1
            },
            {
                transform: `translate(${dx}px, ${dy}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

        setTimeout(() => p.remove(), 1200);
    }
}

// ==========================
// HEART EXPLOSION
// ==========================
function heartExplosion() {

    for (let i = 0; i < 25; i++) {

        const h = document.createElement("span");

        h.innerHTML = "💖";

        h.style.position = "fixed";
        h.style.left = window.innerWidth / 2 + "px";
        h.style.top = window.innerHeight / 2 + "px";
        h.style.fontSize = "30px";

        document.body.appendChild(h);

        const dx = (Math.random() - 0.5) * 700;
        const dy = (Math.random() - 0.5) * 700;

        h.animate([
            {
                transform: "translate(0px,0px)",
                opacity: 1
            },
            {
                transform: `translate(${dx}px, ${dy}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: "ease-out"
        });

        setTimeout(() => h.remove(), 1500);
    }
}

// ==========================
// SHOOTING STAR
// ==========================
function shootingStar() {

    const star = document.createElement("div");

    star.className = "star";

    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * 200 + "px";

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 2000);
}

setInterval(shootingStar, 1800);

// ==========================
// LOVE TIMER
// ==========================
const startDate = new Date(2023, 2, 1, 0, 0, 0);

function updateLoveTimer() {

    const timer = document.getElementById("timer");

    if (!timer) return;

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(diff / (1000 * 60) % 60);
    const seconds = Math.floor(diff / 1000 % 60);

    timer.innerHTML =
        `${days} Days 💖 ${hours} Hours 💖 ${minutes} Minutes 💖 ${seconds} Seconds`;
}

setInterval(updateLoveTimer, 1000);

updateLoveTimer();

// ==========================
// HEART CLICK
// ==========================
if (heart) {

    heart.onclick = () => {

        if (msg) {
            msg.style.display = "block";
        }

        if (music) {
            music.play();
        }

        sparkle();

        flowers();

        heartExplosion();

        fireworks(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

        const letterBox = document.getElementById("letter-box");

        if (letterBox) {
            letterBox.style.display = "block";
        }

        const gallery = document.getElementById("heart-gallery");

        if (gallery) {
            gallery.style.display = "block";
        }

    };

}
