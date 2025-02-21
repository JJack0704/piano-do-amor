let currentAudio = null;

function playSound(note) {
    // Se já houver um áudio tocando, pare ele
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reinicia o áudio
    }

    // Toca o novo áudio
    currentAudio = new Audio(`sounds/${note}.mp3`);
    currentAudio.play();
}
