const btnLeft = document.querySelector(".left-btn");
const tabMenu = document.querySelector(".tab-menu");
const btnRight = document.querySelector(".right-btn");

const IconVisibility = () => {
    let scrollLeftValue = tabMenu.scrollLeft;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
});

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
});