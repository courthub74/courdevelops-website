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

// add event listener to email button
copy_email_button.addEventListener('click', () => {
    console.log("email_copy_button");
    // make copy boxes dissapear
    copy_squares.classList.add('tapped');
    // make check appear
    copy_success.classList.add('tapped');
    //'select' the email_addy
    // email_addy.select();
    // copy the email addy 
        // execute command method copies text to clipboard
    navigator.clipboard.writeText(email_addy.innerHTML);
    // reset the page on timer
});

// add event listener to email button
// copy_email_button.onclick = function () {
//     console.log("email_copy_button");
//     // make copy boxes dissapear
//     copy_squares.classList.add('tapped');
//     // make check appear
//     copy_success.classList.add('tapped');
//     //'select' the email_addy
//     email_addy.select();
//     // copy the email addy 
//         // execute command method copies text to clipboard
//     document.execCommand("copy");
//     // reset the page on timer
// };