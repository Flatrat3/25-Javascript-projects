const barsIcon = document.querySelector(".icons .fa-bars");
const xMark = document.querySelector(".icons .fa-xmark");
const list = document.querySelector(".main-ul");

let isMenuVisible = false;

barsIcon.addEventListener("click", () => {
    if (!isMenuVisible) {
        isMenuVisible = true;
        list.style.display = "flex";
        barsIcon.style.display = "none";
        xMark.style.display = "block";
        list.style.transform = "translateX(50%)";
    } 
});

xMark.addEventListener("click", () => {
    isMenuVisible = false;
    list.style.transform = "translateX(-150%)";
    barsIcon.style.display = "block";
    xMark.style.display = "none";
});
