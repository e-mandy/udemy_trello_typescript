const form = document.querySelector('form') as HTMLFormElement

console.log(form.children)


form.addEventListener('submit', handleSbumit);

window.addEventListener('click', handleClick)

function handleSbumit(event: Event) {
    event.preventDefault();
    console.log("SUBMITTED")
}

// Un type générique pour génrer tous les évent en rapport avec la souris
function handleClick(event: MouseEvent){
    console.log(event.clientX, event.clientY)
}

// Ici pas il n'y a pas d'union avec un NULL parce que le selectorAll renvoit toujours une NodeList
const paragraphs = document.querySelectorAll('p')