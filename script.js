// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Select the navigation bar
    const navbar = document.querySelector('.navbar');

    // Function to run when the user scrolls
    function handleScroll() {
        if (window.scrollY > 50) {
            // If scrolled more than 50px, add the 'scrolled' class
            navbar.classList.add('scrolled');
        } else {
            // Otherwise, remove it
            navbar.classList.remove('scrolled');
        }
    }

    // Listen for the 'scroll' event
    window.addEventListener('scroll', handleScroll);


    // --- NEW HAMBURGER MENU CODE ---
    
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    // Add click event to hamburger
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-menu li").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

});