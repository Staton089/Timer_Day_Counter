// Get the input element where the user will select a date
let userDate = document.getElementById("userDate"); // <input type="date" id="userDate">

// Get the paragraph element where the selected date will be displayed
let selectedDate = document.getElementById("selectedDate"); // <p id="selectedDate"></p>

// Get the div element that displays "Days" 
let displayDays = document.getElementById("displayDays"); // <div id="displayDays">Days</div>

// Get the button element that will trigger the date posting function
let displayDateBtn = document.getElementById("displayDateBtn"); // <button onclick="postDate" id="displayDateBtn">Post</button>

// Add an event listener to the button to call the postDate function when it is clicked
displayDateBtn.addEventListener("click", postDate);




// Function to handle the date posting logic
function postDate() {
    // Check if the user has selected a date
    if (userDate.value) {
        // If a date is selected, display it in the selectedDate paragraph
        selectedDate.textContent = `Selected Date: ${userDate.value}`;
        
        // Remove the date input element from the page
        userDate.remove();

        // Remove the "Post" button from the page
        displayDateBtn.remove();
    } else {
        // If no date is selected, display a message indicating so
        selectedDate.textContent = "No date selected.";
    }
}


// Create a Function that will start the countdown from that date 

// Logic: Find a way to take the start date = "userDate.value" and start a timer from that going up in days.
// Save the timer in local Storgae so the timer does not start over when you refresh the page. 
// Create a button that will keep your streaks and also reset the countdown from the page. 
// so bring back the calender and post btn.
