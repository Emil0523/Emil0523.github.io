function showPopup(event) {
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
    }, 300); // Matcha med animationens längd
}