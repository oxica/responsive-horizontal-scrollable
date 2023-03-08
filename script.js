const btnLeft = document.querySelector(".left-btn");
const tabMenu = document.querySelector(".tab-menu");
const btnRight = document.querySelector(".right-btn");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    setTimeout(() => IconVisibility(),50)
});

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    setTimeout(() => IconVisibility(), 50)
});

window.onload = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
};