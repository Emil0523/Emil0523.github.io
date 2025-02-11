document.addEventListener("DOMContentLoaded", function() {
    function adjustLayout() {
        if (window.innerWidth <= 768) {
            // Anpassa layouten för mobil
            document.querySelectorAll('.image-container, .image-container-2').forEach(container => {
                container.style.flexDirection = 'column';
                container.style.alignItems = 'center';
                container.style.padding = '0';
                container.style.marginTop = '20px';
            });

            document.querySelectorAll('.image-container img, .image-container-2 img').forEach(img => {
                img.style.margin = '10px 0';
            });
        } else {
            // Återställ layouten för större skärmar
            document.querySelectorAll('.image-container, .image-container-2').forEach(container => {
                container.style.flexDirection = 'row';
                container.style.alignItems = 'center';
                container.style.padding = '0 40px';
                container.style.marginTop = '200px';
            });

            document.querySelectorAll('.image-container img, .image-container-2 img').forEach(img => {
                img.style.margin = '0 10px';
            });
        }
    }

    // Kör funktionen vid sidladdning och vid fönsterstorleksändring
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});