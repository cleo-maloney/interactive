const images = [
    "assets/aloneagain.png",
    "assets/herethere.png",
    "assets/howgladiam.png",
    "assets/julia.png",
    "assets/leonardcohen.png",
    "assets/letemin.png",
    "assets/neverrains.png",
    "assets/popstar.png",
    "assets/purplehat.png",
    "assets/quandoquando.png",
    "assets/septemberinrain.png",
    "assets/siesta.png",
    "assets/soundandcolor.png",
    "assets/stephaniesays.png",
    "assets/superrichkids.png",
    "assets/wichitalineman.png",
    "assets/yousexything.png",
    "assets/isaidgoobye.png",
    "assets/afarlamore.png"
];

const textElement = document.getElementById('text');
const imageElement = document.getElementById('image');

let shuffledImages = [...images];
let currentIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showImage() {
    if (currentIndex >= shuffledImages.length) {
        shuffledImages = shuffleArray([...images]);
        currentIndex = 0;
    }

    const imagePath = shuffledImages[currentIndex];
    imageElement.src = imagePath;
    imageElement.style.display = 'block';
    textElement.style.display = 'none';

    currentIndex++;
}

document.addEventListener('DOMContentLoaded', () => {
    shuffledImages = shuffleArray([...images]);
    document.addEventListener('click', showImage);
    document.addEventListener('keydown', showImage);
});
