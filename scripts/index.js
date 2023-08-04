/** Utils */
function hideElem(elemId) {
    const elem = document.getElementById(elemId);
    elem.style.display = "none";
}

function showElem(elemId) {
    const elem = document.getElementById(elemId);
    elem.style.display = "revert";
}

function showMenu() {
    const menu = document.getElementById("menu");
    menu.style.height = "100%";
}

function hideMenu() {
    const menu = document.getElementById("menu");
    menu.style.height = "0";
}

/** Menu */
function openMenu() {
    hideElem("menu-button");
    showElem("menu-close-button");
    showMenu();
}

function closeMenu() {
    showElem("menu-button");
    hideElem("menu-close-button");
    hideMenu();
}