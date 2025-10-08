const games = [
  { id:1, title:'Neon Racer', size:'1.2 GB', desc:'Hızlı arcade yarış oyunu', cover:'img/game1.svg' },
  { id:2, title:'Pixel Quest', size:'850 MB', desc:'Retro macera platform', cover:'img/game2.svg' },
  { id:3, title:'Skyforge', size:'2.8 GB', desc:'Açık dünya keşif', cover:'img/game3.svg' },
  { id:4, title:'Mystic Cards', size:'430 MB', desc:'Kart strateji oyunu', cover:'img/game4.svg' }
];

const gamesEl = document.getElementById('games');
const yearEl = document.getElementById('year');
const searchInput = document.getElementById('search');

yearEl.textContent = new Date().getFullYear();

function render(list) {
  gamesEl.innerHTML = '';
  list.forEach(g => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <span class="badge">${g.size}</span>
      <img class="cover" src="${g.cover}" alt="${g.title} kapak">
      <h3>${g.title}</h3>
      <p>${g.desc}</p>
      <div class="actions">
        <button class="btn download" data-id="${g.id}">İndir</button>
        <button class="btn info" data-id="${g.id}">Detay</button>
      </div>
    `;
    gamesEl.appendChild(card);
  });
}

gamesEl.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const game = games.find(g => g.id === id);
  if (btn.classList.contains('download')) {
    alert(`${game.title} indiriliyor...`);
  } else if (btn.classList.contains('info')) {
    alert(`Detay: ${game.desc}`);
  }
});

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  render(
    q ? games.filter(g => g.title.toLowerCase().includes(q)) : games
  );
});

render(games);