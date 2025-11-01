//  Déjà on récupère tous les conteneurs d'items de notre app (ILs seront enregistrés comme une NodeList d'élément HTML)
const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>

let actualContainer: HTMLDivElement,
    actualBtn: HTMLButtonElement,
    actualUL: HTMLUListElement,
    actualForm: HTMLFormElement,
    actualTextInput: HTMLInputElement,
    actualValidation: HTMLSpanElement


function addContainerListener(currentContainer: HTMLDivElement){

    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn') as HTMLButtonElement;


    deleteBtnListeners(currentContainerDeletionBtn)
    addItemBtnListeners(currentAddItemBtn)
}

itemsContainer.forEach((container: HTMLDivElement) => {
    addContainerListener(container)
})

function deleteBtnListeners(btn: HTMLButtonElement){
    btn.addEventListener('click', handleContainerDeletion)
}
 
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