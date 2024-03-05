document.addEventListener('DOMContentLoaded', function() {
    const collection = JSON.parse(localStorage.getItem('characterCollection')) || [];
    const container = document.getElementById('collection-container');

    if(collection.length === 0) {
        container.innerHTML = "<p>Aucune carte dans la collection.</p>";
    } else {
        collection.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('character-card');
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}" style="width:100%;height:auto;">
                <div class="character-info">
                    <div class="character-name">${character.name}</div>
                    <div class="character-house">${character.house || 'Inconnue'}</div>
                </div>
            `;
            container.appendChild(card);
        });
    }
});

/* je n'ai pas encore reussi à faire fonctionner la collection*/
