/*
affiche 'Coucou !' dans la console 
 */
console.log('Le scrpt est lu');

// --- Gestion du menu au click sur le bouton ---
// 1- On récupère sur la page le bouton
let boutonMenu = document.getElementById('btn-menu');

// 2- On récupère sur la page le conteneur du menu
let menuWrapper = document.getElementById('menu-wrapper');

// 3- Détection du click sur le bouton
boutonMenu.addEventListener( 'click', function() {
    // classList contient des outils pour agir sur les class d'un élément
    // toggle( 'ma-classe' ) ajoute ma-classe si elle n'y est pas déjà, sinon l'enlève
    menuWrapper.classList.toggle( 'opened' );
});