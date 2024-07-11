// Query the Whole Squares (to light up the top border)
let port_sq_one = document.getElementById('portfolio_square_one');
let port_sq_two = document.getElementById('portfolio_square_two');
let port_sq_three = document.getElementById('portfolio_square_three');

// Query the Logos (for pressing the button and desktop hover overs)
let port_logo_one = document.getElementById('workflow_app');
let port_logo_two = document.getElementById('create_collab');
let port_logo_three = document.getElementById('luminex_solutions');

// New Logo FOR COVER CLICK
let portfolio_logo_one = document.getElementById('workflow_app_cover');
let portfolio_logo_two = document.getElementById('create_collab_cover');
let portfolio_logo_three = document.getElementById('luminex_solutions_cover');


// Query the Cover Logos (for hover and clicking -- make them dissapear)
let portfolio_cover_one = document.getElementById('portfolio_cover_one');
let portfolio_cover_two = document.getElementById('portfolio_cover_two');
let portfolio_cover_three = document.getElementById('portfolio_cover_three');

// Query the WHOLE SECTION to expand when button pressed
let port_section = document.getElementById('portfolio_section_id');

// Query the Logo and apps (to appear on landscape)
let logo_and_app_workflow = document.getElementById('workflow_logo_and_app');
let logo_and_app_create_collab = document.getElementById('create_collab_logo_and_app');
let logo_and_app_luminex_solutions = document.getElementById('luminex_solutions_logo_and_app');

// Query the Content (what pops up when dropped down)
let port_content_one = document.getElementById('workflow_app_content');
let port_content_two = document.getElementById('create_collab_content');
let port_content_three = document.getElementById('luminex_content');

// Query the Close button (to close the square)
let port_close_one = document.getElementById('port_close_one');
let port_close_two = document.getElementById('port_close_two');
let port_close_three = document.getElementById('port_close_three');

// Query the Square expanded elements
let square_content_workflow = document.getElementById('portfolio_one');
let square_content_create = document.getElementById('portfolio_two');
let square_content_luminex = document.getElementById('portfolio_three');

// MOBILE 

// PORTRAIT

let widthMatchPortrait = window.matchMedia("(max-width: 800px)");

if(widthMatchPortrait) {
    // SQUARE ONE

    portfolio_logo_one.addEventListener('pointerdown', () => {
        console.log("Box One Pressed");
        // Top Box turned White
        port_sq_one.classList.add('tapped');
        // Content Shown
        port_content_one.classList.add('tapped');
        // Cover Dissapear
        portfolio_logo_one.classList.add('tapped');
        // Box Extended
        port_section.classList.add('tapped');
        // Z-index the Elements 
        square_content_workflow.classList.add('tapped');
        // Zero the others
        // square_content_create.classList.add('untapped');
        // square_content_luminex.classList.add('untapped');
    });

    // Close button to click off
    port_close_one.addEventListener('pointerdown', () => {
        console.log("Close Pressed");
        // Top Box turned White
        port_sq_one.classList.remove('tapped');
        // Content Shown
        port_content_one.classList.remove('tapped');
        // Cover Dissapear
        portfolio_logo_one.classList.remove('tapped');
        // Box Extended
        port_section.classList.remove('tapped');
        // Z-index the Elements 
        square_content_workflow.classList.remove('tapped');
    });

    // SQUARE TWO
    portfolio_logo_two.addEventListener('pointerdown', () => {
        console.log("Box Two Pressed");
        port_sq_two.classList.add('tapped');
        portfolio_logo_two.classList.add('tapped');
        // port_logo_two.classList.add('tapped');
        port_content_two.classList.add('tapped');
        port_section.classList.add('tapped');
        // Z-index the Elements 
        square_content_create.classList.add('tapped');
    });

    // Close button to click off
    port_close_two.addEventListener('pointerdown', () => {
        console.log('Close Button Three');
        port_sq_two.classList.remove('tapped');
        // port_logo_two.classList.remove('tapped');
        portfolio_logo_two.classList.remove('tapped');
        port_content_two.classList.remove('tapped');
        port_section.classList.remove('tapped');
        // Z-index the Elements 
        square_content_create.classList.remove('tapped');
    });

    // SQUARE THREE

    // Close button to click off
    portfolio_cover_three.addEventListener('pointerdown', () => {
        console.log("Box Three Pressed");
        port_sq_three.classList.add('tapped');
        portfolio_logo_three.classList.add('tapped');
        // port_logo_three.classList.add('tapped');
        port_content_three.classList.add('tapped');
        port_section.classList.add('tapped');
    });

    // Close button to click off
    port_close_three.addEventListener('pointerdown', () => {
        console.log('Close Button Three');
        port_sq_three.classList.remove('tapped');
        portfolio_logo_three.classList.remove('tapped');
        // port_logo_three.classList.remove('tapped');
        port_content_three.classList.remove('tapped');
        port_section.classList.remove('tapped');
    });

}

// LANDSCAPE 

    // for LANDSCAPE need to query both logo and description and content
            // for pointerdown
            let widthMatchLandscape = window.matchMedia("(min-width: 812px)");

            if(widthMatchLandscape) {
                
                // SQUARE ONE
                portfolio_logo_one.addEventListener('pointerdown', () => {
                    console.log("Landscape Logo One");
                    portfolio_logo_one.classList.add('landscaped');
                    port_sq_one.classList.add('landscaped');
                    port_content_one.classList.add('landscaped');
                    logo_and_app_workflow.classList.add('landscaped');
                    port_section.classList.add('landscaped');
                });
                // close button
                port_close_one.addEventListener('pointerdown', () => {
                    console.log("Landscape One Closed");
                    portfolio_logo_one.classList.remove('landscaped');
                    port_sq_one.classList.remove('landscaped');
                    port_content_one.classList.remove('landscaped');
                    logo_and_app_workflow.classList.remove('landscaped');
                });

                // SQUARE TWO
                portfolio_logo_two.addEventListener('pointerdown', () => {
                    console.log("Landscape Logo Two");
                    portfolio_logo_two.classList.add('landscaped');
                    port_sq_two.classList.add('landscaped');
                    port_content_two.classList.add('landscaped');
                    logo_and_app_create_collab.classList.add('landscaped');
                    port_section.classList.add('landscaped');
                });
                // close button
                port_close_two.addEventListener('pointerdown', () => {
                    console.log("Landscape Two Closed");
                    portfolio_logo_two.classList.remove('landscaped');
                    port_sq_two.classList.remove('landscaped');
                    port_content_two.classList.remove('landscaped');
                    logo_and_app_create_collab.classList.remove('landscaped');
                    port_section.classList.remove('landscaped');
                });

                // SQUARE THREE
                portfolio_logo_three.addEventListener('pointerdown', () => {
                    console.log("Landscape Logo Three");
                    portfolio_logo_three.classList.add('landscaped');
                    port_sq_three.classList.add('landscaped');
                    port_content_three.classList.add('landscaped');
                    logo_and_app_luminex_solutions.classList.add('landscaped');
                    port_section.classList.add('landscaped');
                });
                // close button
                port_close_three.addEventListener('pointerdown', () => {
                    console.log("Landscape Three Closed");
                    portfolio_logo_three.classList.remove('landscaped');
                    port_sq_three.classList.remove('landscaped');
                    port_content_three.classList.remove('landscaped');
                    logo_and_app_luminex_solutions.classList.remove('landscaped');
                    port_section.classList.remove('landscaped');
                });
            }


// DESKTOP

// For any screen larger than the average tablet
let widthMatchPortfolio = window.matchMedia("(min-width: 1180px)");

if(widthMatchPortfolio.matches) {

    // SQUARE ONE
    port_sq_one.addEventListener('mouseover', () => {
        console.log("Square One");
        // Make Logo dissapear
        port_logo_one.classList.add('hover');
        // Make content appear
        port_content_one.classList.add('hover');
        // Light the top of Square
        port_sq_one.classList.add('hover');
        // Make Cover dissapear
        portfolio_cover_one.classList.add('hover');
    });

    port_sq_one.addEventListener('mouseout', () => {
        // Make Logo ReAppear
        port_logo_one.classList.remove('hover');
        // Make content ReDissapear
        port_content_one.classList.remove('hover');
        // UnLight the top of Square
        port_sq_one.classList.remove('hover');
        // Replace the Cover
        portfolio_cover_one.classList.remove('hover');
    });

    // SQUARE TWO
    port_sq_two.addEventListener('mouseover', () => {
        console.log("Square Two");
        // Make Logo dissapear
        port_logo_two.classList.add('hover');
        // Make content appear
        port_content_two.classList.add('hover');
        // Light the top of Square
        port_sq_two.classList.add('hover');
        // Make Cover dissapear
        portfolio_cover_two.classList.add('hover');
    });

    port_sq_two.addEventListener('mouseout', () => {
        console.log("Square Two");
        // Make Logo dissapear
        port_logo_two.classList.remove('hover');
        // Make content appear
        port_content_two.classList.remove('hover');
        // Light the top of Square
        port_sq_two.classList.remove('hover');
        // Replace the Cover
        portfolio_cover_two.classList.remove('hover');
    });

    // SQUARE THREE
    port_sq_three.addEventListener('mouseover', () => {
        console.log("Square Three");
        // Make Logo dissapear
        port_logo_three.classList.add('hover');
        // Make content appear
        port_content_three.classList.add('hover');
        // Light the top of Square
        port_sq_three.classList.add('hover');
        // Make Cover dissapear
        portfolio_cover_three.classList.add('hover');
    });

    port_sq_three.addEventListener('mouseout', () => {
        // Make Logo dissapear
        port_logo_three.classList.remove('hover');
        // Make content appear
        port_content_three.classList.remove('hover');
        // Light the top of Square
        port_sq_three.classList.remove('hover');
        // Replace the Cover
        portfolio_cover_three.classList.remove('hover');
    });
}