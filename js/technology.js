// Find all the numbered buttons and call them "btns"
const btns = document.querySelectorAll(".enumirate .num");

// Find where we will put the name, description, and picture
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let image = document.querySelector(".image");

// Make an empty box called "allData" to store information about the technology
// We will use this array to store information about different technologies.
// As we fetch or receive technology data from the internet or another source, we will add that data into this array so we can access it later.
let allData = [];
let num = 0; //The num variable is used to keep track of which button was clicked. When a button is clicked, this variable will be updated to reflect the number or index of the clicked button
let img = ""; // The img variable is used to store the URL or file path of the image that should be displayed. When a button is clicked, this variable will be updated to hold the appropriate image URL for the selected technology.

// Go get the information about the technology from the internet
fetch("./data.json")
    .then((res) => res.json()) // When the information comes back, turn it into something we can use
    .then((data) => {
        // For each technology item in the data, put their information into the "allData" box
        for (let i = 0; i < data.technology.length; i++) {
            allData.push(data.technology[i]);
        }
    });

// A function that runs when the page loads and when the window size changes
(function () {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;
        // Check the size of the window
        if (myWidth >= 1100) {
            img = "portrait"; // If the window is big, use the portrait image
        } else {
            img = "landscape"; // If the window is small, use the landscape image
        }
        // Show the right picture based on the window size
        image.src = allData[num].images[img];
    }
})();

// For each numbered button, do this when we click on it:
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Take away the "active" label from all buttons
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        // Give the clicked button the "active" label
        btn.classList.add("active");

        // Update the number to match the clicked button
        num = btn.innerText - 1;

        // Show the name, description, and the correct picture of the technology item
        name.innerText = allData[num].name;
        description.innerText = allData[num].description;
        image.src = allData[num].images[img];
    });
});
