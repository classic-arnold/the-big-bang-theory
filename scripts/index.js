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