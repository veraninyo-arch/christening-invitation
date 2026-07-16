const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => observer.observe(section));

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

lucide.createIcons();

const eventDate = new Date("July 26, 2026 11:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = String(d).padStart(2, "0");

    hours.textContent = String(h).padStart(2, "0");

    minutes.textContent = String(m).padStart(2, "0");

    seconds.textContent = String(s).padStart(2, "0");


}

updateCountdown();

setInterval(updateCountdown, 1000);

/* ==========================
   WELCOME GATE
========================== */

const welcomeGate = document.getElementById("welcomeGate");
const envelope = document.getElementById("envelope");

if (welcomeGate && envelope) {

    envelope.addEventListener("click", () => {

        welcomeGate.classList.add("hide");

    });

}
