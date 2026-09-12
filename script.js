
const image = document.getElementById("image");

const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];

let currentImage = 0;

image.addEventListener("click", () => {
    currentImage++;

    // Go back to the first image after the last one
    if (currentImage >= images.length) {
        currentImage = 0;
    }

    image.src = images[currentImage];
});
