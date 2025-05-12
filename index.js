document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const header = document.getElementById('header');
    
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 6000; // 6 seconds
    
    // Initialize the slider
    function initSlider() {
        if (slides.length === 0) return;
        
        // Show first slide
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Start auto-sliding
        startSlideInterval();
    }
    
    // Go to a specific slide
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Start auto-sliding interval
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Reset auto-sliding interval
    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }
    
    // Event listeners for slider
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetSlideInterval();
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetSlideInterval();
    });
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
            resetSlideInterval();
        });
    });
    
    // Pause on hover
    const slider = document.querySelector('.hero-slider');
    slider.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', function() {
        startSlideInterval();
    });
    
    // Initialize the slider
    initSlider();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link (mobile)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Make sure hero slider is full height
    function adjustHeroHeight() {
        const hero = document.querySelector('.hero-slider');
        hero.style.height = window.innerHeight + 'px';
    }

    // Initial adjustment
    adjustHeroHeight();

    // Adjust on resize
    window.addEventListener('resize', adjustHeroHeight);
});



//------------------------net contact parts----------------------- */


document.getElementById('emailBtn').addEventListener('click', function() {
    // Replace with your actual email address
    const recipientEmail = 'mugaboaime98@gmail.com';
    
    // Optional: pre-fill subject and body
    const subject = encodeURIComponent('Message from your website');
    const body = encodeURIComponent('Hello,\n\nI wanted to reach out about...');
    
    // Create mailto link for standard email clients
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    
    // Create Gmail specific URL
    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    
    // Try to open Gmail app (works on mobile if app is installed)
    window.location.href = `googlegmail:///co?to=${recipientEmail}&subject=${subject}&body=${body}`;
    
    // Fallback to Gmail web if app isn't available
    setTimeout(function() {
        if (!document.hidden) {
            window.open(gmailWebLink, '_blank');
        }
    }, 200);
    
    // Final fallback to standard mailto
    setTimeout(function() {
        if (!document.hidden) {
            window.location.href = mailtoLink;
        }
    }, 400);
});


//----------------------NAVIGATIONS JS -----------------------------

    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


//--------------Check if it's a mobile device

        function makeCall(phoneNumber) {
            // Check if it's a mobile device
            const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile) {
                // Open phone dialer on mobile
                window.location.href = `tel:${phoneNumber}`;
            } else {
                // Fallback for desktop users
                alert(`Please call this number from your phone: ${phoneNumber}`);
            }
        }