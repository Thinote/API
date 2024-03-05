document.addEventListener('DOMContentLoaded', function() {
    fetch('https://hp-api.lainocs.fr/characters') 
        .then(response => response.json())
        .then(data => { /*recupere les données de L'API*/
            const container = document.getElementById('characters-container');
            data.forEach((character, index) => {
                const card = document.createElement('div');
                card.classList.add('character-card');
                card.innerHTML = `
                    <img src="${character.image}" alt="${character.name}"> 
                    <div class="character-info">
                        <div class="character-name">${character.name}</div>
                        <div class="character-house">${character.house || 'Inconnue'}</div>
                    </div>
                `; /* affiche les cartes*/
                card.addEventListener('click', () => {
                    localStorage.setItem('characterDetails', JSON.stringify(character));
                    window.location.href = 'details.html';
                });
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des personnages:', error)); /*si le lien est éronné (ou autre)*/
});

