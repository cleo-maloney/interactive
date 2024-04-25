let albumIndex = 0;
let backgroundIndex = 0;
let isFirstAction = true;

window.onload = function() {
    const albumImages = [
        {src: 'assets/aloneagain.png', audio: 'assets/aloneagain.m4a'},
        {src: 'assets/herethere.png', audio: 'assets/herethere.m4a'},
        {src: 'assets/howglad.png', audio: 'assets/howglad.m4a'},
        {src: 'assets/julia.png', audio: 'assets/julia.m4a'},
        {src: 'assets/letemin.png', audio: 'assets/letemin.m4a'},
        {src: 'assets/neverrains.png', audio: 'assets/neverrains.m4a'},
        {src: 'assets/popstar.png', audio: 'assets/popstar.m4a'},
        {src: 'assets/purplehat.png', audio: 'assets/purplehat.m4a'},
        {src: 'assets/quandoquando.png', audio: 'assets/quandoquando.m4a'},
        {src: 'assets/september.png', audio: 'assets/september.m4a'},
        {src: 'assets/siesta.png', audio: 'assets/siesta.m4a'},
        {src: 'assets/soundandcolor.png', audio: 'assets/soundandcolor.m4a'},
        {src: 'assets/superrich.png', audio: 'assets/superrich.m4a'},
        {src: 'assets/wichita.png', audio: 'assets/wichita.m4a'},
        {src: 'assets/saygoodbye.png', audio: 'assets/saygoodbye.m4a'},
        {src: 'assets/karela.png', audio: 'assets/followthesun.m4a'},
        {src: 'assets/befriends.png', audio: 'assets/befriends.mp3'},
    ];

    const backgroundImages = [
        'assets/background.png',
        'assets/background3.png',
        'assets/background2.png'
    ];

    const albumContainer = document.getElementById("images");

    albumImages.forEach((imgObj, index) => {
        const img = document.createElement("img");
        img.src = imgObj.src;
        img.className = "album";
        img.style.opacity = 0; // Set initial opacity of all album images to 0
        img.dataset.audio = imgObj.audio; // Store audio file path in dataset
        albumContainer.appendChild(img);
    });

    // Randomly select initial album image
    albumIndex = Math.floor(Math.random() * albumImages.length);
    const initialAlbum = albumContainer.children[albumIndex];
    initialAlbum.style.opacity = 1;
    playAudio(initialAlbum.dataset.audio);

    const container = document.querySelector('.container');
    container.style.backgroundImage = `url(${backgroundImages[backgroundIndex]})`;
};

document.body.addEventListener('keydown', function() {
    handleAction();
});

document.body.addEventListener('click', function() {
    handleAction();
});

function handleAction() {
    const albumImages = document.querySelectorAll(".album");

    if (isFirstAction) {
        isFirstAction = false;
    } else {
        const prevAlbum = albumImages[albumIndex];
        const newAlbumIndex = (albumIndex + 1) % albumImages.length;
        const nextAlbum = albumImages[newAlbumIndex];

        const prevAudio = document.getElementById("audio");
        prevAudio.pause();

        nextAlbum.style.opacity = 1;
        playAudio(nextAlbum.dataset.audio);

        albumIndex = newAlbumIndex;

        // Bring the new album image to the front
        nextAlbum.style.zIndex = parseInt(prevAlbum.style.zIndex || 0) + 1;
    }

    // Cycle through background images
    backgroundIndex = (backgroundIndex + 1) % backgroundImages.length;
    updateBackgroundImage(backgroundImages[backgroundIndex]);
}

function updateBackgroundImage(image) {
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url(${image})`;
}

function playAudio(audioSrc) {
    const audio = document.getElementById("audio");
    audio.src = audioSrc;
    audio.play();
}