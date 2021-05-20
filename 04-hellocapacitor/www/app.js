

function fetchBlog() {
    return fetch(`https://devfest-nantes-2018-api.cleverapps.io/blog`)
        .then(function (response) {
            if (response.status !== 200) { // si ça c'est mal passé
                throw new Error("Le serveur n'a pas répondu correctement");
            } else return response.json(); // renvoie une promesse
        })
        .then(function (data) { // data correspond au retour du résolve (ici deux lignes au dessus)
            return data;
        })
        .catch(error => { console.log("Erreur attrapée : ", error) });
}

function createDomElt(tagname, text, parentElt = document.body, attributes) {
    let element = document.createElement(tagname);
    if (text) element.textContent = text;
    parentElt.appendChild(element);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
};

async function maFunction() {
    let array = await fetchBlog();
    array.forEach(element => {
        const card = createDomElt("ion-card", "", document.querySelector("ion-content"))
        const img = createDomElt("img", "", card, { "src": `https://devfest2018.gdgnantes.com/${element.image}` });
        const header = createDomElt("ion-card-header", "", card);
        const title = createDomElt("ion-card-title", element.title, header);
        const content = createDomElt("ion-card-content", element.brief, card);
    });
}

maFunction();


const takePicture = async () => {
    const image = await capacitorExports.Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: capacitorExports.CameraResultType.Uri
    });
    var imageUrl = image.webPath;
    //imageElement.src = imageUrl;
    presentModal();
};
const btn = document.querySelector("ion-icon") //= const boutton = document.getElementById("add-p"")
btn.onclick = function (event) {
    //takePicture();
    presentModal();

}


customElements.define('modal-page', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
  <ion-header>
    <ion-toolbar>
      <ion-title>Création d'un article privé</ion-title>
      <ion-buttons slot="primary">
        <ion-button onClick="dismissModal()">
          <ion-icon slot="icon-only" name="close"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
        <ion-label position="stacked">Titre</ion-label>
        <ion-textarea required></ion-textarea>
    </ion-item>
    <ion-item>
        <ion-label position="stacked">Description</ion-label>
        <ion-textarea required=true></ion-textarea>
    </ion-item>
    <ion-button expand="block">Enregistrer</ion-button>
  </ion-content>`;
    }
});

function presentModal() {

    // create the modal with the `modal-page` component
    const modalElement = document.createElement('ion-modal');
    modalElement.component = 'modal-page';
    modalElement.cssClass = 'my-custom-class';

    // present the modal
    document.body.appendChild(modalElement);
    return modalElement.present();
}