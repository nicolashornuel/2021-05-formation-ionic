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
        const img = createDomElt("img", "", card, {"src": `https://devfest2018.gdgnantes.com/${element.image}`});
        const header = createDomElt("ion-card-header", "", card);
        const title = createDomElt("ion-card-title", element.title, header);
        const content = createDomElt("ion-card-content", element.brief, card);
    });
}

maFunction();
