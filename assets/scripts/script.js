// Appeller l'API : joke API
const jokeApi = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=json";



// ***** Afficher une blague *****
// Fonction pour afficher une blague
function displayJoke(joke) {

    // Sélectionner une ligne du tableau HTML 
    const jokeTableauBody = document.querySelector('#jokeTableau tbody')

    // Élements à inserer dans le tableau HTML
    const row = jokeTableauBody.insertRow();        // Créer une nouvelle ligne dans le tableau HTML

    const cell_Categorie = row.insertCell();        // Catégorie de blague
    const cell_Blague = row.insertCell();           // Blague générer
    const cell_Edition = row.insertCell();          // Bouton de supression de la blague

    // Catégorie de la blague
    cell_Categorie.textContent = joke.category;

    // Blague compléte (blague et réponse)
    // Si la blague est en deux partie 
    if (joke.type === 'twopart') {
        cell_Blague.textContent = `${joke.setup} ${joke.delivery}`;
    }
    // Sinon si la blague est en une partie
    else {
        cell_Blague.textContent = joke.joke;
    }
    

    // Crée le bouton de supression de la blague 
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Supprimer la blague";       // Contenu texte du bouton
    deleteButton.classList.add('btn','btn-primary','btn-delete');        // Ajout des classes boostrap 

    // Ajout d'un évenement au clique sur le bouton
    deleteButton.addEventListener('click', function() {
        // Code de supression de la blague
        console.log("Supression de la blague : ", joke);
        // Supprimer la blague sélectionnée du tableau
        row.remove();
    })

    // Ajout du bouton au tableau HTML
    cell_Edition.appendChild(deleteButton);

}


// ***** Ajouter une nouvelle blague au tableau *****
// Séléctionner le bouton d'ajout de blague : btnNewJoke
const btnNewJoke = document.getElementById('btnNewJoke');

// Ajouter un évenement au clique sur le bouton
btnNewJoke.addEventListener('click', function() {
    // Fetch : Effectue une requête HTTP pour récupérer des données
    fetch(jokeApi)

    // Un fois la réponse reçu
    .then(function(response) {

        //  Afficher le statut de la réponse dans la console
        console.log(response.status);

        // Si le statut est bien à 200 (réponse positive)
        if (response.status == 200) {
            // On parse/transforme en json
            response.json()
            // Une fois la conversion du json (promesse) effectuée
            .then((joke) => {
                console.log(joke);
                // Appeler la fonction pour afficher les blagues
                displayJoke(joke);
            });
        }
        // Si la promesse n'est pas tenu
        else {
            console.log("Erreur lors de la récupération des données.")
        }
    })
})




// Fetch : Effectue une requête HTTP pour récupérer des données
fetch(jokeApi)

// Un fois la réponse reçu
.then(function(response) {

    //  Afficher le statut de la réponse dans la console
    console.log(response.status);
    
    // Si le statut est bien à 200 (réponse positive)
    if (response.status == 200) {
        // On parse/transforme en json
        response.json()
            // Une fois la conversion du json (promesse) effectuée
            .then((joke) => {
                console.log(joke);
                // Appeler la fonction pour afficher les blagues
                //displayJoke(joke); TEMP
            });
    }
})

// Sinon si une erreur c'est produit durant le traitement
.catch(function(error) {
    // Afficher l'erreur
    console.log(error);
});