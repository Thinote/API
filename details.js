document.addEventListener('DOMContentLoaded', function() {
    const character = JSON.parse(localStorage.getItem('characterDetails'));
    if (!character) {
        window.location.href = 'index.html'; // redirige vers la liste si aucune donnée n'est disponible
        return;
    }
    const container = document.getElementById('character-details'); /* fait apparaitre les caracteristiques des cartes*/
    container.innerHTML = `
        <div class="character-card"> 
            <img src="${character.image}" alt="${character.name}" style="width:100%;height:auto;">
            <div class="character-info">
                <h2>${character.name}</h2>
                <p><strong>Maison :</strong> ${character.house || 'Inconnue'}</p>
                <p><strong>Date de naissance :</strong> ${character.dateOfBirth || 'Non disponible'}</p>
                <p><strong>Acteur :</strong> ${character.actor || 'Non disponible'}</p>
                <p><strong>Rôle :</strong> ${character.role || 'Non disponible'}</p>
                <p><strong>Statut de sang :</strong> ${character.bloodStatus || 'Non disponible'}</p>
                <p><strong>Fidélité :</strong> ${character.loyalty || 'Non disponible'}</p>
                <p><strong>Patronus :</strong> ${character.patronus || 'Non disponible'}</p>
            </div>
        </div>
    `;
});
