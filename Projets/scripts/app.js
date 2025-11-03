"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Déjà on récupère tous les conteneurs d'items de notre app (ILs seront enregistrés comme une NodeList d'élément HTML)
const itemsContainer = document.querySelectorAll('.items-container');
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
let addContainerForm, addContainerFormInput, validationNewContainer;
const addNewContainer = document.querySelector('add-new-container');
const containerList = document.querySelector('.main-content');
// Ici on s'assure d'ajouter à nos conteneurs, tous les listeners qu'il faut pour toutes les actions qu"il y aura à éffectuer
// Du coup on récupère un container et on lui ajoute les listeners
function addContainerListener(currentContainer) {
    // On récupère le bouton de suppression de Container
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    // On récupère le bouton ajout d'item (l'ajout ne se fait pas encore, il ne fait qu'ouvrir le form)
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn');
    const currentForm = currentContainer.querySelector('form');
    //Ici, sont appelés les fonctions qui se chargeront de faire les ajouts de listeners spécifiques
    // Le listener sur le delete de container. Il récupère le bonton et lui applique le listener
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    addFormSubmitListeners(currentForm);
}
function addNewContainerListeners(container) {
    const addNewContainerBtn = container.querySelector('add-container-btn');
    const currentCloseFormBtn = container.querySelector('close-form-btn');
    const currentAddNewContainerForm = container.querySelector('form');
    addNewContainerListener(addNewContainerBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    createNewContainer(currentAddNewContainerForm);
}
// La boucle qui enclenche la fonction pour l'ajout des listeners aux containers.
itemsContainer.forEach((container) => {
    addContainerListener(container);
});
addNewContainerListeners(addNewContainer);
// La fonction qui récupère le bouton et lui affecte le listener click pour la suppression de container
function deleteBtnListeners(btn) {
    // Au click il appelle la fonction handleContainerDeletion pour la suppression du container
    btn.addEventListener('click', handleContainerDeletion);
}
// La fonction qui récupère le bouton d'ajout d'item et lui affecte l'ecouteur de l'event click
function addItemBtnListeners(btn) {
    // Au click, il appelle la fonction handleAddItem
    btn.addEventListener('click', handleAddItem);
}
function closingFormBtnListeners(btn) {
    btn.addEventListener('click', () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListeners(form) {
    form.addEventListener('submit', createNewItem);
}
function addNewContainerListener(btn) {
    btn.addEventListener('click', handleAddContainer);
}
// La fonction chargée de la suppression éffective du container. Elle récupère l'event qui s'est produit
function handleContainerDeletion(e) {
    // On récupère l'élément HTML qui a déclenché l'event
    const btn = e.target;
    // On récupère la liste de tous les boutons qui se charge de la suppression de containers
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    // On récupère tous les containers
    const containers = [...document.querySelectorAll('.items-container')];
    // On va chercher avec la fonction indexOf, le container qui correspond au bouton de suppression qu'on a target, puis on supprime le container
    containers[btnsArray.indexOf(btn)]?.remove();
}
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function handleAddContainer(e) {
    const btn = e.target;
    if (actualContainer) {
        toggleForm(actualBtn, actualForm, false);
    }
    else {
        setAddNewContainerItems(btn);
        toggleForm(btn, addContainerForm, true);
    }
}
// La fonction qui se charge de toggle l'affichage du form. Il récupère le bouton cliqué, le form correspondant et un boolean pour savoir si
// il faut ouvrir ou fermer le form
function toggleForm(btn, form, action) {
    // Si le action est à false, le formulaire se ferme
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
        // Si le action est à true, le formulaire s'ouvre
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
// La fonction qui récupère les informations importantes en rapport avec le container actif
function setContainerItems(btn) {
    // Le bouton actif ou cliqué
    actualBtn = btn;
    // Le container actif
    actualContainer = btn.parentElement;
    // Le <ul> du container actif
    actualUL = actualContainer.querySelector('ul');
    // Le <input /> du formulaire actuellement ouvert
    actualTextInput = actualContainer.querySelector('input');
    // Le formulaire actif ou ouvert actuellement
    actualForm = actualContainer.querySelector('form');
    // Le span du formulaire actif
    actualValidation = actualContainer.querySelector('.validation-msg');
}
function setAddNewContainerItems(btn) {
    const addContainer = btn.parentElement;
    addContainerForm = addContainer?.querySelector('form');
    addContainerFormInput = addContainerForm.querySelector('input');
    validationNewContainer = addContainerForm.querySelector('.validation-msg');
}
function createNewItem(e) {
    e.preventDefault();
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least one character long";
        return;
    }
    else {
        actualValidation.textContent = "";
    }
    const itemContent = actualTextInput.value;
    const li = `
        <li class="item" draggable="true">
            <p>${itemContent}</p>
            <button>X</button>
        </li>`;
    actualUL.insertAdjacentHTML('beforeend', li);
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector('button');
    handleItemDeletion(liBtn);
    actualTextInput.value = "";
}
function createNewContainer(form) {
    form.addEventListener('submit', handleAddNewContainer);
}
function handleItemDeletion(btn) {
    btn.addEventListener('click', () => {
        const elToRemove = btn.parentElement;
        elToRemove?.remove();
    });
}
function handleAddNewContainer(e) {
    e.preventDefault();
    if (addContainerForm.value.length === 0) {
        validationNewContainer.textContent = "Must have at least one character";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    const container = document.querySelector('.items-container');
    const newContainer = container.cloneNode();
    const newContainerContent = `
        <div class="items-container" draggable="true">
            <div class="top-container">
                <h2>${addContainerFormInput.value}</h2>
                <button class="delete-container-btn">X</button>
            </div>
            <ul></ul>
            <button class="add-item-btn">Add an item</button>
            <form autocomplete="off">
                <div class="top-form-container">
                    <label for="item">Add a new item</label>
                    <button type="button" class="close-form-btn">X</button>
                </div>
                <input type="text" id="item">
                <span class="validation-msg"></span>
                <button type="submit">Submit</button>
            </form>
        </div>
    `;
    newContainer.innerHTML = newContainerContent;
    containerList?.insertBefore(newContainer, addNewContainer);
    addContainerFormInput.value = "";
    addContainerListener(newContainer);
}
//# sourceMappingURL=app.js.map