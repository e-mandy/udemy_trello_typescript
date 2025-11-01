"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Déjà on récupère tous les conteneurs d'items de notre app (ILs seront enregistrés comme une NodeList d'élément HTML)
const itemsContainer = document.querySelectorAll('.items-container');
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
// Ici on s'assure d'ajouter à nos conteneurs, tous les listeners qu'il faut pour toutes les actions qu"il y aura à éffectuer
// Du coup on récupère un container et on lui ajoute les listeners
function addContainerListener(currentContainer) {
    // On récupère le bouton de suppression de Container
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    // On récupère le bouton ajout d'item (l'ajout ne se fait pas encore, il ne fait qu'ouvrir le form)
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    //Ici, sont appelés les fonctions qui se chargeront de faire les ajouts de listeners spécifiques
    // Le listener sur le delete de container. Il récupère le bonton et lui applique le listener
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
}
// La boucle qui enclenche la fonction pour l'ajout des listeners aux containers.
itemsContainer.forEach((container) => {
    addContainerListener(container);
});
// La fonction qui récupère le bouton et lui affecte le listener click pour la suppression de container
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion);
}
function addItemBtnListeners(btn) {
    btn.addEventListener('click', handleAddItem);
}
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnsArray.indexOf(btn)]?.remove();
}
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector('ul');
    actualTextInput = actualContainer.querySelector('input');
    actualForm = actualContainer.querySelector('form');
    actualValidation = actualContainer.querySelector('.validation-msg');
}
//# sourceMappingURL=app.js.map