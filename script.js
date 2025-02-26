// Image Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-img';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    
    // Append elements to lightbox
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    
    // Function to initialize lightbox for images
    function initLightbox() {
        console.log('Initializing lightbox for images');
        const images = document.querySelectorAll('.markdown-content img');
        console.log('Found ' + images.length + ' images');
        
        images.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Image clicked: ' + this.src);
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });
    }
    
    // Initialize immediately
    initLightbox();
    
    // Also initialize after a short delay to catch dynamically loaded content
    setTimeout(initLightbox, 1000);
    
    // Close lightbox when clicking close button or outside the image
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
}
    
    // For dynamically loaded content (if you're loading markdown after page load)