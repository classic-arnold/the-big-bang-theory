/** Utils */
function hideElem(elemId) {
    const elem = document.getElementById(elemId);
    elem.style.display = "none";
}

function showElem(elemId) {
    const elem = document.getElementById(elemId);
    elem.style.display = "revert";
}

/** Menu */
function openMenu() {
    hideElem("menu-button");
    showElem("menu-close-button");
    showElem("menu");
}

function closeMenu() {
    showElem("menu-button");
    hideElem("menu-close-button");
    hideElem("menu");
}

document.addEventListener("DOMContentLoaded", function (e) {
    document.querySelectorAll('.menu-item a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (width < 480) closeMenu();
        });
    });
})