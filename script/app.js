
let menu = document.querySelector(".menu");
let line_box = document.querySelector(".line-menu");
let line_1 = document.querySelector(".line--1");
let line_2 = document.querySelector(".line--2");
let line_3 = document.querySelector(".line--3");
let x = 0;

line_box.addEventListener("click", () => {
    if (x == 0) {
        menu.style.left = "0";
        line_1.classList.remove("line--1");
        line_2.classList.remove("line--2");
        line_3.classList.remove("line--3");
        line_1.classList.add("line--1-close");
        line_2.classList.add("line--2-close");
        line_3.classList.add("line--3-close");
        x = 1;
    } else {
        menu.style.left = "-220px";
        line_1.classList.add("line--1");
        line_2.classList.add("line--2");
        line_3.classList.add("line--3");
        line_1.classList.remove("line--1-close");
        line_2.classList.remove("line--2-close");
        line_3.classList.remove("line--3-close");
        x = 0
    }
})