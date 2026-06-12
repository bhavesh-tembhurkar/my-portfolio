// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // --- NAVBAR SCROLL STATE ---
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially in case page loaded scrolled down

    // --- HAMBURGER MENU TOGGLE ---
    const hamburger = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close menu when a link is clicked
        const navLinksList = document.querySelectorAll(".nav-menu a");
        navLinksList.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // --- SCROLL REVEAL ANIMATION (Intersection Observer) ---
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once it's revealed to keep layout stable
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        reveals.forEach(el => revealObserver.observe(el));
    }

    // --- NAV SCROLLSPY (Highlight active section) ---
    const navLinks = document.querySelectorAll('.nav-menu a.nav-link');
    const sections = document.querySelectorAll('header[id], section[id], footer[id]');
    
    if (navLinks.length > 0 && sections.length > 0) {
        function scrollSpy() {
            let currentId = "";
            const scrollPos = window.scrollY + window.innerHeight / 3;

            sections.forEach(sec => {
                const secTop = sec.offsetTop;
                const secHeight = sec.offsetHeight;
                
                if (scrollPos >= secTop && scrollPos < (secTop + secHeight)) {
                    currentId = sec.getAttribute('id');
                }
            });

            if (currentId) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        }

        window.addEventListener('scroll', scrollSpy);
        scrollSpy(); // Initial call
    }

    // --- INTERACTIVE WALKTHROUGH TABS ---
    const tabs = document.querySelectorAll('.walkthrough-tab');
    const screens = document.querySelectorAll('.walkthrough-screen');
    const windowTitle = document.getElementById('walkthrough-window-title');
    
    if (tabs.length > 0 && screens.length > 0 && windowTitle) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Get target image ID and screen title
                const targetId = tab.getAttribute('data-target');
                const targetTitle = tab.getAttribute('data-title');
                
                // Update window title
                windowTitle.textContent = targetTitle;
                
                // Switch screens
                screens.forEach(screen => {
                    screen.classList.remove('active');
                    if (screen.getAttribute('id') === targetId) {
                        screen.classList.add('active');
                    }
                });
            });
        });
    }
});