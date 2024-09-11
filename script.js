var helga = document.querySelector('img');

helga.addEventListener('click', () => {
    // helga.style.rotate = '9000deg';
    // helga.style.scale = 5;
    helga.classList.add('animate');
});

document.addEventListener('DOMContentLoaded', function() {
// Hämta referens till <img> elementet inom <a> taggen
var horseImage = document.querySelector('a[href="https://www.tiktok.com/@helga3178"] img');

// Lägg till en klick-händelse på <img> elementet
horseImage.addEventListener('click', function(event) {
// Förhindra standardbeteendet för länken
event.preventDefault();

// Lägg till klassen "animate" till <img> elementet
horseImage.classList.add('animate');
});
});

