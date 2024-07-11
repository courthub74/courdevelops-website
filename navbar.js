// Query the .desktop_nav
let top_nav = document.getElementById('desktop_nav');

// Query the footer nav menu 
let about_footer = document.getElementById('about_footer');

// set a last scroll
let lastScroll = 0;

// window scroll detect
window.addEventListener('scroll', () => {
    // set a current scroll
    let currentScroll = window.scrollY;
    // compare current scroll to last scroll
        // then compare to greater than zero
        // SO if it's anywhere below the top
            // It detects
        if (currentScroll - lastScroll > 0) {
            // Make Navbar dissapear upon scroll down
            top_nav.classList.add('dissapear');
            // console.log('Scrolling Now');
            if (currentScroll !== 0) {
                // console.log("We are not at the top of the page");
                top_nav.classList.add('dissapear');
                // Make the Back to Top Arrow Appear
            }
        } else {
            // THIS has been deactivated in order to keep focus on the 
                // page material and to keep the menu at the top
            // All other scrolls up
            // top_nav.classList.remove('dissapear');
        }
        // AND if it's at the top
            // this also gives the menu button the cool drop in effect at top
        if (currentScroll === 0) {
            // console.log("We are at the top of the page");
            top_nav.classList.remove('dissapear');
        }
        // set the current scroll to the last scroll
        lastScroll = currentScroll; 
});

