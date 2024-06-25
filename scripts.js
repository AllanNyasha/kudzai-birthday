// JavaScript to handle interactive fun zone
function showJoke() {
    const jokes = [
        "What did one ocean say to the other ocean? Nothing, they just waved.",
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she should embrace her mistakes. She gave me a hug."
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.textContent = jokes[randomIndex];
}

function playMusic() {
    // Replace with actual romantic music or link to a music playlist
    alert("Playing romantic music for our love story! 💖🎶");
}

function showDance() {
    const danceVideo = document.getElementById('danceVideo');
    danceVideo.style.display = 'block';
}


function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Example functions for the Interactive Fun Zone
function showJoke() {
    document.getElementById('jokeDisplay').innerText = "Why don't scientists trust atoms? Because they make up everything!";
}

function playMusic() {
    var audio = new Audio('romantic_music.mp3');
    audio.play();
}

function showDance() {
    document.getElementById('danceVideo').style.display = 'block';
}
