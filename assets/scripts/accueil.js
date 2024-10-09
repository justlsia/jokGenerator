
// ***** télécharger un document texte *****
function downloadTextFile() {
    // Contenu du fichier
    const textContent = "Ceci est une blague douteuse de catégorie développeur.";
    // Créer le fichier 
    const blob = new Blob([textContent], { type: 'text/plain' });
    // Création d'une URL temporaire du fichier
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    // Nom du fichier à télécharger
    a.download = 'script.bat';
    document.body.appendChild(a);
    // Télécharger le fichier
    a.click();
    // Supprimer le lien
    document.body.removeChild(a);
    // Libèrer l'URL temporaire du fichier
    URL.revokeObjectURL(url);

    // Rediriger vers la page après 1 seconde
    setTimeout(() => {
        window.location.href = './generateur.html'; // Redirection vers la page générateur
    }, 1000);
}

// Ajouter l'événement de clic au bouton
document.getElementById('btnStart').addEventListener('click', downloadTextFile);
