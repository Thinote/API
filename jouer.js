document.getElementById('draw-button').addEventListener('click', function() {
    fetch('https://hp-api.lainocs.fr/characters')
        .then(response => response.json())
        .then(characters => {
            const randomIndex = Math.floor(Math.random() * characters.length); /* fais apparaitre les cartes de façon aleatoire*/
            const character = characters[randomIndex];
            const container = document.getElementById('card-container');
            container.innerHTML = `
                <div class="character-card">
                    <img src="${character.image}" alt="${character.name}">
                    <div class="character-info">
                        <div class="character-name">${character.name}</div>
                    </div>
                </div>
            `;
        });
});
