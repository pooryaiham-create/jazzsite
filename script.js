const tracks = [
  { title: 'Midnight Echo', artist: 'Ari Voss', genre: 'Lo-fi', duration: '3:22', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { title: 'Neon Skyline', artist: 'Mina R.', genre: 'Synthwave', duration: '4:01', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { title: 'Golden Hour', artist: 'Jules K.', genre: 'Chill', duration: '2:48', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

const playlists = [
  { title: 'Chill Vibes', description: 'Relaxing beats for late-night listening.', count: '8 tracks' },
  { title: 'Late Nights', description: 'Moody and cinematic soundscapes.', count: '6 tracks' },
  { title: 'Deep Focus', description: 'Minimal and immersive music for concentration.', count: '10 tracks' }
];

function renderTracks() {
  const container = document.getElementById('track-list');
  if (!container) return;
  container.innerHTML = tracks.map((track) => `
    <article class="card">
      <div class="meta-row"><span class="tag">${track.genre}</span><span>${track.duration}</span></div>
      <h3>${track.title}</h3>
      <p>${track.artist}</p>
      <audio class="audio-player" controls preload="none">
        <source src="${track.audio}" type="audio/mpeg" />
      </audio>
    </article>
  `).join('');
}

function renderPlaylists() {
  const container = document.getElementById('playlist-list');
  if (!container) return;
  container.innerHTML = playlists.map((playlist) => `
    <article class="card">
      <h3>${playlist.title}</h3>
      <p>${playlist.description}</p>
      <div class="meta-row"><span>${playlist.count}</span></div>
    </article>
  `).join('');
}

renderTracks();
renderPlaylists();
