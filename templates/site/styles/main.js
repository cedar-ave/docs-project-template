function productSelected( selectObject ) {
    window.location.href = selectObject.value;
}

function appMenuShow( ) {
    document.getElementById("appMenu").classList.toggle("docs-menu-show");
    window.addEventListener("click", appMenuHide);
}
    
function appMenuHide( event ) {
    if (!event.target.matches('.docs-navbar-link.apps-menu')) {
        document.getElementById("appMenu").classList.remove("docs-menu-show");
        window.removeEventListener("click", appMenuHide);
    }
} 

function devMenuShow( ) {
      document.getElementById("devMenu").classList.toggle("docs-menu-show");
    window.addEventListener("click", devMenuHide);
}

function devMenuHide( event ) {
    if (!event.target.matches('.docs-navbar-link.dev-menu')) {
        document.getElementById("devMenu").classList.remove("docs-menu-show");
        window.removeEventListener("click", devMenuHide);
    }
}