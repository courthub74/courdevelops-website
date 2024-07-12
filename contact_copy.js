// Query the email addy
let email_addy = document.getElementById('email_addy');

// Query the copy email button
let copy_email_button = document.getElementById('copy_email');

// Query the copy squares
let copy_squares = document.getElementById('copy_squares');

// Query the copy success check
let copy_success = document.getElementById('copy_success');

// Query the notification text
let email_copied = document.getElementById('email_copy');

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

// For any screen larger than the average tablet
let widthMatchDesktop = window.matchMedia("(min-width: 1180px)");

if(widthMatchDesktop.matches) {
    copy_email_button.addEventListener('click', () => {
        console.log("email_copy_button");
    });
}