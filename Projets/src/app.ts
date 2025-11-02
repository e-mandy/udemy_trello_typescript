//  Déjà on récupère tous les conteneurs d'items de notre app (ILs seront enregistrés comme une NodeList d'élément HTML)
const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>

let actualContainer: HTMLDivElement,
    actualBtn: HTMLButtonElement,
    actualUL: HTMLUListElement,
    actualForm: HTMLFormElement,
    actualTextInput: HTMLInputElement,
    actualValidation: HTMLSpanElement


// Ici on s'assure d'ajouter à nos conteneurs, tous les listeners qu'il faut pour toutes les actions qu"il y aura à éffectuer
// Du coup on récupère un container et on lui ajoute les listeners
function addContainerListener(currentContainer: HTMLDivElement){

    // On récupère le bouton de suppression de Container
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;

    // On récupère le bouton ajout d'item (l'ajout ne se fait pas encore, il ne fait qu'ouvrir le form)
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn') as HTMLButtonElement;

    //Ici, sont appelés les fonctions qui se chargeront de faire les ajouts de listeners spécifiques

    // Le listener sur le delete de container. Il récupère le bonton et lui applique le listener
    deleteBtnListeners(currentContainerDeletionBtn)

    
    addItemBtnListeners(currentAddItemBtn)
}

// La boucle qui enclenche la fonction pour l'ajout des listeners aux containers.
itemsContainer.forEach((container: HTMLDivElement) => {
    addContainerListener(container)
})

// La fonction qui récupère le bouton et lui affecte le listener click pour la suppression de container
function deleteBtnListeners(btn: HTMLButtonElement){
    // Au click il appelle la fonction handleContainerDeletion pour la suppression du container
    btn.addEventListener('click', handleContainerDeletion)
}
 
// La fonction qui récupère le bouton d'ajout d'item et lui affecte l'ecouteur de l'event click
function addItemBtnListeners(btn: HTMLButtonElement){
    // Au click, il appelle la fonction handleAddItem
    btn.addEventListener('click', handleAddItem)
}

// La fonction chargée de la suppression éffective du container. Elle récupère l'event qui s'est produit
function handleContainerDeletion(e: MouseEvent){

    // On récupère l'élément HTML qui a déclenché l'event
    const btn = e.target as HTMLButtonElement;

    // On récupère la liste de tous les boutons qui se charge de la suppression de containers
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];

    // On récupère tous les containers
    const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];

    // On va chercher avec la fonction indexOf, le container qui correspond au bouton de suppression qu'on a target, puis on supprime le container
    containers[btnsArray.indexOf(btn)]?.remove()
}


function handleAddItem(e: MouseEvent){
    const btn = e.target as HTMLButtonElement;
    if(actualContainer) toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}

// La fonction qui se charge de toggle l'affichage du form. Il récupère le bouton cliqué, le form correspondant et un boolean pour savoir si
// il faut ouvrir ou fermer le form
function toggleForm(btn: HTMLButtonElement, form: HTMLFormElement, action: boolean){

    // Si le action est à false, le formulaire se ferme
    if(!action){
        form.style.display = "none";
        btn.style.display = "block";
    
    // Si le action est à true, le formulaire s'ouvre
    }else if(action){
        form.style.display = "block";
        btn.style.display = "none";
    }
}

// La fonction qui récupère les informations importantes en rapport avec le container actif
function setContainerItems(btn: HTMLButtonElement){
    // Le bouton actif ou cliqué
    actualBtn = btn;

    // Le container actif
    actualContainer = btn.parentElement as HTMLDivElement;

    // Le <ul> du container actif
    actualUL = actualContainer.querySelector('ul') as HTMLUListElement;

    // Le <input /> du formulaire actuellement ouvert
    actualTextInput = actualContainer.querySelector('input') as HTMLInputElement;

    // Le formulaire actif ou ouvert actuellement
    actualForm = actualContainer.querySelector('form') as HTMLFormElement;

    // Le span du formulaire actif
    actualValidation = actualContainer.querySelector('.validation-msg') as HTMLSpanElement;
}