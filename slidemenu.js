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



// FOR WHEN THERE WAS A SELECTORS LIST 
// add event listeners to the list selectors
// iterate through the slide_in_selectors using the forEach method
// slide_in_selectors.forEach((e) => {
//     e.addEventListener('pointerdown', () => {
//         console.log("Pressit");
//         slide_in_menu.classList.remove('tapped');
//         menu_button_ring.classList.toggle('tapped');
//         menu_button.classList.toggle('tapped');
//         menu_button_text.classList.toggle('tapped');
//         if (menu_button_text.innerText === "Contact.") {
//             menu_button_text.innerText = "Close";
//         } else {
//             menu_button_text.innerText = "Contact.";
//         }
//         learn_more_button.classList.toggle('slide');
//     });
// });



