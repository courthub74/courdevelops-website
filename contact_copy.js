// Query the email addy (Mobile)
let email_addy = document.getElementById('email_addy');
// Query the email addy (Desktop)
let email_addy_desktop = document.getElementById('email_addy_desktop');

// Query the copy email button (Mobile)
let copy_email_button = document.getElementById('copy_email');
// Query the copy email button (Desktop)
let copy_email_button_desktop = document.getElementById('copy_email_desktop');

// Query the copy squares (Mobile)
let copy_squares = document.getElementById('copy_squares');
// Query the copy squares (Desktop)
let copy_squares_desktop = document.getElementById('copy_squares_desktop');

// Query the copy success check (Mobile)
let copy_success = document.getElementById('copy_success');
// Query the copy success check (Desktop)
let copy_success_desktop = document.getElementById('copy_success_desktop');

// Query the notification text (Mobile)
let email_copied = document.getElementById('email_copy');
// Query the notification text (Desktop)
let email_copied_desktop = document.getElementById('email_copy_desktop');


// add event listener to email button (MOBILE DEVICES)
copy_email_button.addEventListener('click', () => {
    console.log("email_copy_button");
    // make copy boxes dissapear
    copy_squares.classList.add('tapped');
    // make check appear
    copy_success.classList.add('tapped');
    // copy the email addy 
        // with clipboard API
    navigator.clipboard.writeText(email_addy.innerHTML);
    // make notification appear
    email_copied.classList.add('tapped');
    // reset the page on timer
    resetCopyEmail = () => {
        console.log("Ready to reset");
        // make copy boxes re-appear
        copy_squares.classList.remove('tapped');
        // make check dissapear
        copy_success.classList.remove('tapped');
        // remove notification
        email_copied.classList.remove('tapped');
    }
    setTimeout(resetCopyEmail, 2000);
});

// add event listener to email button (DESKTOP)
    // NEW IDs
copy_email_button_desktop.addEventListener('click', () => {
    console.log("email_copy_desktop");
    copy_squares_desktop.classList.add('clicked');
    copy_success_desktop.classList.add('clicked');
    navigator.clipboard.writeText(email_addy_desktop.innerHTML);
    email_copied_desktop.classList.add('clicked');
    resetCopyEmailDesktop = () => {
        console.log("Ready to reset");
        copy_squares_desktop.classList.remove('clicked');
        copy_success_desktop.classList.remove('clicked');
        email_copied_desktop.classList.remove('clicked');
    }
    setTimeout(resetCopyEmailDesktop, 2000);
});