// =============================
// NAVBAR DROPDOWN EFFECT
// =============================
const navItems = document.querySelectorAll(".navlinks li");

navItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.color = "royalblue";
    });

    item.addEventListener("mouseleave", () => {
        item.style.color = "black";
    });
});


// =============================
// SIGN IN BUTTON CLICK
// =============================
const signInBtn = document.querySelector(".signin-search-wrapper button");

signInBtn.addEventListener("click", () => {
    alert("Sign-in feature coming soon!");
});


// =============================
// SEARCH ICON CLICK
// =============================
const searchIcon = document.querySelector(".fa-magnifying-glass");

searchIcon.addEventListener("click", () => {
    alert("Search feature activated!");
});


// =============================
// SWIPER SLIDER INIT
// =============================
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// =============================
// BUTTON CLICK ANIMATION
// =============================
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});


// =============================
// SCROLL ANIMATION
// =============================
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("article");

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
