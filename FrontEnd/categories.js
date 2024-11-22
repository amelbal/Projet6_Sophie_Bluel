
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
        filtreDiv.innerHTML += `<span id='${categories[i].id}' class="btn" onclick="RecupererImageParCategorie('${categories[i].id}')">${categories[i].name}</span>`
    }

}

AfficherCategories();

async function RecupererImageParCategorie(idCategorie) {
    document.querySelector(".gallery").innerHTML="";
    let travauxElement = document.createElement("div");
    travauxElement.setAttribute("id","gallery");
    const reponse = await fetch("http://localhost:5678/api/works");
    const travauxArchitecte = await reponse.json();
     travauxElement = document.querySelector(".gallery");
    for (let i = 0; i < travauxArchitecte.length; i++) {
        console.log(idCategorie);
        console.log(travauxArchitecte[i]);
        if (idCategorie==0) {
            travauxElement.innerHTML += `
            <figure>
                <img src="${travauxArchitecte[i].imageUrl}" alt="${travauxArchitecte[i].title}">
                <figcaption>${travauxArchitecte[i].title}</figcaption>
            </figure>`;
        }
    else if (travauxArchitecte[i].categoryId==idCategorie) {

        travauxElement.innerHTML += `
        <figure>
            <img src="${travauxArchitecte[i].imageUrl}" alt="${travauxArchitecte[i].title}">
            <figcaption>${travauxArchitecte[i].title}</figcaption>
        </figure>`;
    }
    }  
}
