import { getCharacters } from '../model/characterModel.js';

export async function renderCharacters(containerId) {
  const characters = await getCharacters();
  const container = document.getElementById(containerId);
  container.innerHTML = characters.map(character => `
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="${character.image}" class="card-img-top" alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">Status: ${character.status}</p>
        </div>
      </div>
    </div>
  `).join('');
}