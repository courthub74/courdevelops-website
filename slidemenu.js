// Query the Menu Button

// Outer Button
let menu_button_ring = document.getElementById('menu_ring');

// Inner Button
let menu_button = document.getElementById('menu_button');

// Query the string 'Menu'
let menu_button_text = document.getElementById('menu_text');

// Query the slide in Menu
let slide_in_menu = document.getElementById('slide_in_menu');

// Query the slide in selectors (to get rid of the menu when selected)
// let slide_in_selectors = document.querySelectorAll('.slide_ins');

// Query the home selector 
let home_selector = document.getElementById('home_selector');

// Query the portfolio selector
let portfolio_selector = document.getElementById('portfolio_selector');

// Query the Learn More to make it dissapear
let learn_more_button = document.querySelector('.learn_more');

// Query the Body to stop the scroll
let whole_body = document.querySelector('body');

// event listener for the menu button
menu_button.addEventListener('pointerdown', () => {
    console.log('Menu Button Pressed');
    menu_button_ring.classList.toggle('tapped');
    menu_button.classList.toggle('tapped');
    menu_button_text.classList.toggle('tapped');
    slide_in_menu.classList.toggle('tapped');
    if (menu_button_text.innerText === "Contact") {
        menu_button_text.innerText = "Back";
    } else {
        menu_button_text.innerText = "Contact";
    }
    learn_more_button.classList.toggle('slide');
    whole_body.classList.toggle('stop_scroll');
});


// For the Contact Button on bottom nav
// Query the contact button in nav
let contact_nav = document.getElementById('contact_nav');
// slide to home page
// activate the contact button
contact_nav.addEventListener('pointerdown', () => {
    console.log('Contact Button Pressed');
    menu_button_ring.classList.toggle('tapped');
    menu_button.classList.toggle('tapped');
    menu_button_text.classList.toggle('tapped');
    slide_in_menu.classList.toggle('tapped');
    if (menu_button_text.innerText === "Contact") {
        menu_button_text.innerText = "Back";
    } else {
        menu_button_text.innerText = "Contact";
    }
    learn_more_button.classList.toggle('slide');
    whole_body.classList.toggle('stop_scroll');
});

// Query the back to home button
let home_button = document.getElementById('back_home');

// add event listener to the home button
home_button.addEventListener('pointerdown', () => {
    console.log("Back to Home pressed");
    menu_button_ring.classList.toggle('tapped');
    menu_button.classList.toggle('tapped');
    menu_button_text.classList.toggle('tapped');
    slide_in_menu.classList.toggle('tapped');
    if (menu_button_text.innerText === "Contact") {
        menu_button_text.innerText = "Back";
    } else {
        menu_button_text.innerText = "Contact";
    }
    learn_more_button.classList.toggle('slide');
    whole_body.classList.toggle('stop_scroll');
});


