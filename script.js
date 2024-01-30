document.addEventListener('DOMContentLoaded', function () {
    const playlistElement = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');

    // Obtener la lista de canciones desde la API REST
    fetch('http://tu-api-rest.com/canciones')
        .then(response => response.json())
        .then(data => {
            // Crear la lista de reproducción dinámicamente
            data.forEach(song => {
                const listItem = document.createElement('div');
                listItem.className = 'playlist-item';
                listItem.textContent = `${song.titulo} - ${song.artista}`;

                listItem.addEventListener('click', () => {
                    // Al hacer clic en una canción, reproducirla
                    audioPlayer.src = `http://tu-api-rest.com/canciones/${song.id}/reproducir`;
                    audioPlayer.play();
                });

                playlistElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error al obtener la lista de canciones:', error));
});