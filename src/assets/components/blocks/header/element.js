var header = document.querySelector(".header"),
    menu = document.querySelector(".menu");window.addEventListener("scroll", function () {
    10 < window.pageYOffset && !header.classList.contains("header--hidden") && header.classList.add("header--hidden"), window.pageYOffset <= 10 && header.classList.contains("header--hidden") && header.classList.remove("header--hidden");
});

document.querySelector(".burgerMenu").addEventListener("click", switchMainNav);
