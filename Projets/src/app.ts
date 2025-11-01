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
 
// La fonction qui récupère le bouton d'ajout d'item 
function addItemBtnListeners(btn: HTMLButtonElement){

    btn.addEventListener('click', handleAddItem)
}

function handleContainerDeletion(e: MouseEvent){
    const btn = e.target as HTMLButtonElement;

    const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];

    containers[btnsArray.indexOf(btn)]?.remove()
}

function handleAddItem(e: MouseEvent){
    const btn = e.target as HTMLButtonElement;
    if(actualContainer) toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}

function toggleForm(btn: HTMLButtonElement, form: HTMLFormElement, action: boolean){
    if(!action){
        form.style.display = "none";
        btn.style.display = "block";
    }else if(action){
        form.style.display = "block";
        btn.style.display = "none";
    }
}

function setContainerItems(btn: HTMLButtonElement){
    actualBtn = btn;
    actualContainer = btn.parentElement as HTMLDivElement;
    actualUL = actualContainer.querySelector('ul') as HTMLUListElement;
    actualTextInput = actualContainer.querySelector('input') as HTMLInputElement;
    actualForm = actualContainer.querySelector('form') as HTMLFormElement;
    actualValidation = actualContainer.querySelector('.validation-msg') as HTMLSpanElement;
}