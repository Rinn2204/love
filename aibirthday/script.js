document.getElementById('playButton').addEventListener('click', function() {
    var audio = new Audio('intann.mp3'); // Pastikan kamu punya file musik "romantic_song.mp3" di folder yang sama
    audio.play();

    // Disable tombol setelah sekali dipencet
    this.disabled = true;
    this.textContent = "Musik Sedang Diputar";
});
