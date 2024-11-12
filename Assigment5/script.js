function showPopup(event) {
    const openPopups = document.querySelectorAll('.popup.show');
    openPopups.forEach(popup => {
        hidePopup(popup.id);
    });

    const popupId = event.currentTarget.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    const rect = event.currentTarget.getBoundingClientRect();
    
    popup.style.top = `${rect.top + window.scrollY}px`;
    popup.style.left = `${rect.left + window.scrollX}px`;
    popup.style.display = "block";
    requestAnimationFrame(() => {
        popup.classList.remove('hide');
        popup.classList.add('show');
    });
}

function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('show');
    popup.classList.add('hide');
    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}