
async function AfficherWorks() {
    const reponse = await fetch("http://localhost:5678/api/works");
    const travauxArchitecte = await reponse.json();
    const travauxElement = document.querySelector(".gallery");
    for (let i = 0; i < travauxArchitecte.length; i++) {
        //travauxElement.innerHTML += `<p> ${travauxArchitecte[i].title}: ${travauxArchitecte[i].imageUrl} </p><br>`;
        travauxElement.innerHTML += `
        <figure>
            <img src="${travauxArchitecte[i].imageUrl}" alt="${travauxArchitecte[i].title}">
            <figcaption>${travauxArchitecte[i].title}</figcaption>
        </figure>`;
    }
}
AfficherWorks();

async function AfficherCategories(){
    const reponse = await fetch("http://localhost:5678/api/categories");
    const categories = await reponse.json();
    const filtreDiv = document.querySelector("#filtres");

    for( let i = 0; i < categories.length; i++){
        filtreDiv.innerHTML += `<span id='${categories[i].id}' class="btn">${categories[i].name}</span>`
    }

}

AfficherCategories();